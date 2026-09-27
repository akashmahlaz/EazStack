import { VerifyEmailContent } from "@/components/auth/verify-email-content";

type VerifyEmailPageProps = {
  searchParams: Promise<{
    email?: string;
    error?: string;
  }>;
};

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const params = await searchParams;

  return (
    <main>
      <VerifyEmailContent
        email={params.email}
        error={params.error}
      />
    </main>
  );
}
