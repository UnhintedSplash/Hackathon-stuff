import { AuthForm } from "@/components/auth-form";
import { signUpAction } from "@/app/actions";
import { Logo } from "@/components/logo";

export default function SignUpPage() {
  return (
    <div className="app-shell">
      <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-5 py-12">
        <section className="w-full rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)] backdrop-blur-sm">
          <div className="mb-8 flex justify-center border-b border-[var(--border)] pb-6">
            <Logo href="/" size="sm" />
          </div>
          <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Start here
          </p>
          <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight">
            Create your UNSW Mates account
          </h1>
          <p className="mt-3 text-center text-sm leading-7 text-[var(--muted)]">
            Sign up with your UNSW email, full name, zID, and password, then we will take you straight into subject setup.
          </p>

          <div className="mt-8">
            <AuthForm mode="signup" action={signUpAction} />
          </div>
        </section>
      </main>
    </div>
  );
}
