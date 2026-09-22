import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type SpotlightCardProps = Omit<HTMLMotionProps<"article">, "children"> & {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SpotlightCard = ({
  href,
  label,
  children,
  className,
  ...props
}: SpotlightCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const glow = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, hsl(var(--spotlight) / 0.24), transparent 72%)`;

  return (
    <motion.article
      {...props}
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - bounds.left);
        y.set(event.clientY - bounds.top);
      }}
      onPointerEnter={() => opacity.set(reduceMotion ? 0 : 1)}
      onPointerLeave={() => opacity.set(0)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        "group relative isolate overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-warm focus-within:border-primary/50",
        className,
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glow, opacity }}
      />
      <div className="relative z-10 h-full">{children}</div>
      <Link
        to={href}
        aria-label={label}
        className="absolute inset-0 z-20 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
    </motion.article>
  );
};

export default SpotlightCard;