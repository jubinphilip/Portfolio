import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";

const info = {
  name: "Jubin Philip",
  email: "jubinphilip25@gmail.com",
  phone: "+91 7025889751",
  github: "https://github.com/jubinphilip",
  linkedin: "https://www.linkedin.com/in/jubin-philip-92935b211/",
  website: "https://jubinphilip.netlify.app",
};

const marqueeSkills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "RAG Pipelines",
  "LLM Integration",
  "PyTorch",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Next.js",
  "GraphQL",
  "ETL Pipelines",
  "Claude Code",
];

const experience = [
  {
    index: "01",
    period: "Mar 2025 — Present",
    role: "Junior Software Developer",
    company: "Digilaw Legal Software",
    place: "Kochi",
    points: [
      "Architected Redis queue workers so heavy scraping, parsing, and bulk database updates run asynchronously — with zero added API latency.",
      "Built legal-data ETL pipelines that clean messy web-scraped documents and PDFs straight into structured PostgreSQL.",
      "Hardened worker pipelines with retry mechanisms, structured logging, and failure handling — fault-tolerant jobs and consistent data, even when scrapers misbehave.",
      "Optimized indexes and queries for a 30% boost in production database responsiveness, and led a MySQL → PostgreSQL migration with zero data loss.",
      "Designed secure, modular REST APIs with JWT authentication on a cleanly layered backend.",
      "Trained custom PyTorch computer-vision models on 10,000+ labeled images for OCR text extraction.",
      "Accelerated everyday development with AI tooling — Claude Code and Google Antigravity wired into the workflow for building, debugging, and refactoring.",
    ],
  },
  {
    index: "02",
    period: "Aug 2024 — Feb 2025",
    role: "Software Developer Trainee",
    company: "Techfriar Technologies",
    place: "Infopark, Kochi",
    points: [
      "Shipped full-stack features with React, Node.js, and PostgreSQL for fast internal business applications.",
      "Engineered custom GraphQL endpoints that cut data over-fetching and improved screen load times.",
    ],
  },
];

const projects = [
  {
    index: "001",
    title: "InkDex",
    kicker: "AI Document Intelligence & RAG",
    description:
      "A production-ready RAG platform — upload documents, then query them instantly through semantic search. PDFs are chunked by background workers, embedded with Sentence Transformers, and retrieved via pgvector with HNSW indexing and top-K thresholding.",
    tech: ["FastAPI", "PostgreSQL", "pgvector", "Redis · RQ", "Gemini"],
    href: "https://github.com/jubinphilip/InkDex-server",
    featured: true,
  },
  {
    index: "002",
    title: "Event Management Platform",
    kicker: "Full-Stack Event Booking",
    description:
      "Event ticketing built on modular NestJS microservices behind GraphQL, with Firebase Auth, role-based permissions, Drizzle ORM with versioned schema migrations, and server-side-rendered Next.js views.",
    tech: ["Next.js", "NestJS", "GraphQL", "PostgreSQL", "Drizzle ORM"],
  },
  {
    index: "003",
    title: "Car Rental Platform",
    kicker: "Scalable Booking System",
    description:
      "End-to-end car booking with OTP auth, Razorpay payments, MinIO object storage cutting media load times by 35%, and Prisma transactions locking concurrent bookings.",
    tech: ["Next.js", "Express", "Prisma", "MinIO", "Razorpay"],
  },
];

const education = [
  { period: "2022 — 2024", degree: "Master of Computer Applications", school: "Nirmala College, Muvattupuzha" },
  { period: "2019 — 2022", degree: "Bachelor of Computer Applications", school: "Don Bosco Arts & Science College, Kannur" },
];

const certifications = [
  "The Complete JavaScript Course — Udemy",
  "Python for Data Science — NPTEL",
  "MERN Stack Internship — Camerin Folks",
];

const MonoLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{children}</p>
);

