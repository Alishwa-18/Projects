const steps = [
  {
    n: "01",
    title: "Production Experience",
    body: "I work as an AI Automation Engineer on voice AI agents — including Ava — that handle real customer calls in production.",
  },
  {
    n: "02",
    title: "Diagnosing Failures",
    body: "I analyze full conversation journeys: tool calls, structured data, prompt behavior, API failures, latency, and conversation loops — then trace exactly what broke.",
  },
  {
    n: "03",
    title: "Building Agents",
    body: "I apply that production experience to new domains — multi-agent routers, RAG-backed support agents, and deterministic-tool agents for auditable decisions.",
  },
  {
    n: "04",
    title: "Automating Operations",
    body: "Outside of agents, I build n8n/Make/Zapier workflows connecting CRMs, calendars, payments, and messaging so teams stop doing repetitive work by hand.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">About Me</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        Real production failures, applied to new agent systems.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        I already understand production conversational AI and real-customer
        failures — this portfolio is that experience applied to new domains:
        lead management, insurance triage, customer support routing, and
        business process automation.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50"
          >
            <div className="font-mono text-sm text-accent2">{s.n}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
