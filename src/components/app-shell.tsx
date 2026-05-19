import Link from "next/link";

import type { Profile } from "@/lib/types";
import { Logo } from "@/components/logo";

type AppShellProps = {
  profile: Profile;
  children: React.ReactNode;
};

export function AppShell({ profile, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="border-b border-[var(--border)] backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo href="/dashboard" size="sm" subtitle="UNSW subject planning with your mates." />
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link href="/dashboard" className="hover:text-[var(--accent)]">
              Dashboard
            </Link>
            <Link href="/plans" className="hover:text-[var(--accent)]">
              Timetables
            </Link>
            <Link href="/friends" className="hover:text-[var(--accent)]">
              Friends
            </Link>
            <form action="/api/signout" method="post">
              <button
                type="submit"
                className="rounded-full border border-[var(--border)] px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Log out {profile.full_name}
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
