import {
  FaBriefcase,
  FaBullseye,
  FaDownload,
  FaGraduationCap,
} from 'react-icons/fa';
import photo from '../assets/myphoto.webp';
import { achievements, facts, profile, RESUME_URL } from '../data/resume';
import Section from './Section';

const FACT_ICONS = {
  briefcase: FaBriefcase,
  graduation: FaGraduationCap,
  target: FaBullseye,
};

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="About">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
            Engineer by trade, builder by habit.
          </h3>

          <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
            I&apos;m a software engineer based in {profile.location}, currently
            working as a Software Analyst at Goldman Sachs. My work sits at the
            intersection of backend engineering, database access management, and
            infrastructure modernization.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Day to day, I automate access-control workflows across DB2, Sybase,
            and Oracle, build Java and Spring Boot services, and help move
            enterprise workloads onto Kubernetes and AWS. I&apos;m especially
            interested in distributed systems, scalable architecture, and AI
            applications built with RAG, tool calling, and agentic workflows.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Outside of work, I&apos;ve solved 600+ data-structures and algorithms
            problems, and I was the Management Head and a technical team member
            at the Technobyte Society, NIT Kurukshetra.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="font-code text-xl font-semibold text-violet-300">
                  {achievement.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={RESUME_URL}
            download="Arunav_Gawri_Resume.pdf"
            className="button-ghost mt-8"
          >
            Read my resume <FaDownload aria-hidden="true" />
          </a>
        </div>

        <div className="min-w-0 space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-ink-deep">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-dot-grid opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/15 blur-2xl"
            />
            <img
              src={photo}
              alt="Arunav Gawri standing with a backpack"
              width="600"
              height="1110"
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-[320px] w-full max-w-full object-contain object-bottom sm:h-[380px]"
            />
          </div>

          <dl className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            {facts.map((fact) => {
              const Icon = FACT_ICONS[fact.icon] ?? FaBriefcase;

              return (
                <div key={fact.label} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm text-slate-200">{fact.value}</dd>
                    <dd className="mt-0.5 text-xs text-slate-500">{fact.meta}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
}
