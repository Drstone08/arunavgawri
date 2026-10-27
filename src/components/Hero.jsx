import { FaArrowRight, FaDownload } from 'react-icons/fa';
import photo from '../assets/myphoto2.webp';
import { profile, RESUME_URL } from '../data/resume';
import useTypewriter from '../hooks/useTypewriter';
import SocialLinks from './SocialLinks';

const ROLES = ['Backend Engineer', 'AI Engineer', 'Software Analyst'];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
        <div className="min-w-0 animate-fade-up">
          <p className="mb-5 flex items-center gap-3 font-mono text-sm text-violet-300">
            <span aria-hidden="true" className="h-px w-9 bg-violet-400" />
            Hello, I&apos;m
          </p>

          <h1
            id="hero-heading"
            className="font-sans text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Arunav <span className="text-violet-400">Gawri</span>
          </h1>

          <p
            aria-label={`Roles: ${ROLES.join(', ')}`}
            className="mt-4 flex min-h-[2.5rem] items-center font-code text-xl text-slate-300 sm:text-2xl"
          >
            <span aria-hidden="true" className="mr-2 text-violet-400">
              &lt;
            </span>
            <span>{role}</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-6 w-[2px] animate-blink bg-violet-300 align-middle"
            />
            <span aria-hidden="true" className="ml-2 text-violet-400">
              /&gt;
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View my work <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href={RESUME_URL}
              download="Arunav_Gawri_Resume.pdf"
              className="button-ghost"
            >
              Download resume <FaDownload aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Find me on
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-sm animate-fade-up [animation-delay:150ms]">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] border border-white/5"
          />
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-3">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-violet-500/20 via-slate-800/40 to-ink-deep">
              <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-20" />
              <img
                src={photo}
                alt="Portrait of Arunav Gawri"
                width="312"
                height="399"
                className="relative z-10 mx-auto w-[78%] object-contain pt-8 drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-6 flex w-[88%] items-center gap-3 rounded-xl border border-white/10 bg-ink/95 px-4 py-3 shadow-xl backdrop-blur">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <p className="font-mono text-xs text-slate-300">
              Currently @ Goldman Sachs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
