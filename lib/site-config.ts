export const siteConfig = {
  name: "MHHO",
  fullName: "Malaysian Herbs and Holistic Organisation",
  tagline: "Where East Meets West in Integrative Medicine",
  description:
    "MHHO advances traditional medicine and holistic health in Malaysia, bridging the country's rich heritage with modern healthcare through integrative treatments.",
  url: "https://www.mhhocenter.com",
  founded: 2006,
  founder: "Mr. Kevin Mano",
  contact: {
    email: "mhhocenter@gmail.com",
    phone: "+6012-345-6789" as string | null,
    phoneIntl: "+60123456789" as string | null,
    address: {
      line1: "3184-3188, Jalan Benteng Barat",
      line2: "Jinjang Utara",
      city: "Kuala Lumpur",
      postcode: "52000",
      region: "Wilayah Persekutuan Kuala Lumpur",
      country: "Malaysia",
    },
    hours: [
      { day: "Thursday", time: "8:00 AM – 12:00 PM" },
      { day: "Friday", time: "8:00 AM – 11:00 AM", note: "Sound Vibration Therapy only" },
    ] as { day: string; time: string; note?: string }[],
    hoursStructured: [
      { day: "Thursday", opens: "08:00", closes: "12:00" },
      { day: "Friday", opens: "08:00", closes: "11:00" },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/holistic.herbal.medicine",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const services = [
  {
    slug: "traditional-chinese-medicine",
    name: "Traditional Chinese Medicine",
    short: "Acupuncture, herbal formulas, cupping, and meridian-based assessment rooted in centuries of practice.",
    long:
      "Traditional Chinese Medicine (TCM) views the body as an interconnected system. Our practitioners draw on pulse and tongue assessment, acupuncture, moxibustion, cupping, and individually prepared herbal decoctions — a tradition grounded in centuries of clinical use, offered alongside conventional care.",
    icon: "leaf",
  },
  {
    slug: "traditional-malay-medicine",
    name: "Traditional Malay Medicine",
    short: "Indigenous Malaysian practice — urut, herbal preparations, and post-natal care passed down through generations.",
    long:
      "Traditional Malay Medicine draws on Malaysia's indigenous knowledge of plants, manual therapy, and post-partum care. Sessions include traditional urut (massage), bertangas (herbal steam), and jamu formulations prepared from local botanicals — preserving practices passed down through generations.",
    icon: "flower",
  },
  {
    slug: "traditional-indian-medicine",
    name: "Traditional Indian Medicine",
    short: "Ayurvedic principles, Siddha approaches, and dosha-based assessment for whole-person care.",
    long:
      "Traditional Indian Medicine encompasses Ayurveda and Siddha systems, which classify constitution by doshas and approach each person individually. We offer consultation, herbal preparations, panchakarma-style protocols, and lifestyle and dietary guidance grounded in classical texts.",
    icon: "lotus",
  },
  {
    slug: "medical-qi-gong",
    name: "Medical Qi Gong",
    short: "Movement, breath, and intention work practiced to cultivate vital energy and support general well-being.",
    long:
      "Medical Qi Gong combines slow movement, regulated breathing, and focused intention. Long practiced across Asia as a gentle, supportive discipline, it is accessible to elderly participants and those in convalescence and is undertaken without the strain of conventional exercise.",
    icon: "spiral",
  },
  {
    slug: "osteopathy",
    name: "Osteopathy",
    short: "Hands-on assessment and gentle articulation, commonly sought for back, neck, and post-injury support.",
    long:
      "Osteopathy is a manual therapy that views the body as a structurally integrated whole. Our osteopaths assess fascia, joints, and posture, using gentle articulation and soft-tissue work — commonly sought for back, neck, and post-injury support, alongside conventional care.",
    icon: "hand",
  },
  {
    slug: "sound-vibration-therapy",
    name: "Sound Vibration Therapy",
    short: "Tuned singing-bowl sessions in a calming, relaxation-focused practice.",
    long:
      "Sound Vibration Therapy uses tuned singing bowls in a calming, relaxation-focused practice. Sessions are gentle and unhurried, used adjunctively to support general well-being and rest.",
    icon: "wave",
  },
  {
    slug: "kinesiology",
    name: "Kinesiology",
    short: "Gentle muscle-response testing used to guide personalised approaches.",
    long:
      "Kinesiology uses gentle muscle-response testing to explore structural, biochemical, and emotional balance. It is drawn on by integrative practitioners worldwide and pairs well with Traditional Chinese Medicine meridian theory.",
    icon: "balance",
  },
] as const;

export type Service = (typeof services)[number];

export const milestones = [
  {
    year: "2006",
    title: "Founded",
    body: "MHHO is established by Mr. Kevin Mano to advance traditional medicine and holistic health in Malaysia.",
  },
  {
    year: "Today",
    title: "Towards an Integrative Hospital",
    body: "Ongoing advocacy to integrate traditional and complementary medicine into Malaysia's national healthcare system.",
  },
] as const;

export const specialNeedsCare = {
  title: "Care for Special Needs — Adults and Children",
  short:
    "Supportive sessions for adults and children with special needs, focused on comfort and well-being.",
  long:
    "Beyond our seven core modalities, MHHO offers supportive sessions for adults and children with special needs — drawing on gentle bodywork, sound and vibration practices, and structured movement to support comfort, well-being, and family carers. Sessions are unhurried, individually paced, and designed around safety and dignity, alongside any care provided by qualified medical professionals.",
  highlights: [
    "Sensory-friendly session environments",
    "Gentle, individually paced sessions",
    "Support for parents and carers",
    "Drawing on the modalities best suited to each person",
  ],
} as const;

export const goals = [
  {
    n: "01",
    title: "Promote T&CM",
    body: "Promote Traditional and Complementary Medicine as a legitimate support to Western medical treatment.",
  },
  {
    n: "02",
    title: "Advocate Efficacy & Safety",
    body: "Advocate for the efficacy and safety of T&CM approaches delivered in a holistic, patient-centred manner.",
  },
  {
    n: "03",
    title: "Build Community",
    body: "Build a community of patients, practitioners, and partners who value holistic health approaches.",
  },
] as const;

