import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SectionEyebrow } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Reach the Malaysian Herbs and Holistic Organisation in Jinjang Utara, Kuala Lumpur. Ask about modalities, send a general enquiry, or partner with us on integrative care.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const a = siteConfig.contact.address;
  const mapQuery = encodeURIComponent(
    `${a.line1}, ${a.line2}, ${a.postcode} ${a.city}, ${a.country}`
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />

      <section className="container-wide pt-16 sm:pt-24 pb-12">
        <div className="max-w-3xl">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-sage-900 text-balance leading-[1.1]">
            Tell us how we can help.
          </h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-pretty">
            Ask about a specific modality, share a general enquiry, or get in touch about practitioner partnerships and research collaborations. We respond within two working days.
          </p>
        </div>
      </section>

      <section className="container-wide pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl text-sage-900">Send us a message</h2>
              <p className="mt-2 text-sm text-foreground/65">
                Required fields are marked with <span className="text-clay-500">*</span>.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <InfoCard title="Visit us">
              <address className="not-italic text-foreground/80 leading-relaxed">
                {a.line1}<br />
                {a.line2}<br />
                {a.postcode} {a.city}<br />
                {a.region}, {a.country}
              </address>
              <a
                href={`https://www.google.com/maps?q=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-sage-700 hover:text-sage-900"
              >
                Open in Google Maps
                <svg className="ml-1.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </InfoCard>

            <InfoCard title="Hours">
              <ul className="space-y-2 text-foreground/80">
                {siteConfig.contact.hours.map((h) => (
                  <li key={h.day}>
                    <span className="font-medium">{h.day}</span>, {h.time}
                    {h.note && (
                      <span className="block text-xs text-foreground/55 mt-0.5">{h.note}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-foreground/60">
                For appointments outside these hours, please call or email — we will do our best to accommodate.
              </p>
            </InfoCard>

            <InfoCard title="Direct contact">
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground/85 hover:text-sage-700 font-medium">
                    {siteConfig.contact.email}
                  </a>
                </li>
                {siteConfig.contact.phone && siteConfig.contact.phoneIntl && (
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
                    </span>
                    <a href={`tel:${siteConfig.contact.phoneIntl}`} className="text-foreground/85 hover:text-sage-700 font-medium">
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                )}
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.4c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12Z"/></svg>
                  </span>
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-foreground/85 hover:text-sage-700 font-medium">
                    Message us on Facebook
                  </a>
                </li>
              </ul>
            </InfoCard>
          </aside>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="rounded-3xl overflow-hidden border border-border shadow-sm aspect-[16/9] bg-muted">
          <iframe
            title={`Map of ${siteConfig.fullName}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h3 className="font-serif text-lg text-sage-900">{title}</h3>
      <div className="mt-3 text-sm">{children}</div>
    </div>
  );
}
