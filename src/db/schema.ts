/**
 * Drizzle schema — agent will add tables here based on user's request.
 *
 * Example:
 *
 *   import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
 *
 *   export const users = sqliteTable("users", {
 *     id: integer("id").primaryKey({ autoIncrement: true }),
 *     email: text("email").notNull().unique(),
 *     name: text("name"),
 *     createdAt: integer("created_at", { mode: "timestamp" })
 *       .notNull()
 *       .$defaultFn(() => new Date()),
 *   });
 *
 * After editing, run:
 *   npm run db:generate   # creates migration files in src/db/migrations
 *   npm run db:push       # applies schema to live database
 */

export {};
