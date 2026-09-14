export type Category =
  | "Agents & Chatbots"
  | "n8n Automation"
  | "Make.com Automation"
  | "Zapier Automation"
  | "GoHighLevel / CRM"
  | "Web";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  links?: { label: string; href: string }[];
  team?: boolean; // collaborative / team build, not solo authorship
  images?: string[]; // paths under /public/projects/<slug>/
};

export const projects: Project[] = [
  // ---------------------------------------------------------------------
  // Agents & Chatbots
  // ---------------------------------------------------------------------
  {
    slug: "switchboard",
    title: "Switchboard — Multi-Agent Support Router",
    category: "Agents & Chatbots",
    problem:
      "One agent trying to handle billing, scheduling, and general support at once gets bloated, slow, and impossible to debug when it gives a wrong answer.",
    approach:
      "Built a FastAPI backend where an orchestrator classifies the incoming message's intent and hands off to a specialist — no business logic lives in the router itself. The Support agent can look up a customer, open a ticket, or call escalate_to_human for anything urgent (account down, angry customer, billing dispute over $500). The Scheduling agent checks availability, books, and lists appointments, and hands back to the router with a handoff tool call if the topic shifts to billing. Added a voice channel through Twilio and a RAG layer so answers stay grounded, plus a deterministic mock mode so every agent path is testable without live API calls.",
    result:
      "A support system where each specialist owns exactly one job and the routing decision is auditable — you can trace which agent handled a request and why, instead of debugging one giant prompt.",
    stack: ["FastAPI", "Python", "Claude API", "Twilio", "RAG"],
  },
  {
    slug: "riskpilot",
    title: "RiskPilot — Insurance Claims Triage Agent",
    category: "Agents & Chatbots",
    problem:
      "Claims triage needs a decision that's explainable to an auditor — 'the model said so' isn't good enough when the outcome is which queue a $30k claim lands in.",
    approach:
      "Built a claims agent where the LLM decides when to call a tool, but the actual risk decision is deterministic Python, not a model guess: assess_risk_score runs a weighted rule engine (claim amount vs. a $25k high-value threshold, claim velocity — 2+ claims in 30 days, inactive policy status, and a fraud-keyword scan for phrases like 'cash only' or 'no police report'), producing a 0–1 score and a low/elevated/severe band. route_claim then assigns the claim to auto-approval, adjuster, or senior-adjuster queues with an SLA (72h / 24h / 4h) based on that band.",
    result:
      "Every triage decision traces back to an explicit, listed reason — 'claim amount exceeds high-value threshold', 'one prior claim in the last 30 days' — instead of an opaque model judgment call.",
    stack: ["FastAPI", "Python", "Claude API", "Pydantic"],
  },
  {
    slug: "flowmind",
    title: "FlowMind — Multi-Agent Lead Platform",
    category: "Agents & Chatbots",
    problem:
      "Small teams can describe the assistant they want in plain language, but turning that description into a working, tool-using agent normally means writing an app from scratch.",
    approach:
      "Built a Next.js/Prisma platform where a user's role/goal/instructions become an agent's system prompt at runtime. The agent loop asks the model what to do, and if it calls a tool, runs it and feeds the result back — capped at 6 steps so a confused agent can't loop forever. Every step (assistant reply or tool call + result) is persisted as its own message row, so a conversation view can replay the full trace, including which tools ran and what they returned. Ships with a mock mode that gives canned tool-call responses when no Anthropic key is set, so the whole loop is demoable without live credentials.",
    result:
      "Describe the job in a sentence, get a running agent that tracks leads end-to-end — and every decision the agent made is inspectable after the fact, not just the final answer.",
    stack: ["Next.js", "TypeScript", "Claude API", "Prisma", "Tailwind CSS"],
  },
  {
    slug: "myagent",
    title: "Personal AI Assistant",
    category: "Agents & Chatbots",
    problem:
      "Switching between calendar, notes, and chat apps to get simple things done wastes time and breaks focus.",
    approach:
      "Built a custom-coded Next.js assistant with four selectable modes — Writing, Creative, Conversation, and Personal — running on GLM-4.5-Flash. In Personal mode, function calling lets it take real actions instead of only generating text: creating and checking Google Calendar events, creating and listing Notion tasks. Auth and per-user accounts run through Clerk, and conversations persist client-side with a searchable history and light/dark theming.",
    result:
      "An assistant that actually does the thing instead of describing how you'd do it — checks your calendar, files a Notion task, and remembers the conversation next time you open it.",
    stack: ["Next.js", "TypeScript", "React", "Clerk", "Google Calendar API", "Notion API", "GLM-4.5-Flash"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Agent-Chatbot" }],
  },

  // ---------------------------------------------------------------------
  // n8n Automation
  // ---------------------------------------------------------------------
  {
    slug: "ai-telegram-task-bot",
    title: "AI Telegram Task Bot",
    category: "n8n Automation",
    problem:
      "Remote teams switch apps constantly just to log a task — enough friction that the task often doesn't get logged at all.",
    approach:
      "Built an AI-powered Telegram bot in n8n that accepts text or voice messages, transcribes voice input, and asks smart follow-up questions for whatever detail is missing (due date, priority, assignee) before creating the task directly in the connected project management system, with an instant confirmation sent back.",
    result:
      "80% reduction in manual task-entry time and near-zero missed follow-ups for the client's remote team.",
    stack: ["n8n", "Telegram API", "OpenAI", "Notion API"],
    images: [
      "/projects/ai-telegram-task-bot/01-main-flow.png",
      "/projects/ai-telegram-task-bot/02.png",
      "/projects/ai-telegram-task-bot/03.png",
      "/projects/ai-telegram-task-bot/04.png",
      "/projects/ai-telegram-task-bot/05.png",
      "/projects/ai-telegram-task-bot/06.png",
      "/projects/ai-telegram-task-bot/07.png",
      "/projects/ai-telegram-task-bot/08.png",
      "/projects/ai-telegram-task-bot/09.png",
    ],
  },
  {
    slug: "master-agent-router",
    title: "Master Agent — Multi-Workflow Router",
    category: "n8n Automation",
    problem:
      "Every new request type (appointments, reminders, meetings) meant building yet another standalone, disconnected workflow.",
    approach:
      "Built an n8n Master Agent that receives an incoming request, holds conversation memory, and routes it to the correct specialized tool workflow — Appointment Agent, Reminder Agent, Telegram Task Agent — with error handling around each handoff.",
    result:
      "New capabilities plug in as another tool workflow behind the same front door instead of another one-off automation to maintain.",
    stack: ["n8n", "OpenAI", "Telegram", "Webhooks"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
  },
  {
    slug: "hubspot-chatbot",
    title: "HubSpot Customer Communication Bot",
    category: "n8n Automation",
    problem:
      "Incoming customer requests needed to hit HubSpot, trigger the right follow-up, and get logged — without someone manually relaying each one.",
    approach:
      "Built an n8n workflow connecting HubSpot, Twilio, Google Sheets, and OpenAI to classify incoming requests, manage the conversation, and support automated follow-ups logged back to the CRM.",
    result:
      "Incoming requests are classified and followed up on automatically, with a Sheets-based record of what happened and when.",
    stack: ["n8n", "HubSpot", "Twilio", "Google Sheets", "OpenAI"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
    images: ["/projects/hubspot-chatbot/01-flow.png"],
  },
  {
    slug: "meeting-management-system",
    title: "Meeting Management System",
    category: "n8n Automation",
    problem:
      "Creating, rescheduling, cancelling, and reminding people about meetings was five different manual steps across calendars and chat.",
    approach:
      "Built a group of connected n8n workflows that separate personal vs. project meetings, handle cancellations and rescheduling, and send reminders — integrated with Google Calendar, Outlook, Notion, and Telegram.",
    result:
      "One connected system instead of five manual steps — book, move, cancel, or remind, all through the same workflow family.",
    stack: ["n8n", "Google Calendar", "Microsoft Outlook", "Notion", "Telegram"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
    images: [
      "/projects/meeting-management-system/01-routing.png",
      "/projects/meeting-management-system/02-reminders.png",
    ],
  },
  {
    slug: "invoice-processing",
    title: "Invoice & Vendor Payment Processing",
    category: "n8n Automation",
    problem:
      "Invoices arriving by email had to be manually read, logged, and tracked through to vendor payment status.",
    approach:
      "Built an n8n workflow that receives invoice documents through Gmail, extracts the relevant data, stores files in Drive, updates records in Sheets/Airtable, and — for Wise-based payments — updates payment records and notifies vendors of status changes.",
    result:
      "Invoices go from inbox to logged, tracked record automatically, with vendors notified without anyone re-typing payment details.",
    stack: ["n8n", "Gmail", "Google Drive", "Airtable", "Wise", "PDF.co"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
  },

  // ---------------------------------------------------------------------
  // Make.com Automation
  // ---------------------------------------------------------------------
  {
    slug: "sous-experiences",
    title: "SOUS Experiences — Booking & Payment Automation",
    category: "Make.com Automation",
    problem:
      "A hospitality client needed bookings, deposits, and staged payments to flow automatically from intake to confirmation without manual follow-up.",
    approach:
      "Built a Make.com scenario chain: form intake writes to Notion, a router splits by payment stage, and Stripe creates/updates invoices and finalizes drafts across first-payment and full-payment paths, with WhatsApp Business Cloud sending templated confirmations at each step.",
    result:
      "Leads move from form submission to a confirmed, paid booking with WhatsApp confirmations at every stage — no manual invoice creation.",
    stack: ["Make.com", "Notion API", "Stripe API", "WhatsApp Business Cloud"],
    images: [
      "/projects/sous-experiences/01-intake-router.jpg",
      "/projects/sous-experiences/02-stripe-router.jpg",
      "/projects/sous-experiences/03-invoice-chain.jpg",
      "/projects/sous-experiences/04-full-scenario.jpg",
    ],
  },
  {
    slug: "crm-woocommerce-automation",
    title: "CRM & WooCommerce Automation",
    category: "Make.com Automation",
    problem:
      "Orders and customer requests needed to update Zoho CRM, Zoho Books, and the WooCommerce store consistently, without three separate manual entries.",
    approach:
      "Built a Make.com workflow that classifies incoming requests with OpenAI and updates Zoho CRM, Zoho Books, and WooCommerce accordingly, with Gmail handling the customer-facing side.",
    result:
      "One incoming request updates CRM, billing, and store records together instead of drifting out of sync across three systems.",
    stack: ["Make.com", "Zoho CRM", "Zoho Books", "WooCommerce", "OpenAI", "Gmail"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
    images: [
      "/projects/crm-woocommerce-automation/01-crm-flow.png",
      "/projects/crm-woocommerce-automation/02-full-router.png",
    ],
  },

  // ---------------------------------------------------------------------
  // Zapier Automation (team / collaborative builds)
  // ---------------------------------------------------------------------
  {
    slug: "zapier-lead-management",
    title: "Lead Management Automation (Zapier)",
    category: "Zapier Automation",
    problem:
      "Lead follow-up, onboarding, and retention emails were being sent manually as leads moved through Asana.",
    approach:
      "Contributed to five connected Zapier workflows spanning Asana, Google Drive, and Gmail — folder/subtask creation, unresponsive-lead follow-up, quote reminders, welcome emails, and post-close service recommendations.",
    result:
      "Faster response times and consistent lead nurturing across the full lifecycle, from 'Ready to Start' through 'Paid & Closed.'",
    stack: ["Zapier", "Asana", "Google Drive", "Gmail"],
    team: true,
  },
  {
    slug: "zapier-crm-suite",
    title: "Zapier CRM Automation (Zoom, Zendesk, Asana)",
    category: "Zapier Automation",
    problem:
      "Meeting notes, support tickets, and tasks lived in three disconnected tools.",
    approach:
      "Contributed to Zapier automations connecting Zoom transcripts to Asana tasks, Zendesk tickets to Slack updates, and deal notes to drafted emails.",
    result:
      "Meeting and support activity automatically became tracked tasks and notifications instead of manual copy-paste.",
    stack: ["Zapier", "Zoom", "Zendesk", "Asana", "Slack"],
    team: true,
  },
  {
    slug: "workflows-suite",
    title: "Cross-Platform Intake Workflows",
    category: "Zapier Automation",
    problem:
      "A range of small business processes (form intake, task creation, service mapping) needed no-code automation across three different platforms.",
    approach:
      "Contributed workflows across n8n, Make, and Zapier — including a Fillout Forms → Notion → WhatsApp/Gmail intake flow and Make.com service-mapping uploads.",
    result:
      "Cross-platform automation experience — comparing how the same intake-to-notification pattern is built in n8n, Make, and Zapier.",
    stack: ["n8n", "Make.com", "Zapier", "Notion API", "WhatsApp Business Cloud"],
    team: true,
  },

  // ---------------------------------------------------------------------
  // GoHighLevel / CRM (team / collaborative build)
  // ---------------------------------------------------------------------
  {
    slug: "ghl-real-estate",
    title: "Real Estate Lead-to-Appointment Automation",
    category: "GoHighLevel / CRM",
    problem:
      "Manual lead handling after a booked consultation created slow response times and inconsistent CRM records.",
    approach:
      "Contributed to a GoHighLevel workflow that turns a booked property consultation into a structured sales opportunity: create/update the opportunity, assign the lead owner, notify internally, and tag the contact for follow-up.",
    result:
      "Every step — opportunity creation, lead assignment, notification, and tagging — verified end-to-end against a test CRM contact.",
    stack: ["GoHighLevel", "CRM Automation"],
    team: true,
  },

  // ---------------------------------------------------------------------
  // Web
  // ---------------------------------------------------------------------
  {
    slug: "evoke-london",
    title: "Evoke London — Voice-Enabled Contact Form",
    category: "Web",
    problem:
      "Long enquiry forms have high drop-off — especially on mobile — for a construction/design company's leads.",
    approach:
      "Built a responsive multi-page site where a visitor can speak their enquiry instead of typing it. The Web Speech API transcribes the audio, extracts name, company, email, phone, and project type, and auto-fills the matching fields for review before submit.",
    result:
      "A voice-to-form flow (Chrome/Edge) alongside project filtering, testimonials, scroll animations, and an embedded location map — cutting the friction of a long enquiry form.",
    stack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Agent-Chatbot" }],
  },
];

export const categories: readonly ("All" | Category)[] = [
  "All",
  "Agents & Chatbots",
  "n8n Automation",
  "Make.com Automation",
  "Zapier Automation",
  "GoHighLevel / CRM",
  "Web",
] as const;
