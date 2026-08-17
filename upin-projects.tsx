"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Code2,
  Target,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Lock,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "../sections/section-heading";
import { CodePreview } from "./code-preview";
import { projectCodeSnippets } from "@/lib/project-snippets";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = t.projects.items;
  const active = projects[activeIdx];
  const snippet = projectCodeSnippets[activeIdx];

  const go = (delta: number) => {
    setActiveIdx((prev) => (prev + delta + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          badge={t.projects.badge}
          heading={t.projects.heading}
          subheading={t.projects.subheading}
        />

        {/* Tab selector */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              data-cursor="pointer"
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-3.5",
                i === activeIdx
                  ? "bg-foreground text-background"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="mr-2 font-mono opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.confidential && t.projects.confidential + " · "}
              {p.comingSoon && t.projects.comingSoon + " · "}
              {p.name.split(":")[0].split(" [")[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 lg:grid-cols-2 lg:gap-8"
          >
            {/* Left: case study */}
            <div className="flex min-w-0 flex-col">
              {/* Project image / gradient placeholder with confidential overlay */}
              <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl glass">
                {active.image ? (
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-700 hover:scale-105 ${
                      active.confidential ? "blur-sm brightness-50" : ""
                    }`}
                    priority={activeIdx === 0}
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center p-6 ${
                      active.confidential ? "blur-sm brightness-50" : ""
                    }`}
                    style={{
                      background:
                        active.gradient ||
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                    }}
                  >
                    <div className="text-center">
                      <div className="mb-2 font-display text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
                        {active.name}
                      </div>
                      <div className="mx-auto h-1 w-16 rounded-full bg-white/40" />
                      <div className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
                        Case study
                      </div>
                    </div>
                  </div>
                )}
                {/* Gradient overlay for image legibility */}
                {active.image && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                )}
                {/* Confidential badge ON the image */}
                {active.confidential && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-amber-500/50 bg-black/60 px-6 py-4 backdrop-blur-md">
                      <Lock className="h-8 w-8 text-amber-400" />
                      <span className="font-display text-lg font-bold text-amber-400">
                        {t.projects.confidential}
                      </span>
                      <span className="text-xs text-amber-200/80">
                        Client work — details private
                      </span>
                    </div>
                  </div>
                )}
                {/* Coming Soon badge ON the image */}
                {active.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-sky-500/50 bg-black/60 px-6 py-4 backdrop-blur-md">
                      <Clock className="h-8 w-8 text-sky-400" />
                      <span className="font-display text-lg font-bold text-sky-400">
                        {t.projects.comingSoon}
                      </span>
                      <span className="text-xs text-sky-200/80">
                        Full case study in progress
                      </span>
                    </div>
                  </div>
                )}
                {/* Featured badge */}
                {activeIdx === 0 && !active.confidential && (
                  <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {t.projects.featured}
                  </div>
                )}
              </div>

              {/* Project name + tagline + badges */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {active.confidential && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400"
                      >
                        <Lock className="mr-1 h-3 w-3" />
                        {t.projects.confidential}
                      </Badge>
                    )}
                    {active.comingSoon && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-medium text-sky-600 dark:text-sky-400"
                      >
                        <Clock className="mr-1 h-3 w-3" />
                        {t.projects.comingSoon}
                      </Badge>
                    )}
                    {activeIdx === 0 && !active.confidential && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border border-[var(--neon)]/30 bg-[var(--neon)]/10 px-2.5 py-0.5 text-[11px] font-medium text-[var(--neon)]"
                      >
                        {t.projects.featured}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                    {active.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                    {active.tagline}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!active.confidential && !active.comingSoon && active.githubUrl && (
                    <a
                      href={active.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:bg-foreground/10"
                      aria-label="View code"
                      data-cursor="pointer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {!active.confidential && !active.comingSoon && active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:bg-foreground/10"
                      aria-label="Live demo"
                      data-cursor="pointer"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 break-words text-sm leading-relaxed text-foreground/75 sm:text-base">
                {active.description}
              </p>

              {/* Meta grid */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="min-w-0 rounded-2xl glass p-4">
                  <div className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <Target className="h-3.5 w-3.5 shrink-0 text-[var(--neon)]" />
                    {t.projects.role}
                  </div>
                  <div className="break-words text-sm font-medium">{active.role}</div>
                </div>
                <div className="min-w-0 rounded-2xl glass p-4">
                  <div className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--magenta)]" />
                    {t.projects.impact}
                  </div>
                  <div className="break-words text-sm font-medium">{active.impact}</div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <Code2 className="h-3.5 w-3.5" />
                  {t.projects.tech}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {active.tech.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md border border-foreground/10 bg-foreground/[0.04] px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground/75"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-wrap gap-2">
                {active.confidential ? (
                  <div className="inline-flex h-9 items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-4 text-xs font-medium text-amber-600 dark:text-amber-400">
                    <Lock className="h-3.5 w-3.5" />
                    {t.projects.confidential}
                  </div>
                ) : active.comingSoon ? (
                  <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/5 px-4 text-xs font-medium text-sky-600 dark:text-sky-400">
                    <Clock className="h-3.5 w-3.5" />
                    {t.projects.comingSoon}
                  </div>
                ) : (
                  <>
                    {active.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-full glass"
                        data-cursor="pointer"
                      >
                        <a
                          href={active.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3.5 w-3.5" />
                          {t.projects.viewCode}
                        </a>
                      </Button>
                    )}
                    {active.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="h-9 rounded-full bg-foreground text-background hover:bg-foreground/90"
                        data-cursor="pointer"
                      >
                        <a
                          href={active.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.projects.viewLive}
                          <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>

              {/* Pager */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => go(-1)}
                  className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  data-cursor="pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Prev
                </button>
                <div className="flex gap-1.5">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIdx
                          ? "w-6 bg-[var(--neon)]"
                          : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                      )}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  data-cursor="pointer"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right: live code preview */}
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live code preview
              </div>
              <CodePreview
                code={snippet.code}
                language={snippet.language}
                filename={snippet.filename}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
