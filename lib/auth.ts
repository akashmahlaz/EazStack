import { betterAuth } from "better-auth/minimal"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db"; //  drizzle instance
import * as schema from "@/schema"
import { sendVerificationEmail } from "./email";


export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
emailVerification: { sendOnSignUp: true, sendOnSignIn: true, autoSignInAfterVerification: true, sendVerificationEmail: async ({ user, url }) => {
        void sendVerificationEmail({
          to: user.email,
          url,
          name: user.name,
        });
      },
    },

   socialProviders: {
     google: {
       clientId: process.env.GOOGLE_CLIENT_ID as string,
       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
     },
     linkedin: {
       clientId: process.env.LINKEDIN_CLIENT_ID as string,
       clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
     },
   },
    database: drizzleAdapter(db, {
      provider: "pg", // or "mysql", "sqlite"
      schema,
    }),
});
