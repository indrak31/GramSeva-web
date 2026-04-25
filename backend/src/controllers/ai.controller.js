import { AIConversationLog } from "../models/AIConversationLog.js";
import { Application } from "../models/Application.js";
import { Enrollment } from "../models/Enrollment.js";
import { Job } from "../models/Job.js";
import { User } from "../models/User.js";
import { generateAssistantReply, isAiConfigured } from "../services/ai.service.js";

const languageNames = {
  en: "English",
  hi: "Hindi",
  mr: "Marathi",
  bn: "Bengali",
  ta: "Tamil",
  te: "Telugu",
  kn: "Kannada",
  pa: "Punjabi",
  gu: "Gujarati",
};

const sectionLabels = {
  about: "overview",
  jobs: "jobs",
  "post-job": "post job",
  applications: "applications",
  courses: "courses",
  ratings: "ratings",
  settings: "settings",
  "gram-ai": "assistant",
};

function getLanguageName(language) {
  return languageNames[language] || "English";
}

function getSectionLabel(section) {
  return sectionLabels[section] || "dashboard";
}

function matchesAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function formatJobLines(jobs) {
  if (!jobs.length) {
    return "- No matching jobs found right now.";
  }

  return jobs
    .map((job) => `- ${job.title} in ${job.district}: Rs ${job.salary}/${job.salaryUnit}`)
    .join("\n");
}

function formatApplicationLines(applications) {
  if (!applications.length) {
    return "- No recent applications yet.";
  }

  return applications
    .map((application) => `- ${application.job?.title || "Job"}: ${application.status}`)
    .join("\n");
}

function formatEmployerJobLines(jobs) {
  if (!jobs.length) {
    return "- No jobs posted yet.";
  }

  return jobs
    .map((job) => `- ${job.title} in ${job.district}: ${job.status}`)
    .join("\n");
}

function buildAssistantFoundation(user, currentSection) {
  return `You are GRAM AI, the built-in AI assistant inside GramRozgaar.
You are not a narrow chatbot and you are not limited to the quick prompts on screen.
Behave like a capable digital chief-of-staff: calm, sharp, proactive, and practical.

IDENTITY:
- Product: GramRozgaar
- User language: ${getLanguageName(user.language)}
- Current app section: ${getSectionLabel(currentSection)}

CORE BEHAVIOR:
- Handle open-ended questions, not just platform FAQs.
- You can explain, compare options, translate, draft content, plan steps, summarize, and coach the user.
- Answer the real question first. Do not delay the answer with unnecessary disclaimers.
- When useful, give a clear next-step plan with 2 to 4 concrete actions.
- If the user wants text to use directly, draft it in ready-to-use form.
- If the user wants an explanation, make it simple and grounded in real examples.
- If the user asks in simple language, answer in simple language.
- If the request is ambiguous, ask only one short clarifying question.
- Do not say you can only help with this app.
- If opening a product section would help, mention it naturally, but do not pretend you already opened it.

RESPONSE STYLE:
- Always respond in ${getLanguageName(user.language)}.
- Sound natural and confident, not robotic.
- Prefer concise, high-signal answers.
- Use short headings or bullets only when they improve clarity.
- Do not use asterisks, markdown bullet markers, or markdown bold formatting.
- If you need a list, use plain numbered lines like 1. 2. 3.
- Avoid filler, generic chatbot phrases, and repetitive safety text.

SAFETY:
- Never provide medical, legal, or investment advice.
- For labor rights or wage guidance, provide general practical guidance only.
- Never claim to have completed any product action unless the UI actually does it separately.`;
}

