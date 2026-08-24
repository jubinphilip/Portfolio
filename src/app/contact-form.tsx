"use client";

import { useActionState } from "react";
import { sendMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const fieldClasses =
  "w-full bg-transparent border-b border-ink-faint/40 py-3 text-paper placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <form action={formAction} className="mt-14 max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint mb-8">
        Or drop me a line right here
      </p>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Name</span>
          <input name="name" type="text" required placeholder="Your name" className={fieldClasses} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Email</span>
          <input name="email" type="email" required placeholder="you@example.com" className={fieldClasses} />
        </label>
        <label className="block sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            maxLength={5000}
            placeholder="What are we building?"
            className={`${fieldClasses} resize-y`}
          />
        </label>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={pending}
          className="font-mono text-[12px] uppercase tracking-[0.15em] bg-paper text-ink px-8 py-3 rounded-full hover:bg-accent hover:text-paper transition-colors disabled:opacity-50 disabled:cursor-wait"
        >
          {pending ? "Sending…" : "Send message ↗"}
        </button>
        {state.status !== "idle" && (
          <p
            role="status"
            className={`text-sm ${state.status === "sent" ? "text-accent" : "text-ink-faint"}`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
