import { useEffect, useState } from 'react';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.webp';
import { RESUME_URL } from '../data/resume';
import useActiveSection from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
];

const SECTION_IDS = ['home', ...NAV_ITEMS.map((item) => item.id)];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Arunav Gawri — back to top"
        >
          <img src={logo} alt="" width="40" height="40" className="h-10 w-10" />
          <span className="font-code text-sm font-medium text-slate-200 transition group-hover:text-white">
            arunav<span className="text-violet-400">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`font-mono text-sm transition ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-violet-300'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mr-1 ${
                        isActive ? 'text-violet-400' : 'text-violet-500/70'
                      }`}
                    >
                      #
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={RESUME_URL}
            download="Arunav_Gawri_Resume.pdf"
            className="button-primary px-4 py-2 text-xs"
          >
            Resume <FaDownload aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-violet-400/40 hover:text-white lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[73px] z-0 bg-ink/40 backdrop-blur-[2px] lg:hidden"
          />

          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-10 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/5 bg-ink px-5 pb-6 pt-3 shadow-2xl lg:hidden"
          >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-mono text-base text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <span className="mr-2 text-violet-400" aria-hidden="true">#</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_URL}
            download="Arunav_Gawri_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="button-primary mt-4 w-full justify-center"
          >
            Download resume <FaDownload aria-hidden="true" />
          </a>
          </div>
        </>
      )}
    </header>
  );
}
