import type { NextConfig } from "next";

function normalizeAllowedOrigin(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    return new URL(trimmed).host;
  } catch {
    return trimmed.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }
}

const serverActionAllowedOrigins = [
  process.env.VERCEL_URL,
  ...(process.env.NEXT_SERVER_ACTIONS_ALLOWED_ORIGINS?.split(",") ?? []),
]
  .map((value) => (value ? normalizeAllowedOrigin(value) : null))
  .filter((value): value is string => Boolean(value));

const nextConfig: NextConfig = {
  experimental: serverActionAllowedOrigins.length
    ? {
        serverActions: {
          allowedOrigins: serverActionAllowedOrigins,
        },
      }
    : undefined,
};

export default nextConfig;
