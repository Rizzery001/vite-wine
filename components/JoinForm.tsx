"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "buyer" | "grower";

export default function JoinForm() {
  const [role, setRole] = useState<Role>("buyer");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.role = role;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section
      id="join"
      className="relative px-6 md:px-10 py-24 md:py-40 bg-ink text-bone overflow-hidden"
    >
      {/* Wine stain */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-ember/30 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1600px] mx-auto relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
              § Get in touch
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tightest mb-6">
              Make wine,{" "}
              <span className="italic font-light text-clay">or pour it.</span>
              <br />
              Either way — let's talk.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.22em]">
              <RoleButton active={role === "buyer"} onClick={() => setRole("buyer")}>
                I buy wine →
              </RoleButton>
              <RoleButton active={role === "grower"} onClick={() => setRole("grower")}>
                I make wine →
              </RoleButton>
            </div>
            <div className="mt-12 pt-8 border-t border-bone/20 text-sm text-bone/60 leading-relaxed">
              Or write directly:
              <br />
              <a
                href="mailto:hello@vite.wine"
                className="text-bone link-underline mt-1 inline-block"
              >
                hello@vite.wine
              </a>
            </div>
          </div>

          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.form
                key={role}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                onSubmit={onSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                  <Field name="name" label="Name" required />
                  <Field name="company" label={role === "buyer" ? "Restaurant / shop" : "Domaine / estate"} required />
                  <Field name="email" type="email" label="Email" required />
                  <Field
                    name="country"
                    label={role === "buyer" ? "Country" : "Region / canton"}
                    required
                  />
                </div>

                {role === "buyer" ? (
                  <Field
                    name="volume"
                    label="Approx. monthly volume (bottles)"
                  />
                ) : (
                  <Field name="hectares" label="Hectares under vine" />
                )}

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 mb-3">
                    {role === "buyer"
                      ? "Tell us about your list"
                      : "Tell us about the wine"}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-bone/30 focus:border-clay outline-none py-2 font-sans text-bone placeholder:text-bone/30 resize-none transition-colors"
                    placeholder={
                      role === "buyer"
                        ? "What do you currently pour? What gaps are you filling?"
                        : "Grapes, philosophy, certifications, current export markets…"
                    }
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
                  <div className="text-xs text-bone/50 max-w-md leading-relaxed">
                    By submitting you agree we may contact you about this enquiry.
                    No newsletter, no resale of your details.
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-mono text-[11px] uppercase tracking-[0.22em] px-8 py-4 bg-bone text-ink hover:bg-clay hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3 group"
                  >
                    {status === "sending" ? (
                      "Sending…"
                    ) : (
                      <>
                        <span>Send enquiry</span>
                        <span className="inline-block w-6 h-px bg-current group-hover:w-10 transition-all" />
                      </>
                    )}
                  </button>
                </div>

                {status === "ok" && (
                  <div className="font-mono text-xs text-clay border-t border-clay/30 pt-6">
                    ✓ Received. We'll be in touch within two working days.
                  </div>
                )}
                {status === "error" && (
                  <div className="font-mono text-xs text-ember border-t border-ember/40 pt-6">
                    ✕ {errorMsg || "Couldn't send. Try again or email us directly."}
                  </div>
                )}
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full text-left px-4 py-3 border transition-colors ${
        active
          ? "bg-bone text-ink border-bone"
          : "border-bone/30 text-bone hover:border-bone"
      }`}
    >
      {children}
    </button>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 mb-3">
        {label}
        {required && <span className="text-clay ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-bone/30 focus:border-clay outline-none py-2 font-sans text-bone transition-colors"
      />
    </div>
  );
}
