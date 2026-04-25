import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminMobile = "9999999999";
  const passwordHash = await bcrypt.hash("Admin@123", 12);

  await prisma.user.upsert({
    where: { mobile: adminMobile },
    update: {},
    create: {
      mobile: adminMobile,
      passwordHash,
      role: "ADMIN",
      name: "GramSeva Admin",
      state: "Maharashtra",
      district: "Pune",
      village: "HQ",
      language: "en",
      needsLanguageSelection: false,
      isVerified: true,
      isDocVerified: true,
      skills: [],
      profile: { create: { bio: "Platform administrator" } },
    },
  });

  const courses = [
    {
      title: "Modern Farming Techniques",
      description: "Improve soil health, crop planning, irrigation, and harvest quality with practical on-field methods.",
      language: "Hindi",
      duration: "4 weeks",
      level: "Beginner",
      category: "Agriculture",
      thumbnailUrl: "https://picsum.photos/seed/course-1/800/450",
    },
    {
      title: "Basic Electrician Skills",
      description: "Learn household electrical safety, wiring basics, and common repair workflows used in rural service work.",
      language: "English",
      duration: "3 weeks",
      level: "Intermediate",
      category: "Technical",
      thumbnailUrl: "https://picsum.photos/seed/course-2/800/450",
    },
    {
      title: "Mobile Phone Basics",
      description: "Use smartphones confidently for payments, maps, WhatsApp job communication, and digital document sharing.",
      language: "Marathi",
      duration: "2 weeks",
      level: "Beginner",
      category: "Digital",
      thumbnailUrl: "https://picsum.photos/seed/course-3/800/450",
    },
  ];

  for (const course of courses) {
    await prisma.course.upsert({
      where: { id: course.title.toLowerCase().replace(/\s+/g, "-") },
      update: course,
      create: {
        id: course.title.toLowerCase().replace(/\s+/g, "-"),
        ...course,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
