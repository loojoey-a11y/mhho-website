import Image from "next/image";
import Link from "next/link";
import { siteConfig, services, milestones, specialNeedsCare } from "@/lib/site-config";
import { SectionHeading, SectionEyebrow } from "@/components/section";
import { ServiceIcon } from "@/components/service-icon";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <MissionSplit />
      <ServicesPreview />
      <SpecialNeedsTeaser />
      <JourneyBand />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-background to-background" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-saffron-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-sage-200/50 blur-3xl"
      />
      <div className="container-wide pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <SectionEyebrow>Since {siteConfig.founded} · Kuala Lumpur</SectionEyebrow>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-sage-900 text-balance leading-[1.05]">
              Where East meets West in <em className="not-italic text-clay-500">integrative</em> medicine.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75 max-w-xl text-pretty">
              The {siteConfig.fullName} bridges Malaysia&rsquo;s rich heritage of traditional practice with modern clinical care — offered as complements alongside conventional medicine, never as a replacement for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-6 py-3 text-sm font-medium text-white shadow-sm"
              >
                Get in touch
                <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-sage-700/30 hover:border-sage-700 hover:bg-sage-50 transition-colors px-6 py-3 text-sm font-medium text-sage-900"
              >
                Explore our modalities
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <Stat value="20+" label="Years of advocacy" />
              <Stat value="7" label="Healing modalities" />
              <Stat value="3" label="Traditions, one practice" />
            </dl>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-sage-900">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-foreground/60">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl ring-1 ring-sage-900/10">
        <Image
          src="/images/mhho-team-photo.jpg"
          alt="The MHHO team gathered at Counter 1 — Rawatan Tradisional, Sakit, Anak-Kanak"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function PartnerStrip() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="container-wide py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <PartnerItem title="Founded 2006" subtitle="Two decades of advocacy" />
        <PartnerItem title="Seven modalities" subtitle="Under one practice" />
        <PartnerItem title="Registered NGO" subtitle="Non-profit and patient-centred" />
        <PartnerItem title="Kuala Lumpur" subtitle="Based in Jinjang Utara" />
      </div>
    </section>
  );
}

function PartnerItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-8 w-1 rounded-full bg-saffron-500" />
      <div>
        <p className="font-serif text-base text-sage-900">{title}</p>
        <p className="text-xs text-foreground/65 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function MissionSplit() {
  return (
    <section className="container-wide py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <SectionHeading
            eyebrow="Our purpose"
            title={<>Traditional medicine, taken <em className="not-italic text-clay-500">seriously</em>.</>}
            description="MHHO exists to make Malaysia an epicentre for traditional medicine — not as folk practice, but as rigorous, complementary clinical care that earns its place inside the public health system."
          />
        </div>
        <div className="space-y-6">
          <ValueBlock title="Vision" body="Establish Malaysia as a hub for traditional medicine and bring the country's first integrative traditional hospital into being." />
          <ValueBlock title="Mission" body="Advocate for traditional treatments in government clinics and hospitals, presenting viable alternatives and complements to Western medicine." />
          <ValueBlock title="Method" body="Integrate Chinese, Malay, Indian and other traditional modalities into care pathways alongside conventional medicine — guided by efficacy and safety." />
        </div>
      </div>
    </section>
  );
}

function ValueBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="font-serif text-xl text-sage-900">{title}</h3>
      <p className="mt-2 text-foreground/75 leading-relaxed">{body}</p>
    </div>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-sage-50/70 border-y border-border">
      <div className="container-wide py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Modalities"
            title="Seven traditions under one roof."
            description="Each modality has its own diagnostic logic and clinical strengths. We help patients find the right combination."
          />
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-sage-700 hover:text-sage-900">
            View all services
            <svg className="ml-1.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group block h-full rounded-2xl border border-border bg-white p-6 hover:border-sage-300 hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-sage-100 text-sage-700 group-hover:bg-sage-700 group-hover:text-white transition-colors">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-sage-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.short}</p>
                <span className="mt-4 inline-flex items-center text-xs font-medium tracking-wider uppercase text-sage-700 group-hover:text-sage-900">
                  Learn more
                  <svg className="ml-1 group-hover:translate-x-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SpecialNeedsTeaser() {
  return (
    <section className="container-wide py-20 sm:py-24">
      <div className="rounded-3xl bg-clay-100 border border-clay-300/40 overflow-hidden grid lg:grid-cols-12">
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[20rem]">
          <Image
            src="/images/special-needs-care.jpg"
            alt="MHHO therapist supporting a young child during a sensory-friendly session"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-clay-600">
            Beyond the modalities
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-sage-900 text-balance">
            {specialNeedsCare.title}
          </h2>
          <p className="mt-4 text-foreground/75 leading-relaxed text-pretty max-w-xl">
            {specialNeedsCare.short} Sessions are unhurried and individually paced — drawing on the modalities best suited to each person, with support extended to families and carers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/services#special-needs"
              className="inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-5 py-2.5 text-sm font-medium text-white"
            >
              Learn more
              <svg className="ml-1.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-sage-700/30 hover:border-sage-700 hover:bg-white transition-colors px-5 py-2.5 text-sm font-medium text-sage-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyBand() {
  return (
    <section className="container-wide py-20 sm:py-28">
      <SectionHeading eyebrow="Our journey" title="Two decades of patient, principled advocacy." align="center" />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {milestones.map((m) => (
          <li key={m.year} className="rounded-2xl border border-border bg-white p-6">
            <p className="font-serif text-3xl text-saffron-600">{m.year}</p>
            <h3 className="mt-2 font-serif text-xl text-sage-900">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">{m.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="container-wide py-20 sm:py-28">
      <div className="rounded-3xl bg-gradient-to-br from-clay-500 to-clay-600 text-white p-10 sm:p-14 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-300">Begin</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-balance">
            Ready for a more complete approach to your health?
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed max-w-md">
            Get in touch and we&rsquo;ll point you to the right combination of traditional and conventional care for your situation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-clay-600 hover:bg-saffron-300 hover:text-sage-900 transition-colors px-6 py-3 text-sm font-medium">
            Get in touch
          </Link>
          <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white px-6 py-3 text-sm font-medium">
            Email {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
