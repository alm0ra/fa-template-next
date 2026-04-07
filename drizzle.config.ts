/**
 * Drizzle Kit config — used by `npm run db:generate` and `npm run db:push`.
 *
 * In production, the platform's deployer applies migrations against the
 * project's libSQL namespace using these same credentials.
 */

import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "file:./dev.db",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;
