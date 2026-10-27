import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/resume';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Works() {
  return (
    <Section id="projects" eyebrow="03 · Selected work" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/Drstone08"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition hover:text-violet-300"
        >
          <FaGithub aria-hidden="true" /> More on GitHub
        </a>
      </div>
    </Section>
  );
}