export default function Portfolio() {
  return (
    <div className="bg-paper text-ink">
      {/* top bar */}
      <header className="max-w-6xl mx-auto px-6 pt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-5">
        <a href="#" className="text-xl italic font-medium tracking-tight">
          Jubin&nbsp;Philip<span className="text-accent">.</span>
        </a>
        <nav className="order-last w-full flex flex-wrap gap-x-5 gap-y-2 sm:order-none sm:w-auto sm:gap-7 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ink-soft">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#education" className="hover:text-accent transition-colors">Education</a>
          <Link href="/travel" className="hover:text-accent transition-colors">Travel</Link>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <a
          href="/jubin_philip_cv.pdf"
          download
          className="font-mono text-[11px] uppercase tracking-[0.2em] border border-line-strong px-4 py-2 rounded-full hover:bg-ink hover:text-paper transition-colors"
        >
          Résumé
        </a>
      </header>

      {/* hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1.5fr_1fr] gap-14 items-center">
        <div>
          <MonoLabel>Backend & AI Engineer — Kochi, India</MonoLabel>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] tracking-tight font-light">
            I build systems that stay{" "}
            <em className="font-medium text-accent">boring</em>{" "}
            under real traffic.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Scalable backend architectures, document-parsing pipelines, and AI-enabled RAG
            workflows — with care for the unglamorous details: queues that drain without
            stalling, queries tuned to the millisecond, deployments nobody has to watch.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[12px] uppercase tracking-[0.15em]">
            <a
              href={`mailto:${info.email}`}
              className="bg-ink text-paper px-6 py-3 rounded-full hover:bg-accent transition-colors"
            >
              Get in touch ↗
            </a>
            <a href={info.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-line-strong hover:text-accent">
              GitHub
            </a>
            <a href={info.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-line-strong hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>

        {/* portrait in a round frame */}
        <div className="justify-self-center md:justify-self-end relative w-64 h-64 md:w-80 md:h-80">
          <svg viewBox="0 0 100 100" className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-accent" aria-hidden="true">
            <circle className="ring-spin" cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
          </svg>
          <div className="absolute -inset-4 rounded-full border border-line" aria-hidden="true" />
          <Image
            src="/me.jpeg"
            alt="Portrait of Jubin Philip"
            width={640}
            height={640}
            preload
            className="w-full h-full rounded-full object-cover object-top border-4 border-paper-raise shadow-xl"
          />
          <span className="absolute bottom-3 -right-2 bg-accent text-paper font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full rotate-[-6deg]">
            Hello!
          </span>
        </div>
      </section>

      {/* skills marquee */}
      <div className="border-y border-line-strong py-4 overflow-hidden" aria-label="Skills">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {marqueeSkills.map((s) => (
                <span key={s} className="flex items-center font-mono text-[12px] uppercase tracking-[0.25em] text-ink-soft">
                  <span className="px-6">{s}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* experience */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between mb-14">
          <MonoLabel>Experience</MonoLabel>
          <h2 className="text-3xl md:text-4xl font-light italic">Where I&apos;ve worked</h2>
        </div>
        <div className="space-y-16">
          {experience.map((exp) => (
            <article key={exp.index} className="grid md:grid-cols-[100px_1fr_2fr] gap-6 border-t border-line pt-10">
              <span className="text-5xl font-light text-ink-faint">{exp.index}</span>
              <div>
                <h3 className="text-2xl font-medium leading-snug">{exp.role}</h3>
                <p className="mt-2 text-ink-soft">
                  {exp.company} · {exp.place}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{exp.period}</p>
              </div>
              <ul className="space-y-3 text-ink-soft leading-relaxed self-center">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-accent mt-1 shrink-0">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-baseline justify-between mb-14">
          <MonoLabel>Selected Projects</MonoLabel>
          <h2 className="text-3xl md:text-4xl font-light italic">Things I&apos;ve built</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.index}
              className={`group relative rounded-3xl border border-line bg-paper-raise p-10 flex flex-col transition-transform hover:-translate-y-1 ${
                p.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12" : ""
              }`}
            >
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] text-ink-faint">{p.index}</span>
                <h3 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      {p.title} <span className="text-accent">↗</span>
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{p.kicker}</p>
              </div>
              <div className={p.featured ? "md:self-center mt-6 md:mt-0" : "mt-6"}>
                <p className="text-ink-soft leading-relaxed">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-accent-soft text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* travel: boarding-pass ticket to the journal */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Link
          href="/travel"
          className="group block rounded-3xl border border-line-strong bg-paper-raise overflow-hidden transition-transform hover:-translate-y-1"
        >
          <div className="grid sm:grid-cols-[1fr_auto]">
            <div className="p-8 md:p-10">
              <MonoLabel>Off the Clock — Travel Journal</MonoLabel>
              <p className="mt-4 text-3xl md:text-5xl font-light tracking-tight leading-tight">
                Sixteen hours, seven friends, one{" "}
                <em className="font-medium text-accent">sudden</em> plan.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                <span>Ernakulam Jn</span>
                <span className="text-accent" aria-hidden="true">✦ ────── ✦</span>
                <span>Thivim, Goa</span>
                <span className="text-ink-faint">· Okha Express · 16 hrs</span>
              </div>
            </div>
            <div className="relative border-t sm:border-t-0 sm:border-l border-dashed border-line-strong p-8 md:p-10 flex flex-col items-center justify-center gap-4 text-center">
              <span aria-hidden="true" className="hidden sm:block absolute -top-3 -left-3 h-6 w-6 rounded-full bg-paper border border-line-strong" />
              <span aria-hidden="true" className="hidden sm:block absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-paper border border-line-strong" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">Now boarding</span>
              <span className="font-mono text-[12px] uppercase tracking-[0.15em] bg-ink text-paper px-6 py-3 rounded-full group-hover:bg-accent transition-colors whitespace-nowrap">
                Goan Diaries ↗
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">Fare · one weekend</span>
            </div>
          </div>
        </Link>
      </section>

      {/* education & certifications */}
      <section id="education" className="border-t border-line-strong">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <MonoLabel>Education</MonoLabel>
            <div className="mt-8 space-y-8">
              {education.map((e) => (
                <div key={e.degree} className="border-l-2 border-accent pl-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">{e.period}</p>
                  <h3 className="mt-2 text-xl font-medium">{e.degree}</h3>
                  <p className="mt-1 text-ink-soft">
                    {e.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <MonoLabel>Certifications</MonoLabel>
            <ul className="mt-8 space-y-5">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-ink-soft">
                  <span className="text-accent">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* footer / contact */}
      <footer id="contact" className="border-t border-line-strong bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <MonoLabel>Contact</MonoLabel>
          <a
            href={`mailto:${info.email}`}
            className="block mt-6 text-4xl md:text-7xl font-light tracking-tight hover:text-accent transition-colors"
          >
            Let&apos;s build something <em>reliable</em>.
          </a>
          <ContactForm />
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            <div className="flex flex-wrap gap-6">
              <a href={`mailto:${info.email}`} className="hover:text-paper transition-colors">{info.email}</a>
              <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="hover:text-paper transition-colors">{info.phone}</a>
            </div>
            <div className="flex gap-6">
              <a href={info.github} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">GitHub</a>
              <a href={info.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">LinkedIn</a>
              <a href={info.website} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">Website</a>
            </div>
          </div>
          <p className="mt-10 font-mono text-[11px] tracking-[0.2em] text-ink-faint">© {new Date().getFullYear()} JUBIN PHILIP · KOCHI, INDIA</p>
        </div>
      </footer>
    </div>
  );
}
