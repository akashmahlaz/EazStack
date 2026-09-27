"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function SocialAuthButtons() {
  const router = useRouter();

  const [providerLoading, setProviderLoading] = useState<
    "google" | "linkedin" | null
  >(null);

  const [error, setError] = useState("");

  async function handleSocialSignIn(
    provider: "google" | "linkedin",
  ) {
    setError("");
    setProviderLoading(provider);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
      });

      if (error) {
        setError(error.message);
        setProviderLoading(null);
        return;
      }

      // OAuth normally redirects before this point.
      router.refresh();
    } catch {
      setError(`Unable to continue with ${provider}. Please try again.`);
      setProviderLoading(null);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => handleSocialSignIn("google")}
        disabled={providerLoading !== null}
      >
        {providerLoading === "google"
          ? "Connecting..."
          : "Continue with Google"}
      </button>

      <button
        type="button"
        onClick={() => handleSocialSignIn("linkedin")}
        disabled={providerLoading !== null}
      >
        {providerLoading === "linkedin"
          ? "Connecting..."
          : "Continue with LinkedIn"}
      </button>

      {error && (
        <p role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
