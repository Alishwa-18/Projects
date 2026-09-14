const items = [
  {
    role: "Automation Engineer",
    org: "Thinkrr",
    type: "Part-time",
    period: "Jan 2026 — Present",
    points: [
      "Own production voice AI agents (including Ava) handling real customer calls end-to-end.",
      "Analyze full conversation journeys: tool calls, structured data, prompt behavior, transfers, API failures, latency, and conversation loops.",
      "Diagnose why an agent failed and which part of the workflow needs to change — not just re-prompt and hope.",
      "Build n8n/Make workflows for email, CRM, and API-driven customer-intent routing.",
    ],
  },
  {
    role: "AI Automation Engineer",
    org: "BitzSol",
    type: "Part-time",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Developed a recursive \"Master Agent V3\" system using n8n and LangChain that automatically routes user requests between specialized sub-agents, reducing user friction by 80%.",
      "Designed an end-to-end voice AI pipeline using ElevenLabs and Whisper; built a Telegram-to-Notion workflow that transcribes voice notes and auto-categorizes tasks into databases.",
      "Orchestrated a custom two-way synchronization between Zoho CRM and GoHighLevel using webhooks, maintaining real-time data integrity for a database of 10,000+ leads.",
    ],
  },
  {
    role: "Automation Specialist",
    org: "Freelance Automation Consultant",
    type: "Full-time",
    period: "Jun 2025 — Sep 2025",
    points: [
      "Led end-to-end delivery of automation projects for international clients under the guidance of a freelance consultant.",
      "Designed, built, and debugged workflows to streamline business processes, including CRM automation.",
    ],
  },
  {
    role: "Intern",
    org: "Digital Empowerment Network",
    type: "Internship",
    period: "Jul 2025 — Sep 2025",
    points: ["Web development and full-stack development."],
  },
  {
    role: "Intern",
    org: "Drobizz Media",
    type: "Internship",
    period: "Jun 2025 — Aug 2025",
    points: ["Branding, identity, and creative support at a digital marketing agency."],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">Experience</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        Professional background
      </h2>

      <div className="mt-12 space-y-6">
        {items.map((item) => (
          <div
            key={`${item.role}-${item.org}`}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {item.role} · <span className="text-accent2">{item.org}</span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.period} · {item.type}
              </span>
            </div>
            {item.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