function buildWorkerPrompt(user, context) {
  return `${buildAssistantFoundation(user, context.currentSection)}

USER PROFILE:
- Name: ${user.name}
- Role: Worker
- Location: ${user.district}, ${user.state}
- Village: ${user.village || "Not provided"}
- Skills: ${(user.skills || []).join(", ") || "Not provided"}
- Profile rating: ${user.profile?.rating || "Not yet rated"}
- Applications: ${context.applicationSummary.total} total, ${context.applicationSummary.pending} pending, ${context.applicationSummary.shortlisted} shortlisted, ${context.applicationSummary.hired} hired
- Enrolled courses: ${context.enrollmentCount}

LIVE JOB CONTEXT:
${formatJobLines(context.nearbyJobs)}

RECENT APPLICATION CONTEXT:
${formatApplicationLines(context.recentApplications)}

WHAT YOU SHOULD HELP WITH:
- Finding suitable jobs and comparing them
- Explaining job descriptions, pay, work terms, or requirements
- Improving the user's profile so employers trust it more
- Suggesting which skills to learn next and why
- Translating or simplifying job information
- Planning the user's next steps for getting hired
- Offering general guidance about rural work, schemes, and work-readiness when relevant`;
}

function buildEmployerPrompt(user, context) {
  return `${buildAssistantFoundation(user, context.currentSection)}

USER PROFILE:
- Name: ${user.name}
- Role: Employer
- Company: ${user.companyName || user.name}
- Business type: ${user.businessType || "Not provided"}
- Location: ${user.district}, ${user.state}
- Jobs posted: ${context.jobSummary.total}
- Active jobs: ${context.jobSummary.active}
- Open applications: ${context.jobSummary.openApplications}
- Hired applications: ${context.jobSummary.hiredApplications}

RECENT JOB CONTEXT:
${formatEmployerJobLines(context.recentJobs)}

WHAT YOU SHOULD HELP WITH:
- Drafting clear, strong job posts
- Defining skills, wage ranges, and benefits fairly
- Building hiring checklists and shortlisting criteria
- Comparing candidates and deciding who to contact first
- Writing calling scripts, interview questions, or follow-up messages
- Improving hiring workflow inside the product
- Explaining general practical labor guidance in simple terms`;
}

function pushAction(actions, seen, targetSection) {
  if (!targetSection || seen.has(targetSection)) {
    return;
  }

  seen.add(targetSection);
  actions.push({ type: "navigate", targetSection });
}

function buildSuggestedActions(user, message, reply) {
  const text = `${message} ${reply}`.toLowerCase();
  const actions = [];
  const seen = new Set();

  if (matchesAny(text, [/\b(open|show|take me to|go to|dashboard|overview|summary|home)\b/])) {
    pushAction(actions, seen, "about");
  }

  if (user.role === "WORKER") {
    if (matchesAny(text, [/\b(job|jobs|work|vacancy|opening|salary|pay|near me|role)\b/, /\bapply\b/])) {
      pushAction(actions, seen, "jobs");
    }
    if (matchesAny(text, [/\b(application|applications|applied|status|withdraw)\b/])) {
      pushAction(actions, seen, "applications");
    }
    if (matchesAny(text, [/\b(course|courses|skill|skills|learn|training|plan)\b/])) {
      pushAction(actions, seen, "courses");
    }
    if (matchesAny(text, [/\b(rating|ratings|review|reviews)\b/])) {
      pushAction(actions, seen, "ratings");
    }
    if (matchesAny(text, [/\b(profile|settings|bio|avatar|photo|document|language|account)\b/])) {
      pushAction(actions, seen, "settings");
    }
  }

  if (user.role === "EMPLOYER") {
    if (matchesAny(text, [/\b(post|create|draft|write|job description|new job|vacancy)\b/])) {
      pushAction(actions, seen, "post-job");
    }
    if (matchesAny(text, [/\b(job|jobs|posted|opening)\b/])) {
      pushAction(actions, seen, "jobs");
    }
    if (matchesAny(text, [/\b(application|applications|shortlist|hire|candidate|worker|applicant|screen)\b/])) {
      pushAction(actions, seen, "applications");
    }
    if (matchesAny(text, [/\b(rating|ratings|review|reviews)\b/])) {
      pushAction(actions, seen, "ratings");
    }
    if (matchesAny(text, [/\b(profile|settings|company|gst|website|language|account)\b/])) {
      pushAction(actions, seen, "settings");
    }
  }

  return actions.slice(0, 3);
}

