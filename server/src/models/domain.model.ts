import {pgTable,serial,varchar,timestamp} from 'drizzle-orm/pg-core';

export const domain = pgTable('domains',{
    id: serial('id'),
    domain_name: varchar('domain_name', { length: 150 }).notNull().unique(),
    site_name: varchar('site_name', { length: 150 }).notNull().unique(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt:timestamp('created_at', { withTimezone: true }).defaultNow(),
});