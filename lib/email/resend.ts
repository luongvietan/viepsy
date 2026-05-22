import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY chưa được cấu hình.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function getBookingFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
}

export function getBookingToEmail(): string {
  return process.env.BOOKING_TO_EMAIL ?? "camroihieu@viepsy.vn";
}
