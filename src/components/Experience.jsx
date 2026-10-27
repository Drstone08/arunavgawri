import { experience } from '../data/resume';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Experience">
      <ol className="relative ml-2 border-l border-white/10 pl-7 sm:ml-4 sm:pl-9">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[35px] top-2 h-3 w-3 rounded-full border-2 border-ink bg-violet-400 sm:-left-[43px]"
            />

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/30 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-violet-300">
                    {job.company}
                    {job.location && (
                      <>
                        <span className="mx-2 text-slate-500">·</span>
                        <span className="text-slate-400">{job.location}</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="tag">{job.period}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {job.type}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-slate-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
