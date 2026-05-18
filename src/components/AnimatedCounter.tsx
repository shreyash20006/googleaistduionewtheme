import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, useMotionValueEvent } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({ value, duration = 2, suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const displayValue = useTransform(springValue, (latest) => 
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useMotionValueEvent(displayValue, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = latest + suffix;
    }
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals === 0 ? "0" : (0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
