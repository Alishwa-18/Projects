"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const roles = ["Voice AI Agents.", "n8n & Make Workflows.", "Multi-Agent Systems.", "CRM Automations."];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="fade-up mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              n8n · Make.com · Claude &amp; OpenAI Agents · CRM Automation
            </span>
            <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open for Projects
            </span>
          </div>

          <h1 className="fade-up fade-up-1 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            AI AUTOMATION
            <br />
            <span className="text-gradient">ENGINEER</span>
          </h1>

          <p className="fade-up fade-up-2 mt-6 max-w-xl text-lg text-muted">
            I build conversational AI agents and business automation systems —
            from production voice agents handling real customer calls to n8n/Make
            workflows that move leads, invoices, and CRM data without a human
            touching them.
          </p>

          <p className="fade-up fade-up-3 mt-4 font-mono text-sm italic text-accent2">
            &ldquo;I debug agents by tracing the tool call, not by guessing.&rdquo;
          </p>

          <div className="fade-up fade-up-4 mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              Explore My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition hover:border-accent"
            >
              Work With Me
            </a>
          </div>
        </div>

        <div className="fade-in relative mx-auto w-full max-w-sm">
          <ProfilePhoto />

          <div className="glow-border absolute -bottom-8 -left-6 w-56 rounded-2xl border border-border bg-surface/95 p-4 backdrop-blur sm:-left-10">
            <div className="section-label mb-2">System Status</div>
            <div className="space-y-2 font-mono text-xs">
              <StatusRow label="Voice Agent" value="Active" />
              <StatusRow label="Lead Router" value="Online" />
            </div>
          </div>

          <div className="glow-border absolute -top-6 -right-4 rounded-2xl border border-border bg-surface/95 px-4 py-3 backdrop-blur sm:-right-8">
            <div className="section-label mb-1">Currently Building</div>
            <RoleTicker />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  const [broken, setBroken] = useState(false);

  const checkAlreadyBroken = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  };

  if (broken) {
    return (
      <div className="glow-border flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-surface to-surface2">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-3xl font-bold text-bg">
          AS
        </span>
      </div>
    );
  }

  return (
    <div className="glow-border aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/profile.jpg"
        alt="Alishwa Shakeel"
        className="h-full w-full object-cover"
        ref={checkAlreadyBroken}
        onError={() => setBroken(true)}
      />
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-surface2 px-3 py-2">
      <span className="text-muted">{label}</span>
      <span className="flex items-center gap-2 text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {value}
      </span>
    </div>
  );
}

function RoleTicker() {
  return (
    <div className="flex flex-col gap-1 text-sm text-white">
      {roles.map((r) => (
        <span key={r}>{r}</span>
      ))}
    </div>
  );
}
