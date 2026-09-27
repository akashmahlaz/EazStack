import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({
  to,
  url,
  name,
}: {
  to: string;
  url: string;
  name: string;
}) {
  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to,
    subject: "Verify your email address",
    html: `
      <h2>Verify your email</h2>
      <p>Hi ${name},</p>
      <p>Click the button below to verify your email address.</p>
      <p>
        <a href="${url}">Verify email</a>
      </p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
