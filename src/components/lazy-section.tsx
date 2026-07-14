"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  id?: string;
  children: React.ReactNode;
  fallback: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({
  id,
  children,
  fallback,
  threshold = 0.05,
  rootMargin = "150px",
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      setShouldRender(true);
    }
  }, [inView]);

  return (
    <div id={id} ref={ref} className="w-full scroll-mt-28">
      {shouldRender ? children : fallback}
    </div>
  );
}
