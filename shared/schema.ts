import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Admin Panel Content Management Schema
export const contentItems = pgTable("content_items", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'hero', 'service', 'portfolio', 'testimonial', 'client'
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  link: text("link"),
  metrics: text("metrics"), // JSON string for portfolio metrics
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
});

export const insertContentItemSchema = createInsertSchema(contentItems).pick({
  type: true,
  title: true,
  content: true,
  imageUrl: true,
  link: true,
  metrics: true,
  order: true,
  isActive: true,
});

export type InsertContentItem = z.infer<typeof insertContentItemSchema>;
export type ContentItem = typeof contentItems.$inferSelect;
