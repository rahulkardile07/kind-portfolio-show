import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul Kardile | Software Engineer Portfolio" },
      { name: "description", content: "Explore Rahul Kardile's Java, React, Python, API, and SQL work, experience, and technical skills." },
      { property: "og:title", content: "Rahul Kardile | Software Engineer Portfolio" },
      { property: "og:description", content: "Full-stack projects and experience from Rahul Kardile, a software engineer based in Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  { title: "Frameworks", items: ["React.js", "FastAPI", "Flask", "REST API"] },
  { title: "Data & tools", items: ["MySQL", "Oracle SQL", "Git", "GitHub"] },
];

/* ---------- Animation helpers ---------- */

type RevealDirection = "up" | "left" | "scale";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClass = direction === "left" ? "reveal-left" : direction === "scale" ? "reveal-scale" : "";

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`reveal ${directionClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={barRef} aria-hidden="true" className="progress-bar fixed inset-x-0 top-0 z-40 h-[3px] origin-left scale-x-0" />;
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <nav className="sticky top-0 z-30 border-b border-border bg-panel/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="font-display text-lg uppercase transition-transform duration-300 hover:scale-110" aria-label="Rahul Kardile, back to top">RK</a>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase sm:gap-6">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#path">Path</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <a href="mailto:kardilerahul702@gmail.com" className="rounded-md bg-primary px-3 py-2 font-sans font-medium normal-case text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md">Email Rahul</a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative flex min-h-[calc(90vh-3.5rem)] items-center overflow-hidden py-16">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="drift-shape pointer-events-none absolute -top-1/4 left-1/2 h-[150%] w-[45%] border border-primary-foreground/60 bg-primary-foreground/40 backdrop-blur-xl" />
        <div className="float-shape pointer-events-none absolute top-1/3 -right-1/5 h-[80%] w-[35%] rotate-[14deg] border border-primary-foreground/50 bg-primary/10 backdrop-blur-lg" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
          <p className="rise-in mb-4 font-mono text-xs uppercase text-primary [animation-delay:60ms]">Pune, India · Software Engineer</p>
          <h1 className="rise-in max-w-5xl text-balance font-display text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.9] uppercase [animation-delay:140ms]">
            Rahul<br />Kardile<span className="blink-cursor ml-[0.06em] inline-block h-[0.8em] w-[0.08em] bg-primary align-baseline" />
          </h1>
          <p className="rise-in mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:260ms] md:text-xl">
            I build dependable full-stack applications with Java, Python, React, and clean SQL underneath—turning ideas into useful, human-friendly software.
          </p>
          <div className="rise-in mt-9 flex flex-wrap gap-3 [animation-delay:360ms]">
            <a href="mailto:kardilerahul702@gmail.com" className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg">Email me</a>
            <a href="https://github.com/rahulkardile07" target="_blank" rel="noreferrer" className="rounded-md border border-border bg-primary-foreground/45 px-5 py-3 font-medium backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">GitHub ↗</a>
            <a href="https://linkedin.com/in/rahulkardile07" target="_blank" rel="noreferrer" className="rounded-md border border-border bg-primary-foreground/45 px-5 py-3 font-medium backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">LinkedIn ↗</a>
          </div>
          <div className="rise-in mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6 [animation-delay:460ms]">
            <Stat value={<CountUp to={200} suffix="+" />} label="SQL problems solved" accent />
            <Stat value="B.E. IT" label="Graduate, 2024" />
            <Stat value={<CountUp to={2} />} label="Engineering internships" />
          </div>
        </div>
      </header>

      <main>
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <Reveal className="mb-10 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl uppercase md:text-5xl">Selected work</h2>
            <span className="font-mono text-[11px] uppercase text-muted-foreground">02 projects</span>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <Project number="01" stack="Java + SQL" title="Employee Management System" description="A Java application using OOP and SQL to manage employee records with complete create, update, search, and delete workflows." tags={["Java", "OOP", "SQL", "CRUD"]} />
            </Reveal>
            <Reveal delay={120}>
              <Project number="02" stack="React + API" title="Movie Web Application" description="A responsive React experience powered by the Movie Database API, with global search, movie details, cast information, and curated listings." tags={["React.js", "TMDB API", "Responsive UI"]} reverse />
            </Reveal>
          </div>
        </section>

        <section id="path" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <Reveal>
            <h2 className="mb-12 font-display text-4xl uppercase md:text-5xl">The path</h2>
          </Reveal>
          <div className="ml-1 space-y-10 border-l-2 border-primary/30 pl-8">
            <Reveal direction="left">
              <Timeline date="Aug 2025 – May 2026 · Pune" title="Full Stack Java Development Intern" place="QSpiders" detail="Practiced Core Java, OOP, HTML, CSS, JavaScript, and Oracle SQL through hands-on assignments and 200+ SQL problems." />
            </Reveal>
            <Reveal direction="left" delay={120}>
              <Timeline date="Nov 2024 – Jan 2025 · Pune" title="Web Development Intern" place="Webfries IT Solutions" detail="Built responsive interfaces, collaborated on usability improvements, and tested and debugged layouts across devices and browsers." />
            </Reveal>
            <Reveal direction="left" delay={240}>
              <Timeline date="Graduated 2024" title="B.E. Information Technology" place="Matoshri College of Engineering, Nashik" detail="Built the technical foundation for application development, databases, and problem solving." muted />
            </Reveal>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <Reveal>
            <h2 className="mb-12 font-display text-4xl uppercase md:text-5xl">Toolkit</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 130} className="h-full">
                <article className="h-full rounded-lg border border-border bg-panel/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg">
                  <h3 className="mb-5 font-mono text-[11px] uppercase text-primary">{group.title}</h3>
                  <ul className="space-y-3 text-sm">
                    {group.items.map((item) => (
                      <li key={item} className="border-b border-border pb-2 transition-all duration-300 last:border-0 last:pb-0 hover:translate-x-1.5 hover:text-primary">{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-lg border border-border bg-primary/10 p-8 text-center shadow-sm backdrop-blur-xl md:p-16">
              <div className="float-shape pointer-events-none absolute -top-10 left-1/4 h-32 w-32 rotate-45 border border-primary-foreground/50 bg-primary-foreground/30 backdrop-blur-md" />
              <p className="relative mb-4 font-mono text-[11px] uppercase text-primary">Let&apos;s talk</p>
              <h2 className="relative font-display text-4xl uppercase md:text-5xl">Build something useful</h2>
              <p className="relative mx-auto mt-4 max-w-[44ch] text-pretty text-muted-foreground">I&apos;m open to junior software engineering, full-stack, and backend opportunities.</p>
              <a href="mailto:kardilerahul702@gmail.com" className="relative mt-8 inline-block max-w-full break-all rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg">kardilerahul702@gmail.com</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase text-muted-foreground sm:flex-row">
          <span>© 2026 Rahul Kardile · Pune, India</span>
          <div className="flex gap-5">
            <a href="https://github.com/rahulkardile07" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a>
            <a href="https://linkedin.com/in/rahulkardile07" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group relative hidden text-muted-foreground transition-colors hover:text-primary sm:block">
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

function Stat({ value, label, accent = false }: { value: ReactNode; label: string; accent?: boolean }) {
  return (
    <div>
      <div className={`font-display text-3xl ${accent ? "text-primary" : ""}`}>{value}</div>
      <div className="font-mono text-[11px] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

function Project({ number, stack, title, description, tags, reverse = false }: { number: string; stack: string; title: string; description: string; tags: string[]; reverse?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-panel/70 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl md:p-12">
      <div className={`pointer-events-none absolute h-52 w-52 rotate-45 border border-primary-foreground/50 bg-primary/10 backdrop-blur-md transition-all duration-700 group-hover:rotate-[75deg] group-hover:scale-125 ${reverse ? "-bottom-16 -left-12" : "-top-14 -right-12"}`} />
      <div className="relative">
        <p className="font-mono text-[11px] uppercase text-primary">{number} · {stack}</p>
        <h3 className="mt-2 max-w-2xl text-balance font-display text-3xl uppercase md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase">
          {tags.map((tag) => (
            <span key={tag} className="rounded-md border border-border px-2.5 py-1 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Timeline({ date, title, place, detail, muted = false }: { date: string; title: string; place: string; detail: string; muted?: boolean }) {
  return (
    <article className="group relative max-w-3xl">
      <span className={`absolute -left-[39px] top-1 size-3 rounded-full ring-4 ring-background transition-transform duration-300 group-hover:scale-150 ${muted ? "bg-muted-foreground" : "pulse-dot bg-primary"}`} />
      <p className="font-mono text-[11px] uppercase text-muted-foreground">{date}</p>
      <h3 className="mt-1 font-display text-xl uppercase transition-colors duration-300 group-hover:text-primary md:text-2xl">{title}</h3>
      <p className="mt-1 font-medium">{place}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </article>
  );
}
