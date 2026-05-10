"use client";

import { useEffect } from "react";

const DAY_START_HOUR = 7;
const DAY_END_HOUR = 19;

function autoThemeForNow(): "dark" | "light" {
  const hour = new Date().getHours();
  return hour >= DAY_START_HOUR && hour < DAY_END_HOUR ? "light" : "dark";
}

export function ThemeManager() {
  useEffect(() => {
    let next: "dark" | "light";
    try {
      const stored = localStorage.getItem("theme");
      next = stored === "dark" || stored === "light" ? stored : autoThemeForNow();
    } catch {
      next = autoThemeForNow();
    }
    document.body.dataset.theme = next;
  }, []);

  return null;
}
