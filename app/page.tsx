"use client";

import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Terminal boot sequence — the hero                                  */
/* ------------------------------------------------------------------ */

const BOOT_LINES = [
  { text: "$ docker compose up", type: "cmd" },
  { text: "creating network fullstack_default", type: "log" },
  { text: "next.js       ready   http://localhost:3000", type: "ready" },
  { text: "nestjs-api    ready   http://localhost:4000", type: "ready" },
  { text: "postgres      ready   port 5432", type: "ready" },
  { text: "redis         ready   port 6379", type: "ready" },
  { text: "$ whoami", type: "cmd" },
  { text: "Pouya Ghazanfari Niya — Full-Stack Engineer", type: "highlight" },
];

function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= BOOT_LINES.length) return;
    const delay = BOOT_LINES[visibleCount].type === "cmd" ? 480 : 220;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f14] shadow-2xl shadow-black/50">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-60" />

      {/* title bar */}
      <div className="relative flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ms-3 font-mono text-[11px] tracking-wide text-white/40">
          zsh — pouya@fullstack
        </span>
        <span className="ms-auto font-mono text-[10px] text-white/25">
          ~/projects
        </span>
      </div>

      {/* body */}
      <div className="relative min-h-[240px] px-5 py-5 font-mono text-[13px] leading-6 sm:text-[13.5px]">
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="boot-line mb-0.5">
            {line.type === "cmd" && (
              <span>
                <span className="text-cyan-400">➜</span>{" "}
                <span className="text-white/90">{line.text}</span>
              </span>
            )}
            {line.type === "log" && (
              <span className="text-white/35">{line.text}</span>
            )}
            {line.type === "ready" && (
              <span className="text-white/50">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
                {line.text}
              </span>
            )}
            {line.type === "highlight" && (
              <span className="font-medium text-cyan-300">{line.text}</span>
            )}
          </div>
        ))}

        {visibleCount >= BOOT_LINES.length && (
          <span className="mt-1 inline-block h-4 w-[7px] animate-pulse bg-cyan-400/80" />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const links = [
    { href: "#stack", label: "Stack" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#07090d]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          Pouya<span className="text-cyan-400">.</span>dev
        </a>

        <ul className="hidden items-center gap-8 text-sm text-white/50 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[100px]" />

      <div className="relative">
        <p className="font-mono text-xs tracking-widest text-cyan-400/90 uppercase">
          full-stack engineer
        </p>

        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
          I build the whole
          <br />
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            request, front to back.
          </span>
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-7 text-white/55">
          Five years shipping products end to end — React and Next.js
          interfaces backed by NestJS and Node.js services, containerized
          with Docker and deployed without drama.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#041015] shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/30"
          >
            View recent work
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition-all duration-200 hover:border-white/25 hover:bg-white/10"
          >
            Download résumé
          </a>
        </div>
      </div>

      <div className="relative">
        <Terminal />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stack — layered architecture diagram                               */
/* ------------------------------------------------------------------ */

const LAYERS = [
  {
    tier: "Client",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    tier: "API",
    items: ["NestJS", "REST", "GraphQL", "WebSockets"],
  },
  {
    tier: "Runtime & Data",
    items: ["Node.js", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    tier: "Infra",
    items: ["Docker", "GitHub Actions", "AWS", "Nginx"],
  },
];

function Stack() {
  return (
    <section id="stack" className="border-t border-white/6 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          What a request passes through
        </h2>
        <p className="mt-3 max-w-lg text-[15px] text-white/50">
          Every layer of the stack I actually build with day to day, top to
          bottom.
        </p>

        <div className="relative mt-14">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 left-[18px] w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent sm:left-[22px]" />

          <div className="flex flex-col gap-1">
            {LAYERS.map((layer, i) => (
              <div key={layer.tier} className="relative pl-12 sm:pl-14">
                {/* dot */}
                <div className="absolute top-6 left-[11px] h-3.5 w-3.5 rounded-full border-2 border-cyan-400/70 bg-[#07090d] sm:left-[15px]" />

                <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-5 py-5 transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.05] sm:px-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                    <div className="flex items-baseline gap-3 sm:w-44 sm:shrink-0">
                      <span className="font-mono text-[11px] text-cyan-400/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-medium text-white">
                        {layer.tier}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-sm text-white/60 transition-colors duration-200 hover:border-cyan-500/30 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Work — case studies                                                */
/* ------------------------------------------------------------------ */

const PROJECTS = [
  {
    name: "Ledger",
    role: "Multi-tenant billing platform",
    description:
      "Rebuilt a billing system used by 40+ businesses. Next.js dashboard, NestJS API handling usage metering, and a Postgres schema designed for auditability. Cut invoice-generation time from minutes to seconds.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    name: "Waypoint",
    role: "Realtime logistics tracker",
    description:
      "Fleet-tracking app with live position updates over WebSockets, a Node.js ingestion service processing GPS pings, and a Redis-backed queue to keep the dashboard under 200ms latency at scale.",
    stack: ["Node.js", "WebSockets", "Redis", "React"],
  },
  {
    name: "Fieldwork",
    role: "Internal ops tool, 0 to production",
    description:
      "Took an internal tool from spec to production alone: NestJS + GraphQL API, a Next.js frontend, and a Docker Compose setup that let the team run the entire stack locally with one command.",
    stack: ["NestJS", "GraphQL", "Docker", "Next.js"],
  },
];

function Work() {
  return (
    <section id="work" className="border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Recent work
        </h2>
        <p className="mt-3 max-w-lg text-[15px] text-white/50">
          A few products I built or led, front to back.
        </p>

        <div className="mt-14 flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group grid gap-5 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/12 hover:bg-white/[0.04] sm:grid-cols-[1fr_1.7fr] sm:gap-12 sm:p-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm text-cyan-400/80">{project.role}</p>
              </div>
              <div>
                <p className="text-[15px] leading-7 text-white/55">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs text-white/45"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Experience — timeline                                              */
/* ------------------------------------------------------------------ */

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Senior Full-Stack Engineer",
    org: "Northbeam Labs",
  },
  {
    period: "2022 — 2024",
    role: "Full-Stack Engineer",
    org: "Vela Systems",
  },
  {
    period: "2020 — 2022",
    role: "Backend Engineer",
    org: "Ferrous",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-t border-white/6 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Experience
        </h2>

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-[18px] w-px bg-gradient-to-b from-cyan-500/30 via-white/8 to-transparent sm:left-[22px]" />

          <div className="flex flex-col gap-2">
            {EXPERIENCE.map((job) => (
              <div
                key={job.org}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute top-5 left-[13px] h-2.5 w-2.5 rounded-full bg-cyan-400/80 sm:left-[17px]" />

                <div className="flex flex-col gap-1 rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-white/8 hover:bg-white/[0.03] sm:flex-row sm:items-baseline sm:justify-between sm:px-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-base font-medium text-white">
                      {job.role}
                    </span>
                    <span className="text-sm text-white/40">— {job.org}</span>
                  </div>
                  <span className="font-mono text-xs text-white/35">
                    {job.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Have something to build?
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-white/50">
          I take on a small number of full-stack projects at a time. Send a
          note and I&apos;ll reply within a day.
        </p>

        <a
          href="mailto:Pouya@example.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#041015] shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Pouya@example.com
        </a>

        <div className="mt-20 flex flex-col gap-5 border-t border-white/8 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Pouya Ghazanfari Niya</span>
          <div className="flex gap-7">
            <a href="#" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-white">
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white antialiased">
      <Nav />
      <Hero />
      <Stack />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}