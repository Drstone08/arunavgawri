import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import useReducedMotion from '../hooks/useReducedMotion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      }
      className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-deep/95 text-slate-200 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-300 sm:bottom-8 sm:right-8 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}
