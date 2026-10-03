CREATE TABLE "client_intakes" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"archetype" text NOT NULL,
	"core_bottleneck" text NOT NULL,
	"target_horizon" text NOT NULL,
	"estimated_budget" text,
	"deck_url" text,
	"blueprint_summary" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "legal_documents" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"doc_type" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"signature_svg" text,
	"ip_address" text,
	"user_agent" text,
	"signed_at" timestamp,
	"pdf_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "milestone_invoices" (
	"id" text PRIMARY KEY NOT NULL,
	"milestone_id" text,
	"user_id" text NOT NULL,
	"amount_usd" text NOT NULL,
	"status" text DEFAULT 'pending',
	"stripe_payment_intent_id" text,
	"paid_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sprint_milestones" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"phase_number" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"progress_percentage" text DEFAULT '0',
	"status" text DEFAULT 'locked',
	"target_date" timestamp,
	"deliverables_json" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "client_intakes" ADD CONSTRAINT "client_intakes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "legal_documents" ADD CONSTRAINT "legal_documents_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestone_invoices" ADD CONSTRAINT "milestone_invoices_milestone_id_sprint_milestones_id_fk" FOREIGN KEY ("milestone_id") REFERENCES "public"."sprint_milestones"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestone_invoices" ADD CONSTRAINT "milestone_invoices_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sprint_milestones" ADD CONSTRAINT "sprint_milestones_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "client_intakes_userId_idx" ON "client_intakes" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "legal_documents_userId_idx" ON "legal_documents" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "milestone_invoices_userId_idx" ON "milestone_invoices" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "milestone_invoices_milestoneId_idx" ON "milestone_invoices" USING btree ("milestone_id");--> statement-breakpoint
CREATE INDEX "sprint_milestones_userId_idx" ON "sprint_milestones" USING btree ("user_id");