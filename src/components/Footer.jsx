import { FaDownload } from 'react-icons/fa';
import logo from '../assets/logo.webp';
import { profile, RESUME_URL } from '../data/resume';
import SocialLinks from './SocialLinks';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-deep/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="" width="36" height="36" className="h-9 w-9" />
            <span className="font-code text-sm font-medium text-slate-200">
              arunav<span className="text-violet-400">.dev</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            {profile.role} at Goldman Sachs. Backend engineering, distributed
            systems, and AI.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-slate-400 transition hover:text-violet-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Elsewhere
          </h2>
          <SocialLinks className="mt-4" />
          <a
            href={RESUME_URL}
            download="Arunav_Gawri_Resume.pdf"
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition hover:text-violet-300"
          >
            <FaDownload aria-hidden="true" /> Download resume
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <p className="text-center text-xs text-slate-500">
          © {year} {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
