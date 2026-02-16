import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Wakey: Wake Up Alarms",
  description:
    "Get help with Wakey: Wake Up Alarms. Report bugs, request features, or ask questions.",
};

export default function WakeySupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
