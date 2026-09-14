const stack = [
  "n8n",
  "Make.com",
  "Zapier",
  "Claude API",
  "OpenAI",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Python",
  "Twilio",
  "GoHighLevel",
  "HubSpot",
  "Zoho CRM",
  "Notion API",
  "Google Calendar API",
  "WhatsApp Business Cloud",
  "Stripe",
  "Prisma",
  "PostgreSQL",
];

export default function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <div className="border-y border-border bg-surface py-4">
      <div className="flex w-max animate-marquee gap-8">
        {items.map((item, i) => (
          <span key={i} className="whitespace-nowrap font-mono text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
