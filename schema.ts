import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const verificationRelations = relations(verification, ({ one }) => ({
  user: one(user, {
    fields: [verification.identifier],
    references: [user.email],
  }),
}));

// ============================================
// LAUNCHARC SPECIFIC TABLES
// ============================================

export const clientIntakes = pgTable(
  "client_intakes",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    archetype: text("archetype").notNull(), // 'saas_ai' | 'consumer_mobile' | 'marketplace' | 'enterprise'
    coreBottleneck: text("core_bottleneck").notNull(), // 'zero_to_one' | 'fractional_cto' | 'rescue' | 'scale'
    targetHorizon: text("target_horizon").notNull(), // '30_days' | '60_days' | '90_days'
    estimatedBudget: text("estimated_budget"),
    deckUrl: text("deck_url"),
    blueprintSummary: text("blueprint_summary"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("client_intakes_userId_idx").on(table.userId)],
);

export const legalDocuments = pgTable(
  "legal_documents",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    docType: text("doc_type").notNull(), // 'nda' | 'master_services_agreement'
    status: text("status").notNull().default("pending"), // 'pending' | 'signed'
    signatureSvg: text("signature_svg"), // Stored vector ink path
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    signedAt: timestamp("signed_at"),
    pdfUrl: text("pdf_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("legal_documents_userId_idx").on(table.userId)],
);

export const sprintMilestones = pgTable(
  "sprint_milestones",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    phaseNumber: text("phase_number").notNull(), // '1' | '2' | '3' | '4'
    title: text("title").notNull(),
    description: text("description"),
    progressPercentage: text("progress_percentage").default("0"),
    status: text("status").default("locked"), // 'locked' | 'escrowed' | 'in_progress' | 'review' | 'completed'
    targetDate: timestamp("target_date"),
    deliverablesJson: text("deliverables_json"), // JSON string of deliverables
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("sprint_milestones_userId_idx").on(table.userId)],
);

export const milestoneInvoices = pgTable(
  "milestone_invoices",
  {
    id: text("id").primaryKey(),
    milestoneId: text("milestone_id").references(() => sprintMilestones.id),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    amountUsd: text("amount_usd").notNull(),
    status: text("status").default("pending"), // 'draft' | 'pending' | 'escrowed' | 'paid' | 'refunded'
    stripePaymentIntentId: text("stripe_payment_intent_id"),
    paidAt: timestamp("paid_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("milestone_invoices_userId_idx").on(table.userId),
    index("milestone_invoices_milestoneId_idx").on(table.milestoneId),
  ],
);

// Relations for LaunchArc tables
export const clientIntakesRelations = relations(clientIntakes, ({ one }) => ({
  user: one(user, {
    fields: [clientIntakes.userId],
    references: [user.id],
  }),
}));

export const legalDocumentsRelations = relations(legalDocuments, ({ one }) => ({
  user: one(user, {
    fields: [legalDocuments.userId],
    references: [user.id],
  }),
}));

export const sprintMilestonesRelations = relations(sprintMilestones, ({ one, many }) => ({
  user: one(user, {
    fields: [sprintMilestones.userId],
    references: [user.id],
  }),
  invoices: many(milestoneInvoices),
}));

export const milestoneInvoicesRelations = relations(milestoneInvoices, ({ one }) => ({
  milestone: one(sprintMilestones, {
    fields: [milestoneInvoices.milestoneId],
    references: [sprintMilestones.id],
  }),
  user: one(user, {
    fields: [milestoneInvoices.userId],
    references: [user.id],
  }),
}));

// Add relations to user
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  clientIntakes: many(clientIntakes),
  legalDocuments: many(legalDocuments),
  sprintMilestones: many(sprintMilestones),
  milestoneInvoices: many(milestoneInvoices),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
