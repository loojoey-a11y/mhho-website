import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const a = siteConfig.contact.address;
  return (
    <footer className="mt-24 border-t border-border bg-sage-900 text-sage-100">
      <div className="container-wide py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-1.5">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-serif text-xl">{siteConfig.fullName}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sage-200/85">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={siteConfig.social.facebook} label="Facebook">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.4c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12Z" />
            </SocialLink>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-white">Visit</h3>
          <address className="not-italic mt-3 text-sm leading-relaxed text-sage-200/85">
            {a.line1}<br />
            {a.line2}<br />
            {a.postcode} {a.city}<br />
            {a.country}
          </address>
          <div className="mt-4 text-sm text-sage-200/85">
            <p className="text-white/85 font-medium">Hours</p>
            <ul className="mt-1 space-y-1">
              {siteConfig.contact.hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}, {h.time}</span>
                  {h.note && (
                    <span className="block text-xs text-sage-200/65">{h.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sage-200/85 hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            {siteConfig.contact.phone && siteConfig.contact.phoneIntl && (
              <li>
                <a href={`tel:${siteConfig.contact.phoneIntl}`} className="text-sage-200/85 hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
            )}
          </ul>
          <h3 className="font-serif text-lg text-white mt-6">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-sage-200/85 hover:text-white">About MHHO</Link></li>
            <li><Link href="/services" className="text-sage-200/85 hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="text-sage-200/85 hover:text-white">Get in touch</Link></li>
            <li><Link href="/privacy" className="text-sage-200/85 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 text-xs text-sage-200/70">
          <p className="leading-relaxed">
            <strong className="text-white/85 font-medium">Disclaimer.</strong>{" "}
            Information on this site is general in nature and is not a substitute for professional medical advice, diagnosis, or treatment. The traditional and complementary practices described here are intended to support, not replace, care provided by qualified medical professionals. Always consult a doctor regarding any medical condition or before making changes to existing treatment.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row justify-between gap-3">
            <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
            <p>Founded {siteConfig.founded} · {siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
