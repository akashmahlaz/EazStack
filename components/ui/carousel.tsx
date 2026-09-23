"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
  opts?: { loop?: boolean };
};

interface CarouselContextValue {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  scrollNext: () => void;
  scrollPrev: () => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

// Lightweight, dependency-free Carousel that reproduces the shadcn API
// (Carousel/Content/Item/Next/Previous) using CSS scroll-snap.
// LaunchCrew's original uses embla-carousel; this keeps the *look* identical
// (one full-width item per view + prev/next arrows + smooth scroll)
// without requiring embla-carousel-react / @radix-ui / cva.
const Carousel = ({ children, className }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollByItems = (dir: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Each CarouselItem is full-width (basis-full), so scrolling by one
    // viewport width lands exactly on the next/previous slide.
    el.scrollBy({
      left: dir * el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <CarouselContext.Provider
      value={{
        scrollContainerRef,
        scrollNext: () => scrollByItems(1),
        scrollPrev: () => scrollByItems(-1),
      }}
    >
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        suppressHydrationWarning
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

const CarouselContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { scrollContainerRef } = useCarousel();
  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "flex snap-mandatory snap-x scroll-smooth overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CarouselItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    data-carousel-item
    className={cn(
      "min-w-0 shrink-0 grow-0 basis-full snap-start",
      className,
    )}
  >
    {children}
  </div>
);

const arrowBase =
  "absolute top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground shadow transition-colors hover:bg-accent";

const CarouselPrevious = ({ className }: { className?: string }) => {
  const { scrollPrev } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={scrollPrev}
      className={cn(arrowBase, "-left-12", className)}
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
};

const CarouselNext = ({ className }: { className?: string }) => {
  const { scrollNext } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={scrollNext}
      className={cn(arrowBase, "-right-12", className)}
    >
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
