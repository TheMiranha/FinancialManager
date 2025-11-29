import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { uuidv7 } from 'uuidv7'

export const user = pgTable("user", {
    id: text().primaryKey().$defaultFn(() => uuidv7()),
    email: text('email').notNull(),
    name: text('name').notNull(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').$onUpdateFn(() => new Date())
});

export type User = typeof user.$inferSelect