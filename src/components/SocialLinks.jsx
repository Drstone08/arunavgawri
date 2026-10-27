import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socials } from '../data/resume';

const ICONS = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, icon, label }) => {
        const Icon = ICONS[icon];
        if (!Icon) return null;

        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-300"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
