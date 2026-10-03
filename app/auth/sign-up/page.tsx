"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Loader2, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";

type Option = { id: string; title: string; note: string };

const ARCHETYPES: Option[] = [
  { id: "saas", title: "SaaS & AI platform", note: "Recurring software, intelligent workflows" },
  { id: "mobile", title: "Consumer mobile app", note: "iOS & Android, built for daily habit" },
  { id: "marketplace", title: "Two-sided marketplace", note: "Buyers, sellers, trust and payments" },
  { id: "business", title: "Local or service business", note: "Brand, website, CRM, growth" },
];

const BOTTLENECKS: Option[] = [
  { id: "idea", title: "I have an idea, nothing built", note: "Need the whole thing, end to end" },
  { id: "tech", title: "No technical co-founder", note: "Need an engineering team I can trust" },
  { id: "stuck", title: "Built something, it's stuck", note: "Rescue, rebuild or scale it" },
  { id: "growth", title: "Product works, no traction", note: "Marketing, funding, hiring" },
];

const HORIZONS: Option[] = [
  { id: "30", title: "30 days", note: "Focused MVP sprint" },
  { id: "60", title: "60 days", note: "Full launch ecosystem" },
  { id: "90", title: "90+ days", note: "Considered, phased build" },
];

const STEPS = ["Venture", "Bottleneck", "Horizon", "Account"];

