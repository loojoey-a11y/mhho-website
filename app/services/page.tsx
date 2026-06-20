import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, services, specialNeedsCare } from "@/lib/site-config";
import { SectionHeading, SectionEyebrow } from "@/components/section";
import { ServiceIcon } from "@/components/service-icon";
import { ServicesJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Services — Integrative Healing Modalities",
  description:
    "Traditional Chinese, Malay, and Indian medicine, Medical Qi Gong, Osteopathy, Sound Vibration Therapy, and Kinesiology — plus therapy for adults and children with special needs, delivered in Kuala Lumpur.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services` },
        ]}
      />

      <section className="container-wide pt-16 sm:pt-24 pb-12">
        <div className="max-w-3xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-sage-900 text-balance leading-[1.1]">
            Seven traditions, integrated around the patient.
          </h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-pretty">
            Each modality on its own has clinical strengths and limits. The MHHO approach is to combine them — and combine them with conventional medicine — so the care plan fits the person, not the protocol.
          </p>
        </div>

        <nav aria-label="Service quick links" className="mt-10 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground/75 hover:border-sage-300 hover:text-sage-900 transition-colors"
            >
              <ServiceIcon name={s.icon} className="h-3.5 w-3.5" />
              {s.name}
            </a>
          ))}
          <a
            href="#special-needs"
            className="inline-flex items-center gap-1.5 rounded-full border border-saffron-500/40 bg-saffron-500/10 px-3.5 py-1.5 text-xs font-medium text-sage-900 hover:border-saffron-500 hover:bg-saffron-500/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            Special Needs Care
          </a>
        </nav>
      </section>

      <section className="container-wide py-12">
        <ul className="space-y-10">
          {services.map((s, i) => (
            <li
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid lg:grid-cols-12 gap-8 rounded-3xl border border-border bg-white p-8 sm:p-10"
            >
              <div className="lg:col-span-4">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-sage-100 text-sage-700">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-medium tracking-[0.18em] uppercase text-saffron-600">
                  Modality {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-sage-900 text-balance">
                  {s.name}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif text-lg text-sage-900 text-balance">{s.short}</p>
                <p className="mt-4 text-foreground/75 leading-relaxed text-pretty">{s.long}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Enquire about {s.name.split(" ")[0]}
                  </Link>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center rounded-full border border-sage-700/30 hover:border-sage-700 hover:bg-sage-50 transition-colors px-5 py-2.5 text-sm font-medium text-sage-900"
                  >
                    Email to discuss
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="special-needs" className="container-wide py-12 scroll-mt-24">
        <div className="rounded-3xl border border-border bg-white overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-5 p-3 lg:p-4 grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/special-needs-care.jpg"
                alt="MHHO therapist supporting a child during a sensory-friendly session"
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/special-needs-bodywork.jpg"
                alt="MHHO practitioner delivering gentle bodywork to a child"
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-600">
              Special Needs Care
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-sage-900 text-balance">
              {specialNeedsCare.title}
            </h2>
            <p className="mt-4 font-serif text-lg text-sage-900 text-balance">
              {specialNeedsCare.short}
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed text-pretty">
              {specialNeedsCare.long}
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-foreground/80">
              {specialNeedsCare.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0 text-sage-700" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-5 py-2.5 text-sm font-medium text-white"
              >
                Enquire about special needs care
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center rounded-full border border-sage-700/30 hover:border-sage-700 hover:bg-sage-50 transition-colors px-5 py-2.5 text-sm font-medium text-sage-900"
              >
                Email to discuss
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 sm:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-sage-700 to-sage-900 text-white p-10 sm:p-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-300">Not sure where to start?</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-balance">
                A practitioner can recommend the right combination.
              </h2>
              <p className="mt-4 text-sage-200/85 max-w-md leading-relaxed">
                Tell us briefly what you&rsquo;d like to address and we&rsquo;ll match you with a starting modality — often two or three together work better than one alone.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-saffron-500 hover:bg-saffron-600 transition-colors px-6 py-3 text-sm font-medium text-sage-900"
              >
                Request a recommendation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
