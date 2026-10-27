import { useEffect, useRef, useState } from 'react';

export default function Section({ children, className = '', eyebrow, id, title }) {
  const headingRef = useRef(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setLineVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div ref={headingRef} className="mb-10 flex flex-col gap-2 sm:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300/80">
            {eyebrow}
          </p>
          <div className="flex items-center gap-4">
            <h2
              id={`${id}-heading`}
              className="shrink-0 font-mono text-2xl font-semibold text-slate-100 sm:text-3xl"
            >
              <span className="mr-2 text-violet-400" aria-hidden="true">#</span>
              {title}
            </h2>
            <span
              aria-hidden="true"
              className={`h-px flex-1 origin-left bg-gradient-to-r from-violet-500/60 to-transparent transition-transform duration-700 ease-out ${
                lineVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
