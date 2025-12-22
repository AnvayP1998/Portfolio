"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full flex items-center justify-center glass glass-hover"
      aria-label="Toggle theme"
      type="button"
    >
      <span className="text-sm">{current === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
