"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="section-label">Featured Projects</div>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
        Agents and automations built end-to-end.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Every project below started as an operational problem and ended as a
        system that runs without me in the loop. Projects marked{" "}
        <span className="text-white">Team Project</span> were built as part of
        a client or team engagement, not solo.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === c
                ? "border-accent bg-accent/10 text-white"
                : "border-border text-muted hover:border-accent/50 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
