import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Wakey Wakey Alarm",
  description:
    "Get help with Wakey Wakey Alarm. Report bugs, request features, or ask questions.",
};

export default function WakeySupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
