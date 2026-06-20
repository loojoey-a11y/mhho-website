import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionEyebrow } from "@/components/section";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Malaysian Herbs and Holistic Organisation collects, uses, and protects personal data on mhhocenter.com, in accordance with the Personal Data Protection Act 2010.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "29 April 2026";

export default function PrivacyPage() {
  const a = siteConfig.contact.address;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Privacy Policy", url: `${siteConfig.url}/privacy` },
        ]}
      />

      <section className="container-narrow pt-16 sm:pt-24 pb-8">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-sage-900 text-balance leading-[1.1]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-foreground/60">Last updated: {lastUpdated}</p>
      </section>

      <section className="container-narrow pb-24 prose-content">
        <p className="text-foreground/80 leading-relaxed">
          The {siteConfig.fullName} (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting personal data you share through this website (mhhocenter.com). This notice is provided in accordance with the Personal Data Protection Act 2010 (Malaysia).
        </p>

        <Heading>1. What we collect</Heading>
        <p>When you use the contact form on this site, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number (optional)</li>
          <li>Your area of interest (e.g. a particular modality)</li>
          <li>The message you write to us</li>
        </ul>
        <p>
          Providing this information is voluntary. If you prefer not to use the form, you can email or telephone us directly using the details at the bottom of this page.
        </p>
        <p>
          When you visit any page, our hosting provider may also process limited technical information (such as your IP address and browser type) for the basic operation and security of the site. We do not currently use website analytics or advertising trackers.
        </p>

        <Heading>2. Why we collect it</Heading>
        <p>We use the information solely to:</p>
        <ul>
          <li>Reply to your enquiry;</li>
          <li>Schedule, follow up on, or coordinate consultations and partnerships;</li>
          <li>Maintain a record of correspondence with you.</li>
        </ul>
        <p>We do not use your data for marketing and we do not sell or rent it to anyone.</p>

        <Heading>3. Who handles your data</Heading>
        <p>Personal data is handled by MHHO administrators. To deliver the services described above, your data may be processed by the following service providers, acting on our behalf:</p>
        <ul>
          <li><strong>Hostinger</strong> &mdash; website hosting infrastructure;</li>
          <li><strong>Resend</strong> &mdash; transactional email delivery for contact-form messages (when configured);</li>
          <li><strong>Google</strong> &mdash; only if you choose to activate the Google Translate widget at the top of the page; the widget is loaded from Google&rsquo;s servers and may set its own cookies.</li>
        </ul>
        <p>Aside from these processors, we do not disclose your personal data to third parties except where required by law.</p>

        <Heading>4. Cookies and similar technologies</Heading>
        <p>
          The site does not set its own marketing or analytics cookies. If you use the Google Translate widget, Google may set a <code>googtrans</code> cookie to remember your language preference. You can clear or block this cookie in your browser settings without affecting the rest of the site.
        </p>

        <Heading>5. How long we keep it</Heading>
        <p>
          Enquiry messages are retained only for as long as we need them to respond to you and follow up &mdash; typically up to 24 months &mdash; after which they are deleted, unless ongoing engagement requires longer retention.
        </p>

        <Heading>6. Your rights</Heading>
        <p>Under the Personal Data Protection Act 2010, you have the right to:</p>
        <ul>
          <li>Request access to the personal data we hold about you;</li>
          <li>Request correction of inaccurate or incomplete data;</li>
          <li>Withdraw your consent for further processing;</li>
          <li>Limit the processing of your personal data; and</li>
          <li>Lodge a complaint with the Personal Data Protection Department of Malaysia (JPDP).</li>
        </ul>
        <p>
          To exercise any of these rights, or to ask any question about this notice, contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-sage-700 hover:text-sage-900 underline">{siteConfig.contact.email}</a>.
        </p>

        <Heading>7. Security</Heading>
        <p>
          We take reasonable steps to protect personal data against unauthorised access, loss, or misuse. However, no online transmission can be guaranteed completely secure; please consider this when sending personal information through the internet.
        </p>

        <Heading>8. Children</Heading>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect personal data from children. If you believe a child has submitted personal data through the form, please contact us so we can remove it.
        </p>

        <Heading>9. Changes to this notice</Heading>
        <p>
          We may update this notice from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date at the top of this page.
        </p>

        <Heading>10. Contact</Heading>
        <p>For privacy enquiries, please contact:</p>
        <address className="not-italic">
          <strong>{siteConfig.fullName}</strong>
          <br />
          {a.line1}, {a.line2}
          <br />
          {a.postcode} {a.city}, {a.region}, {a.country}
          <br />
          <a href={`mailto:${siteConfig.contact.email}`} className="text-sage-700 hover:text-sage-900 underline">{siteConfig.contact.email}</a>
        </address>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-sage-700 hover:text-sage-900">
            <svg className="mr-1.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 font-serif text-2xl text-sage-900">{children}</h2>
  );
}
