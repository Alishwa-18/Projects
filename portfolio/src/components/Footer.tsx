export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Alishwa Shakeel. Built with Next.js & Tailwind.</span>
        <span>AI Automation Engineer · Available for freelance work</span>
      </div>
    </footer>
  );
}
