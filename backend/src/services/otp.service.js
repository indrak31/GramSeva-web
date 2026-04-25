import twilio from "twilio";

let client = null;

function hasUsableTwilioConfig() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;

  return Boolean(
    accountSid &&
    authToken &&
    fromNumber &&
    accountSid.startsWith("AC") &&
    authToken !== "..." &&
    fromNumber !== "...",
  );
}

function getTwilioClient() {
  if (!hasUsableTwilioConfig()) {
    return null;
  }

  if (!client) {
    client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  return client;
}

export async function sendSMS(mobile, message) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[GRAMROZGAAR OTP] +91${mobile}: ${message}`);
    return { success: true, development: true };
  }

  const twilioClient = getTwilioClient();

  if (!twilioClient || !process.env.TWILIO_FROM_NUMBER) {
    throw new Error("SMS provider is not configured");
  }

  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_FROM_NUMBER,
    to: `+91${mobile}`,
  });
}
