import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

/**
 * Shared shell for policy / legal document pages (Privacy, Terms, Cookies,
 * Accessibility). Keeps the Navbar/Footer/Seo wiring consistent and gives
 * every document a calm, readable typographic container via `.legal-doc`.
 *
 * Pass the document body as semantic JSX (h2, p, ul/ol, a). Headings and the
 * "last updated" date are provided by the wrapper.
 */
const LegalPage = ({
  title,
  description,
  lastUpdated,
  children,
}: {
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={title} description={description} />

      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-xs text-muted-foreground/70">
              Last updated: <time dateTime="2026-09-23">{lastUpdated}</time>
            </p>
            <div className="mt-8 legal-doc">{children}</div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
