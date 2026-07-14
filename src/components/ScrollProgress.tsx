"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
      <div
        className="h-full bg-gradient-to-r from-primary-blue via-primary-light to-accent-cyan transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
