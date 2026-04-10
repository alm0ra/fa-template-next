/**
 * Database client — Drizzle ORM + libSQL.
 *
 * Connects to a libSQL/sqld database using credentials injected by the
 * platform at runtime:
 *   - DATABASE_URL          (required)  e.g. "libsql://proj-xxx.sqld.noqte.app"
 *   - DATABASE_AUTH_TOKEN   (optional)  JWT signed by the platform
 *
 * In dev/local, you can fall back to a local SQLite file by setting
 *   DATABASE_URL="file:./dev.db"
 *
 * Usage in route handlers:
 *
 *   import { db } from "@/lib/db";
 *   import { users } from "@/db/schema";
 *
 *   const all = await db.select().from(users);
 *
 * Or with explicit env (Deno isolation):
 *
 *   import { createDb } from "@/lib/db";
 *   const db = createDb(context.env);
 */

import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";

import * as schema from "@/db/schema";

type Schema = typeof schema;

const globalForDb = globalThis as unknown as {
  __noqteDbClient?: Client;
  __noqteDbDrizzle?: LibSQLDatabase<Schema>;
};

function getClient(env?: Record<string, string>): Client {
  if (!env && globalForDb.__noqteDbClient) return globalForDb.__noqteDbClient;

  const e = env || process.env;
  const url = e.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. The platform should inject this at runtime; " +
        "for local dev, set DATABASE_URL=file:./dev.db",
    );
  }

  const client = createClient({
    url,
    authToken: e.DATABASE_AUTH_TOKEN,
  });

  if (!env) globalForDb.__noqteDbClient = client;
  return client;
}

function getDb(env?: Record<string, string>): LibSQLDatabase<Schema> {
  if (!env && globalForDb.__noqteDbDrizzle) return globalForDb.__noqteDbDrizzle;
  const instance = drizzle(getClient(env), { schema });
  if (!env) globalForDb.__noqteDbDrizzle = instance;
  return instance;
}

/**
 * Create a DB instance with explicit env (for Deno isolated handlers).
 */
export function createDb(env: Record<string, string>): LibSQLDatabase<Schema> {
  return getDb(env);
}

/**
 * Lazy proxy — calls only initialize the client when first accessed.
 * This keeps cold-start fast and avoids crashing modules that import `db`
 * but never actually query (e.g. type-only imports during build).
 */
export const db = new Proxy({} as LibSQLDatabase<Schema>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
}) as LibSQLDatabase<Schema>;

export { getClient as getRawClient };