function buildTemporaryFallbackReply(user) {
  return user.role === "EMPLOYER"
    ? "GRAM AI is temporarily busy right now. Please try again shortly, or continue with Post a Job and Applications while the assistant reconnects."
    : "GRAM AI is temporarily busy right now. Please try again shortly, or continue with Jobs and Skill Courses while the assistant reconnects.";
}

async function getWorkerContext(user, currentSection) {
  const [nearbyJobs, recentApplications, enrollmentCount, totalApplications, pendingCount, shortlistedCount, hiredCount] = await Promise.all([
    Job.find({ state: user.state, status: "ACTIVE" })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title district salary salaryUnit"),
    Application.find({ workerId: user.id })
      .sort({ appliedAt: -1 })
      .limit(5)
      .populate({
        path: "job",
        select: "title",
      }),
    Enrollment.countDocuments({ userId: user.id }),
    Application.countDocuments({ workerId: user.id }),
    Application.countDocuments({ workerId: user.id, status: "PENDING" }),
    Application.countDocuments({ workerId: user.id, status: "SHORTLISTED" }),
    Application.countDocuments({ workerId: user.id, status: "HIRED" }),
  ]);

  return {
    currentSection,
    nearbyJobs,
    recentApplications,
    enrollmentCount,
    applicationSummary: {
      total: totalApplications,
      pending: pendingCount,
      shortlisted: shortlistedCount,
      hired: hiredCount,
    },
  };
}

async function getEmployerContext(user, currentSection) {
  const [recentJobs, employerJobs] = await Promise.all([
    Job.find({ employerId: user.id })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title district salary salaryUnit status"),
    Job.find({ employerId: user.id }).select("_id status"),
  ]);

  const jobIds = employerJobs.map((job) => job.id);

  const [openApplications, hiredApplications] = await Promise.all([
    jobIds.length
      ? Application.countDocuments({ jobId: { $in: jobIds }, status: { $in: ["PENDING", "SHORTLISTED"] } })
      : 0,
    jobIds.length ? Application.countDocuments({ jobId: { $in: jobIds }, status: "HIRED" }) : 0,
  ]);

  const totalJobs = employerJobs.length;
  const activeJobs = employerJobs.filter((job) => job.status === "ACTIVE").length;

  return {
    currentSection,
    recentJobs,
    jobSummary: {
      total: totalJobs,
      active: activeJobs,
      openApplications,
      hiredApplications,
    },
  };
}

export async function chat(req, res) {
  const { message, history = [], currentSection } = req.body;
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const context = user.role === "EMPLOYER"
    ? await getEmployerContext(user, currentSection)
    : await getWorkerContext(user, currentSection);

  const systemPrompt = user.role === "EMPLOYER"
    ? buildEmployerPrompt(user, context)
    : buildWorkerPrompt(user, context);

  try {
    const result = await generateAssistantReply({
      systemPrompt,
      history,
      message,
    });

    const actions = buildSuggestedActions(user, message, result.reply);

    await AIConversationLog.create({
      userId: user.id,
      message,
      response: result.reply,
      role: "assistant",
    });

    return res.json({
      reply: result.reply,
      role: "assistant",
      mode: "assistant",
      provider: result.source,
      model: result.model,
      configured: isAiConfigured(),
      actions,
      temporaryUnavailable: Boolean(result.temporaryUnavailable),
    });
  } catch (error) {
    console.error("GRAM AI chat failed", error);

    const fallbackReply = buildTemporaryFallbackReply(user);
    const actions = user.role === "EMPLOYER"
      ? [{ type: "navigate", targetSection: "post-job" }, { type: "navigate", targetSection: "applications" }]
      : [{ type: "navigate", targetSection: "jobs" }, { type: "navigate", targetSection: "courses" }];

    await AIConversationLog.create({
      userId: user.id,
      message,
      response: fallbackReply,
      role: "assistant",
    }).catch(() => {});

    return res.json({
      reply: fallbackReply,
      role: "assistant",
      mode: "assistant",
      provider: "fallback",
      model: null,
      configured: isAiConfigured(),
      actions,
      temporaryUnavailable: true,
    });
  }
}
