import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ index, project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]">
      <div
        className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-30" />
        <span className="absolute left-5 top-5 font-mono text-xs text-slate-400" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
          <h3 className="font-code text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-slate-400">{project.tagline}</p>

        <ul className="mt-4 space-y-2">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <li key={technology} className="tag">
              {technology}
            </li>
          ))}
        </ul>

        {(project.context || project.repo || project.live) && (
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
            {project.context && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {project.context}
              </span>
            )}
            <div className="flex flex-wrap gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <FaGithub aria-hidden="true" /> Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
