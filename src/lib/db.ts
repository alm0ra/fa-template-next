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
 */

import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";

import * as schema from "@/db/schema";

type Schema = typeof schema;

const globalForDb = globalThis as unknown as {
  __noqteDbClient?: Client;
  __noqteDbDrizzle?: LibSQLDatabase<Schema>;
};

function getClient(): Client {
  if (globalForDb.__noqteDbClient) return globalForDb.__noqteDbClient;

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. The platform should inject this at runtime; " +
        "for local dev, set DATABASE_URL=file:./dev.db",
    );
  }

  const client = createClient({
    url,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });

  globalForDb.__noqteDbClient = client;
  return client;
}

function getDb(): LibSQLDatabase<Schema> {
  if (globalForDb.__noqteDbDrizzle) return globalForDb.__noqteDbDrizzle;
  const instance = drizzle(getClient(), { schema });
  globalForDb.__noqteDbDrizzle = instance;
  return instance;
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
