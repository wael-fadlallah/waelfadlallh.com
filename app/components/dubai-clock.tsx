"use client";

import { useSyncExternalStore } from "react";

function dubaiTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const dubai = new Date(utc + 4 * 3600 * 1000);
  const hh = String(dubai.getHours()).padStart(2, "0");
  const mm = String(dubai.getMinutes()).padStart(2, "0");
  return `${hh}:${mm} GST · Dubai`;
}

function subscribe(notify: () => void) {
  const id = setInterval(notify, 30000);
  return () => clearInterval(id);
}

const getServerSnapshot = () => "—";

export function DubaiClock() {
  const label = useSyncExternalStore(subscribe, dubaiTime, getServerSnapshot);
  return <span className="hero__meta-time">{label}</span>;
}
