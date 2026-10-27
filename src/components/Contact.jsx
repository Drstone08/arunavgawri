import {
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { profile, RESUME_URL } from '../data/resume';
import Section from './Section';
import SocialLinks from './SocialLinks';

const CONTACT_ROWS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: FaPhoneAlt,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    icon: FaMapMarkerAlt,
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05 · Get in touch" title="Contact">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-transparent p-6 sm:p-10">
          <p className="font-code text-sm text-violet-300">
            {'// Let’s build something'}
          </p>
          <h3 className="mt-3 max-w-lg text-2xl font-semibold text-white sm:text-3xl">
            Have a problem worth solving? I&apos;d love to hear about it.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            I&apos;m open to conversations about backend engineering, platform
            work, and AI applications. The fastest way to reach me is email.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="button-primary">
              Say hello <FaEnvelope aria-hidden="true" />
            </a>
            <a
              href={RESUME_URL}
              download="Arunav_Gawri_Resume.pdf"
              className="button-ghost"
            >
              Resume <FaDownload aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Contact details
          </h3>

          <ul className="mt-6 space-y-5">
            {CONTACT_ROWS.map((row) => {
              const Icon = row.icon;
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      {row.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-slate-200">
                      {row.value}
                    </span>
                  </span>
                  {row.href && (
                    <FaExternalLinkAlt
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-xs text-slate-600"
                    />
                  )}
                </>
              );

              return (
                <li key={row.label}>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="group flex items-center gap-4 transition hover:text-violet-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Elsewhere
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </Section>
  );
}
