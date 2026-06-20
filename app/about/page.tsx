import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, milestones, goals } from "@/lib/site-config";
import { SectionHeading, SectionEyebrow } from "@/components/section";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About — Bridging Tradition and Modern Healthcare",
  description:
    "MHHO was founded in 2006 by Kevin Mano to advance traditional medicine in Malaysia. Read our story, mission, vision, and the goals guiding our work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />

      <section className="container-wide pt-16 sm:pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 max-w-3xl">
            <SectionEyebrow>About MHHO</SectionEyebrow>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-sage-900 text-balance leading-[1.1]">
              Twenty years of advancing traditional medicine in Malaysia.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-pretty">
              The {siteConfig.fullName} (MHHO) was founded in {siteConfig.founded} by {siteConfig.founder} to do something the public health system had largely overlooked: take Malaysia&rsquo;s rich, layered traditions of healing seriously enough to put them inside modern care pathways.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-sage-900/10 shadow-lg">
              <Image
                src="/images/hero-mhho-team.png"
                alt="MHHO members gathered at the Persatuan Holistik dan Herba Malaysia centre"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-sage-700 text-white p-8 sm:p-10">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-300">Vision</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-balance">
              Make Malaysia an epicentre for traditional medicine — and build the country&rsquo;s first integrative traditional hospital.
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              An institution where Chinese, Malay, Indian, and other traditional modalities operate alongside conventional medicine, under the same roof, with shared records, shared standards, and shared accountability to patients.
            </p>
          </div>
          <div className="rounded-3xl bg-clay-500 text-white p-8 sm:p-10">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-300">Mission</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-balance">
              Advocate for traditional treatments inside government clinics and hospitals, so Malaysians have real alternatives.
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              We work with regulators, clinicians, and researchers to demonstrate that T&CM is safe, effective, and ready to take its place as a complement — and sometimes an alternative — to Western medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow="Our journey"
          title="Milestones that mattered."
          description="Slow, steady, deliberate. Recognition by the public health system was always the goal."
        />
        <ol className="mt-12 relative border-l border-border pl-8 space-y-10">
          {milestones.map((m, i) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[2.55rem] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage-700 text-white text-xs font-medium">
                {i + 1}
              </span>
              <p className="font-serif text-2xl text-saffron-600">{m.year}</p>
              <h3 className="mt-1 font-serif text-xl text-sage-900">{m.title}</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed max-w-2xl">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sage-50/70 border-y border-border">
        <div className="container-wide py-20 sm:py-24">
          <SectionHeading
            eyebrow="Our goals"
            title="Three commitments that guide everything."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {goals.map((g) => (
              <li key={g.n} className="rounded-2xl bg-white border border-border p-6">
                <p className="font-serif text-2xl text-saffron-600">{g.n}</p>
                <h3 className="mt-1 font-serif text-xl text-sage-900">{g.title}</h3>
                <p className="mt-2 text-foreground/75 leading-relaxed text-sm">{g.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-wide py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Looking forward"
              title="Expanding research, deepening partnerships."
              description="Two priorities are shaping the next phase of our work."
            />
            <div className="mt-8 relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-sage-900/10 shadow-lg">
              <Image
                src="/images/treatment-close.jpg"
                alt="MHHO practitioners delivering reflexology and sound vibration therapy in the treatment room"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-5">
            <FuturePlan
              title="Expanding research on herbs and traditional medicine"
              body="Building the evidence base — clinical, ethnobotanical, and pharmacological — that the next generation of integrative practitioners will need to defend and refine these traditions."
            />
            <FuturePlan
              title="Strengthening partnerships with other NGOs"
              body="No single organisation can advocate this transformation alone. We are deepening collaborations with allied groups across the region."
            />
          </div>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="rounded-3xl bg-sage-900 text-white p-10 sm:p-14 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-balance">
            Want to get involved or learn more?
          </h2>
          <p className="mt-4 text-sage-200/85 max-w-xl mx-auto">
            Whether you&rsquo;re a patient, practitioner, researcher, or partner organisation — we&rsquo;d like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-saffron-500 hover:bg-saffron-600 transition-colors px-6 py-3 text-sm font-medium text-sage-900"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

function FuturePlan({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h3 className="font-serif text-lg text-sage-900">{title}</h3>
      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{body}</p>
    </div>
  );
}
