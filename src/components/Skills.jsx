import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaReact,
  FaRobot,
  FaServer,
  FaVial,
} from 'react-icons/fa';
import { skillGroups } from '../data/resume';
import Section from './Section';

const GROUP_ICONS = {
  cloud: FaCloud,
  code: FaCode,
  database: FaDatabase,
  network: FaNetworkWired,
  react: FaReact,
  robot: FaRobot,
  server: FaServer,
  test: FaVial,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Toolkit" title="Skills">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-4">
        {skillGroups.map((group) => {
          const Icon = GROUP_ICONS[group.icon] ?? FaCode;

          return (
            <section
              key={group.id}
              aria-labelledby={`skill-${group.id}`}
              className="mb-4 break-inside-avoid rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/30 hover:bg-white/[0.04]"
            >
              <h3
                id={`skill-${group.id}`}
                className="flex items-center gap-2 text-sm font-semibold text-slate-100"
              >
                <Icon aria-hidden="true" className="text-violet-300" />
                {group.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
