"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ?? 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, duration, filter]);

  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <motion.div ref={scope} className="mt-4">
        <div className="dark:text-white text-black text-5xl leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
