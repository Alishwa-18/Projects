"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = project.images ?? [];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50">
      {images.length > 0 && (
        <button
          onClick={() => setLightbox(0)}
          className="mb-4 -mt-2 -mx-2 overflow-hidden rounded-xl border border-border bg-surface2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt={`${project.title} — workflow screenshot`}
            className="h-40 w-full object-cover object-top transition hover:scale-[1.02]"
          />
        </button>
      )}

      <div className="flex items-center justify-between">
        <span className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs text-accent2">
          {project.category}
        </span>
        {project.team && (
          <span className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs text-muted">
            Team Project
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-muted">Problem</div>
          <p className="mt-1 text-muted">{project.problem}</p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-muted">
            {project.team ? "My Contribution" : "Approach"}
          </div>
          <p className="mt-1 text-muted">{project.approach}</p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-accent2">Result</div>
          <p className="mt-1 text-white/90">{project.result}</p>
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setLightbox(i)}
              className="h-12 w-16 flex-shrink-0 overflow-hidden rounded-md border border-border bg-surface2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-surface2 px-2 py-1 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex gap-4 border-t border-border pt-4">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-accent2 hover:underline"
            >
              {l.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      )}

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndex={setLightbox}
        />
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-border bg-surface p-2 text-white hover:border-accent"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onIndex((index - 1 + images.length) % images.length);
          }}
          className="absolute left-4 rounded-full border border-border bg-surface p-2 text-white hover:border-accent sm:left-8"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onIndex((index + 1) % images.length);
          }}
          className="absolute right-4 rounded-full border border-border bg-surface p-2 text-white hover:border-accent sm:right-8"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 font-mono text-xs text-muted">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
