import { Github, Linkedin, Mail, MessageCircle, ExternalLink } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    value: "alishwa-shakeel",
    href: "https://www.linkedin.com/in/alishwa-shakeel-127959269",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Alishwa-18",
    href: "https://github.com/Alishwa-18",
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: "+92 318 7542870",
    href: "https://wa.me/923187542870",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "alishwashakeel7@gmail.com",
    href: "mailto:alishwashakeel7@gmail.com",
    icon: Mail,
  },
];

const repos = [
  { label: "Agent-Chatbot", href: "https://github.com/Alishwa-18/Agent-Chatbot" },
  { label: "Automation-Projects", href: "https://github.com/Alishwa-18/Automation-Projects" },
  { label: "Projects", href: "https://github.com/Alishwa-18/Projects" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface2 p-10 text-center sm:p-16">
        <div className="section-label justify-center">Open for Projects</div>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Have a process worth automating?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Whether it&apos;s a voice agent, a lead-routing workflow, or a
          multi-agent system — tell me the operational problem and I&apos;ll
          tell you how I&apos;d build it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm transition hover:border-accent"
            >
              <s.icon size={16} className="text-accent2" />
              {s.value}
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md border-t border-border pt-6">
          <div className="section-label mb-3">Browse the code</div>
          <div className="flex flex-wrap justify-center gap-3">
            {repos.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-xs text-muted transition hover:border-accent hover:text-white"
              >
                {r.label} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
