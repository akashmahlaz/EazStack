"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

type VerifyEmailContentProps = {
  email?: string;
  error?: string;
};

export function VerifyEmailContent({
  email,
  error,
}: VerifyEmailContentProps) {
  const [message, setMessage] = useState("");
  const [resendError, setResendError] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleResend() {
    if (!email || isSending) {
      return;
    }

    setMessage("");
    setResendError("");
    setIsSending(true);

    try {
      const { error } = await authClient.sendVerificationEmail({
        email,
        callbackURL: "/verify-email",
      });

      if (error) {
        setResendError(error.message);
        return;
      }

      setMessage("A new verification email has been sent.");
    } catch {
      setResendError(
        "Unable to send the verification email. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  }

  if (error) {
    return (
      <section>
        <h1>Verification failed</h1>
        <p>
          The verification link is invalid or has expired.
        </p>

        {email && (
          <button
            type="button"
            onClick={handleResend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send a new verification email"}
          </button>
        )}

        {message && <p>{message}</p>}
        {resendError && <p role="alert">{resendError}</p>}
      </section>
    );
  }

  return (
    <section>
      <h1>Check your email</h1>

      <p>
        We sent a verification link
        {email ? ` to ${email}.` : "."}
      </p>

      <p>
        Open the email and click the verification link to activate your
        account.
      </p>

      {email && (
        <button
          type="button"
          onClick={handleResend}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Resend verification email"}
        </button>
      )}

      {message && <p>{message}</p>}
      {resendError && <p role="alert">{resendError}</p>}
    </section>
  );
}