export default function SignUpPage() {
  const [step, setStep] = useState(0);
  const [archetype, setArchetype] = useState<string>();
  const [bottleneck, setBottleneck] = useState<string>();
  const [horizon, setHorizon] = useState<string>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const pick = (list: Option[], id?: string) => list.find((o) => o.id === id)?.title;
  const canNext = [archetype, bottleneck, horizon][step] !== undefined;

  const saveIntake = () =>
    localStorage.setItem("launcharc:intake", JSON.stringify({ archetype, bottleneck, horizon, at: Date.now() }));

  const social = async (provider: "google" | "linkedin") => {
    setError(null);
    setLoading(provider);
    saveIntake();
    try {
      await authClient.signIn.social({ provider, callbackURL: "/dashboard" });
    } catch {
      setError("Couldn't reach the sign-in provider. Please try again.");
      setLoading(null);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    setLoading("email");
    saveIntake();
    const { error } = await authClient.signUp.email({
      name: name.trim(),
      email: email.trim(),
      password,
      callbackURL: "/dashboard",
    });
    setLoading(null);
    if (error) return setError(error.message ?? "Something went wrong.");
    setSent(true);
  };

  const strength = useMemo(() => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) s++;
    if (/\d/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  }, [password]);

  return (
    <main className="min-h-screen bg-gradient-hero font-body text-foreground">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[1.05fr_1fr]">
        {/* Left — editorial canvas with live blueprint */}
        <section className="relative hidden overflow-hidden border-r border-border p-12 lg:flex lg:flex-col lg:justify-between">
          <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.35]">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <motion.div
            aria-hidden
            className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gradient-warm opacity-20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            <Link href="/" className="font-heading text-2xl">
              Launch<span className="text-gradient">Arc</span>
            </Link>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Venture studio · Cohort 2026</p>
          </div>

          <div className="relative">
            <h1 className="font-heading text-6xl leading-[1.02]">
              Every great company
              <br />
              starts as a <em className="text-gradient">blueprint.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Answer three honest questions. We draft yours before our first call.
            </p>

            {/* Live blueprint card */}
            <div className="mt-10 max-w-md rounded-2xl border border-border bg-card/80 p-6 shadow-warm backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>Venture blueprint</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> drafting
                </span>
              </div>
              <dl className="mt-5 space-y-4">
                {[
                  ["Venture", pick(ARCHETYPES, archetype)],
                  ["Starting point", pick(BOTTLENECKS, bottleneck)],
                  ["Launch horizon", pick(HORIZONS, horizon)],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-3">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <AnimatePresence mode="wait">
                      <motion.dd
                        key={value ?? "empty"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className={`text-right font-heading text-lg ${value ? "" : "text-muted-foreground/50"}`}
                      >
                        {value ?? "—"}
                      </motion.dd>
                    </AnimatePresence>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">Reviewed personally by Akashdeep S., Lead Architect</p>
            </div>
          </div>

          <p className="relative text-sm text-muted-foreground">Website · Apps · CRM · Growth · Funding · Hiring — one studio.</p>
        </section>

        {/* Right — the flow */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">
            <Link href="/" className="font-heading text-2xl lg:hidden">
              Launch<span className="text-gradient">Arc</span>
            </Link>

            {!sent && (
              <ol className="mt-8 flex gap-2 lg:mt-0" aria-label="Progress">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <motion.div className="h-full bg-gradient-warm" animate={{ width: i <= step ? "100%" : "0%" }} />
                    </div>
                    <span className={`mt-2 block text-xs ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                  </li>
                ))}
              </ol>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={sent ? "sent" : step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-10"
              >
                {sent ? (
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm">
                      <Mail className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-heading text-4xl">Check your inbox</h2>
                    <p className="mt-3 text-muted-foreground">
                      We sent a verification link to <strong className="text-foreground">{email}</strong>. Open it to enter your studio.
                    </p>
                  </div>
                ) : step < 3 ? (
                  <Question
                    title={["What are you building?", "Where are you today?", "When do you want to launch?"][step]}
                    hint={["Pick the closest fit — we'll refine it together.", "No wrong answer. This tells us where to start.", "Ambitious is good. Honest is better."][step]}
                    options={[ARCHETYPES, BOTTLENECKS, HORIZONS][step]}
                    value={[archetype, bottleneck, horizon][step]}
                    onChange={(v) => [setArchetype, setBottleneck, setHorizon][step](v)}
                    columns={step === 2 ? 3 : 1}
                  />
                ) : (
                  <div>
                    <h2 className="font-heading text-4xl">Claim your studio seat</h2>
                    <p className="mt-2 text-muted-foreground">Your blueprint is saved to this account.</p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <SocialButton label="Google" loading={loading === "google"} onClick={() => social("google")} icon={<GoogleIcon />} />
                      <SocialButton label="LinkedIn" loading={loading === "linkedin"} onClick={() => social("linkedin")} icon={<LinkedInIcon />} />
                    </div>

                    <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="h-px flex-1 bg-border" /> or with email <span className="h-px flex-1 bg-border" />
                    </div>

                    <form onSubmit={submit} className="space-y-4" noValidate>
                      <Field label="Full name" value={name} onChange={setName} autoComplete="name" />
                      <Field label="Work email" type="email" value={email} onChange={setEmail} autoComplete="email" />
                      <div>
                        <div className="relative">
                          <Field label="Password" type={showPw ? "text" : "password"} value={password} onChange={setPassword} autoComplete="new-password" />
                          <button
                            type="button"
                            onClick={() => setShowPw((v) => !v)}
                            aria-label={showPw ? "Hide password" : "Show password"}
                            className="absolute right-3 top-[38px] text-muted-foreground hover:text-foreground"
                          >
                            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        <div className="mt-2 flex gap-1" aria-hidden>
                          {[0, 1, 2, 3].map((i) => (
                            <span key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < strength ? "bg-primary" : "bg-muted"}`} />
                          ))}
                        </div>
                      </div>

                      {error && (
                        <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading !== null}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-warm px-4 py-3.5 font-medium text-primary-foreground shadow-warm transition hover:opacity-95 disabled:opacity-60"
                      >
                        {loading === "email" ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ArrowRight className="h-4 w-4" /></>}
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {!sent && (
              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className={`flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground ${step === 0 ? "invisible" : ""}`}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < 3 && (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition disabled:opacity-30"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Already with us?{" "}
              <Link href="/auth/sign-in" className="font-medium text-foreground underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Question({
  title, hint, options, value, onChange, columns,
}: { title: string; hint: string; options: Option[]; value?: string; onChange: (v: string) => void; columns: number }) {
  return (
    <fieldset>
      <legend className="font-heading text-4xl leading-tight">{title}</legend>
      <p className="mt-2 text-muted-foreground">{hint}</p>
      <div className={`mt-8 grid gap-3 ${columns === 3 ? "grid-cols-3" : "grid-cols-1"}`}>
        {options.map((o) => {
          const active = value === o.id;
          return (
            <motion.button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.id)}
              whileTap={{ scale: 0.98 }}
              className={`group relative rounded-xl border p-4 text-left transition-all ${
                active ? "border-primary bg-card shadow-warm" : "border-border bg-card/50 hover:border-primary/40 hover:bg-card"
              }`}
            >
              <span className="block font-medium">{o.title}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{o.note}</span>
              <span
                className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border transition ${
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                } ${columns === 3 ? "hidden" : ""}`}
              >
                {active && <Check className="h-3 w-3" />}
              </span>
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({
  label, value, onChange, type = "text", autoComplete,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; autoComplete?: string }) {
  const id = label.toLowerCase().replace(/\s/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-card px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function SocialButton({ label, icon, onClick, loading }: { label: string; icon: React.ReactNode; onClick: () => void; loading: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition hover:border-primary/40 hover:shadow-soft disabled:opacity-60"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9l3.7-2.8z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#0A66C2" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
    </svg>
  );
}
