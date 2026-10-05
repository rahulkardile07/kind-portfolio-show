import { createFileRoute } from "@tanstack/react-router";

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

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="sticky top-0 z-30 border-b border-border bg-panel/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="font-display text-lg uppercase" aria-label="Rahul Kardile, back to top">RK</a>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase sm:gap-6">
            <a href="#work" className="hidden text-muted-foreground transition-colors hover:text-primary sm:block">Work</a>
            <a href="#path" className="hidden text-muted-foreground transition-colors hover:text-primary sm:block">Path</a>
            <a href="#skills" className="hidden text-muted-foreground transition-colors hover:text-primary sm:block">Skills</a>
            <a href="mailto:kardilerahul702@gmail.com" className="rounded-md bg-primary px-3 py-2 font-sans font-medium normal-case text-primary-foreground transition-opacity hover:opacity-85">Email Rahul</a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative flex min-h-[calc(90vh-3.5rem)] items-center overflow-hidden py-16">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="drift-shape pointer-events-none absolute -top-1/4 left-1/2 h-[150%] w-[45%] border border-primary-foreground/60 bg-primary-foreground/40 backdrop-blur-xl" />
        <div className="pointer-events-none absolute top-1/3 -right-1/5 h-[80%] w-[35%] rotate-[14deg] border border-primary-foreground/50 bg-primary/10 backdrop-blur-lg" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
          <p className="rise-in mb-4 font-mono text-xs uppercase text-primary [animation-delay:60ms]">Pune, India · Software Engineer</p>
          <h1 className="rise-in max-w-5xl text-balance font-display text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.9] uppercase [animation-delay:140ms]">
            Rahul<br />Kardile<span className="blink-cursor ml-[0.06em] inline-block h-[0.8em] w-[0.08em] bg-primary align-baseline" />
          </h1>
          <p className="rise-in mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:260ms] md:text-xl">
            I build dependable full-stack applications with Java, Python, React, and clean SQL underneath—turning ideas into useful, human-friendly software.
          </p>
          <div className="rise-in mt-9 flex flex-wrap gap-3 [animation-delay:360ms]">
            <a href="mailto:kardilerahul702@gmail.com" className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-85">Email me</a>
            <a href="https://github.com/rahulkardile07" target="_blank" rel="noreferrer" className="rounded-md border border-border bg-primary-foreground/45 px-5 py-3 font-medium backdrop-blur transition-colors hover:border-primary">GitHub ↗</a>
            <a href="https://linkedin.com/in/rahulkardile07" target="_blank" rel="noreferrer" className="rounded-md border border-border bg-primary-foreground/45 px-5 py-3 font-medium backdrop-blur transition-colors hover:border-primary">LinkedIn ↗</a>
          </div>
          <div className="rise-in mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6 [animation-delay:460ms]">
            <Stat value="200+" label="SQL problems solved" accent />
            <Stat value="B.E. IT" label="Graduate, 2024" />
            <Stat value="2" label="Engineering internships" />
          </div>
        </div>
      </header>

      <main>
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl uppercase md:text-5xl">Selected work</h2>
            <span className="font-mono text-[11px] uppercase text-muted-foreground">02 projects</span>
          </div>
          <div className="space-y-5">
            <Project number="01" stack="Java + SQL" title="Employee Management System" description="A Java application using OOP and SQL to manage employee records with complete create, update, search, and delete workflows." tags={["Java", "OOP", "SQL", "CRUD"]} />
            <Project number="02" stack="React + API" title="Movie Web Application" description="A responsive React experience powered by the Movie Database API, with global search, movie details, cast information, and curated listings." tags={["React.js", "TMDB API", "Responsive UI"]} reverse />
          </div>
        </section>

        <section id="path" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <h2 className="mb-12 font-display text-4xl uppercase md:text-5xl">The path</h2>
          <div className="ml-1 space-y-10 border-l-2 border-primary/30 pl-8">
            <Timeline date="Aug 2025 – May 2026 · Pune" title="Full Stack Java Development Intern" place="QSpiders" detail="Practiced Core Java, OOP, HTML, CSS, JavaScript, and Oracle SQL through hands-on assignments and 200+ SQL problems." />
            <Timeline date="Nov 2024 – Jan 2025 · Pune" title="Web Development Intern" place="Webfries IT Solutions" detail="Built responsive interfaces, collaborated on usability improvements, and tested and debugged layouts across devices and browsers." />
            <Timeline date="Graduated 2024" title="B.E. Information Technology" place="Matoshri College of Engineering, Nashik" detail="Built the technical foundation for application development, databases, and problem solving." muted />
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <h2 className="mb-12 font-display text-4xl uppercase md:text-5xl">Toolkit</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-border bg-panel/70 p-6 shadow-sm backdrop-blur-xl">
                <h3 className="mb-5 font-mono text-[11px] uppercase text-primary">{group.title}</h3>
                <ul className="space-y-3 text-sm">
                  {group.items.map((item) => <li key={item} className="border-b border-border pb-2 last:border-0 last:pb-0">{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-24">
          <div className="relative overflow-hidden rounded-lg border border-border bg-primary/10 p-8 text-center shadow-sm backdrop-blur-xl md:p-16">
            <div className="pointer-events-none absolute -top-10 left-1/4 h-32 w-32 rotate-45 border border-primary-foreground/50 bg-primary-foreground/30 backdrop-blur-md" />
            <p className="relative mb-4 font-mono text-[11px] uppercase text-primary">Let&apos;s talk</p>
            <h2 className="relative font-display text-4xl uppercase md:text-5xl">Build something useful</h2>
            <p className="relative mx-auto mt-4 max-w-[44ch] text-pretty text-muted-foreground">I&apos;m open to junior software engineering, full-stack, and backend opportunities.</p>
            <a href="mailto:kardilerahul702@gmail.com" className="relative mt-8 inline-block max-w-full break-all rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-85">kardilerahul702@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase text-muted-foreground sm:flex-row">
          <span>© 2026 Rahul Kardile · Pune, India</span>
          <div className="flex gap-5"><a href="https://github.com/rahulkardile07" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a><a href="https://linkedin.com/in/rahulkardile07" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return <div><div className={`font-display text-3xl ${accent ? "text-primary" : ""}`}>{value}</div><div className="font-mono text-[11px] uppercase text-muted-foreground">{label}</div></div>;
}

function Project({ number, stack, title, description, tags, reverse = false }: { number: string; stack: string; title: string; description: string; tags: string[]; reverse?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-border bg-panel/70 p-8 shadow-sm backdrop-blur-xl md:p-12">
      <div className={`pointer-events-none absolute h-52 w-52 rotate-45 border border-primary-foreground/50 bg-primary/10 backdrop-blur-md ${reverse ? "-bottom-16 -left-12" : "-top-14 -right-12"}`} />
      <div className="relative">
        <p className="font-mono text-[11px] uppercase text-primary">{number} · {stack}</p>
        <h3 className="mt-2 max-w-2xl text-balance font-display text-3xl uppercase md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase">{tags.map((tag) => <span key={tag} className="rounded-md border border-border px-2.5 py-1">{tag}</span>)}</div>
      </div>
    </article>
  );
}

function Timeline({ date, title, place, detail, muted = false }: { date: string; title: string; place: string; detail: string; muted?: boolean }) {
  return (
    <article className="relative max-w-3xl">
      <span className={`absolute -left-[39px] top-1 size-3 rounded-full ring-4 ring-background ${muted ? "bg-muted-foreground" : "bg-primary"}`} />
      <p className="font-mono text-[11px] uppercase text-muted-foreground">{date}</p>
      <h3 className="mt-1 font-display text-xl uppercase md:text-2xl">{title}</h3>
      <p className="mt-1 font-medium">{place}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </article>
  );
}
