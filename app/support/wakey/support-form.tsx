"use client";

import { useActionState } from "react";
import { sendSupportEmail } from "./action";

export function SupportForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prev: { success?: boolean; error?: string } | null, formData: FormData) => {
      return sendSupportEmail(formData);
    },
    null,
  );

  return (
    <div className="rounded-xl border border-bg-card bg-bg-surface/60 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-bg-card px-5 py-3">
        <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <div className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-text-muted">
          new_ticket.sh
        </span>
      </div>

      <form action={formAction} className="flex flex-col gap-5 p-5 sm:p-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-mono text-xs font-medium text-text-secondary"
          >
            <span className="mr-1.5 text-accent-yellow">$</span>
            email
            <span className="ml-2 text-[10px] font-normal text-text-muted">
              so we can get back to you
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-bg-card bg-bg-primary px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-accent-yellow/40"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="font-mono text-xs font-medium text-text-secondary"
          >
            <span className="mr-1.5 text-accent-yellow">$</span>
            subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className="rounded-lg border border-bg-card bg-bg-primary px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-accent-yellow/40"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-mono text-xs font-medium text-text-secondary"
          >
            <span className="mr-1.5 text-accent-yellow">$</span>
            message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us what's going on — the more detail, the faster we can help."
            rows={7}
            className="resize-none rounded-lg border border-bg-card bg-bg-primary px-4 py-3 font-body text-sm leading-relaxed text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-accent-yellow/40"
          />
        </div>

        {/* Status message */}
        {state?.success && (
          <p className="font-mono text-xs text-accent-yellow">
            Message sent — we&apos;ll get back to you soon.
          </p>
        )}
        {state?.error && (
          <p className="font-mono text-xs text-accent-orange">
            {state.error}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-1">
          <p className="hidden font-mono text-[11px] text-text-muted sm:block">
            Sends directly to our inbox
          </p>

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary group relative gap-2 transition-all hover:shadow-[0_0_20px_rgba(212,243,78,0.15)] disabled:opacity-30 disabled:hover:shadow-none"
          >
            {isPending ? (
              <>
                <svg
                  className="h-3.5 w-3.5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth={3}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                sending...
              </>
            ) : state?.success ? (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                sent!
              </>
            ) : (
              <>
                $ send_message
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
