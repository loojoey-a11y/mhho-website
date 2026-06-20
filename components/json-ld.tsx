import { siteConfig, services } from "@/lib/site-config";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const a = siteConfig.contact.address;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "LocalBusiness"],
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${a.line1}, ${a.line2}`,
      addressLocality: a.city,
      postalCode: a.postcode,
      addressRegion: a.region,
      addressCountry: "MY",
    },
    openingHoursSpecification: siteConfig.contact.hoursStructured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [siteConfig.social.facebook],
    medicalSpecialty: [
      "Alternative Medicine",
      "Traditional Chinese Medicine",
      "Ayurveda",
      "Holistic Medicine",
    ],
    areaServed: { "@type": "Country", name: "Malaysia" },
  };
  if (siteConfig.contact.phone) {
    data.telephone = siteConfig.contact.phone;
  }
  return <JsonLd data={data} />;
}

export function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalTherapy",
        name: s.name,
        description: s.short,
        url: `${siteConfig.url}/services#${s.slug}`,
      },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return <JsonLd data={data} />;
}
