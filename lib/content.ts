export type ActionLink = {
  href: string;
  label: string;
};

export type Product = {
  name: string;
  description: string;
  href: string;
  status: "Live" | "Coming Soon";
  tagline: string;
};

export type LegalSection = {
  title: string;
  body: string[];
};

const supportEmail = "hello@kritr.com";

export const siteConfig = {
  name: "Kritr",
  title: "Kritr | AI systems that turn data into decisions",
  description:
    "Kritr builds intelligent, human-first products that turn complex data into clear decisions, starting with health.",
  supportEmail,
  downloadHref: `mailto:${supportEmail}?subject=MyLabStory%20Download%20Access`,
  waitlistHref: `mailto:${supportEmail}?subject=Join%20MyLabStory%20Waitlist`
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/mylabstory", label: "MyLabStory" }
];

export const products: Product[] = [
  {
    name: "MyLabStory",
    tagline: "Health intelligence for people who want clarity, not confusion.",
    description:
      "Upload lab reports, extract biomarker data, and follow your health story over time with AI-assisted summaries.",
    href: "/mylabstory",
    status: "Live"
  }
];

export const homepagePillars = [
  {
    title: "AI Systems",
    description:
      "We design focused systems that help people move from raw information to clear action."
  },
  {
    title: "Data Intelligence",
    description:
      "We turn fragmented inputs into structured insight, context, and decision support."
  },
  {
    title: "Product Development",
    description:
      "We ship practical products with strong foundations, thoughtful UX, and room to scale."
  }
];

export const philosophyPoints = [
  "AI should simplify, not overwhelm.",
  "AI should be human-first and easy to trust.",
  "AI should explain complexity without pretending certainty."
];

export const myLabStoryProblemPoints = [
  "Reports are scattered across labs, email threads, and folders.",
  "Reference ranges and clinical terms are hard to interpret quickly.",
  "It is difficult to compare biomarkers over time without a personal history."
];

export const myLabStorySolutionSteps = [
  "Upload a PDF or report image from your phone or computer.",
  "AI and OCR extract biomarker values into a structured timeline.",
  "Review plain-language summaries and highlighted out-of-range markers.",
  "Track trends across reports so patterns become visible over time."
];

export const myLabStoryFeatures = [
  {
    title: "Upload and Extract",
    description:
      "Support camera captures and PDF uploads, then convert reports into structured biomarker data.",
    eyebrow: "OCR Workflow"
  },
  {
    title: "Understand",
    description:
      "Get plain-language summaries, context around key markers, and flags for abnormal values.",
    eyebrow: "AI Explanation"
  },
  {
    title: "Track",
    description:
      "Build a longitudinal record of your reports with historical comparisons and trend views.",
    eyebrow: "Health Timeline"
  }
];

export const myLabStoryScreenFlow = [
  {
    title: "Upload",
    detail: "Start with a report image or PDF."
  },
  {
    title: "OCR",
    detail: "Extraction turns dense files into usable data."
  },
  {
    title: "Preview",
    detail: "Confirm values before saving them."
  },
  {
    title: "Insights",
    detail: "Review summaries and flagged markers."
  },
  {
    title: "Trends",
    detail: "See how biomarkers move over time."
  }
];

export const myLabStoryTrustPoints = [
  "Your data should stay encrypted and under your control.",
  "Health insights should be understandable without replacing your clinician.",
  "The product should support reflection and preparation, not diagnosis."
];

export const privacySections: LegalSection[] = [
  {
    title: "Information We Collect",
    body: [
      "MyLabStory may collect account information you provide directly, such as your name, email address, and support messages. When you use the product, it may also collect lab report files, extracted biomarker values, device information, and basic analytics events needed to improve reliability and understand product usage.",
      "If you choose to connect with us through waitlists, feedback forms, or customer support, we may keep those records so we can respond to you and improve the service."
    ]
  },
  {
    title: "How We Use Information",
    body: [
      "We use collected information to provide and improve MyLabStory, operate uploads and extraction workflows, generate summaries, maintain security, communicate with you, and comply with legal obligations.",
      "We do not sell personal health information. We use data to deliver the product experience you requested and to make the service safer and easier to use."
    ]
  },
  {
    title: "Storage, Security, and Retention",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards to protect personal data, including encrypted transmission where appropriate and access controls for internal systems.",
      "We retain information only for as long as needed to provide the service, meet legal obligations, resolve disputes, and enforce agreements. Retention periods may vary depending on the type of data and the reason it was collected."
    ]
  },
  {
    title: "Third-Party Services",
    body: [
      "MyLabStory may rely on third-party infrastructure providers for hosting, analytics, storage, customer communications, and product operations. Those providers may process data on our behalf under their own contractual and security obligations.",
      "If third-party integrations materially change how your data is processed, we will update this policy accordingly."
    ]
  },
  {
    title: "Your Choices and Rights",
    body: [
      "Subject to applicable law, you may request access to, correction of, export of, or deletion of your personal data. You may also opt out of non-essential communications at any time.",
      `To make a privacy request, contact ${supportEmail}. We may need to verify your identity before completing certain requests.`
    ]
  }
];

export const termsSections: LegalSection[] = [
  {
    title: "Use of the Service",
    body: [
      "By accessing or using MyLabStory, you agree to use the service only for lawful purposes and in accordance with these terms. You are responsible for the accuracy of the information you upload and for maintaining the confidentiality of your account if one is provided.",
      "We may update, suspend, or discontinue features at any time to improve the service, address security issues, or meet legal requirements."
    ]
  },
  {
    title: "Subscriptions and Payments",
    body: [
      "If MyLabStory introduces paid plans, pricing, billing terms, renewal details, and cancellation rules will be presented before purchase. Unless stated otherwise at checkout, fees are non-refundable except where required by law.",
      "We may use third-party payment processors to handle billing securely. Those processors are responsible for payment credentials you provide to them."
    ]
  },
  {
    title: "Medical Disclaimer",
    body: [
      "MyLabStory is not a medical device and does not provide medical advice, diagnosis, or treatment. The product is intended for informational and organizational purposes only.",
      "Always seek the advice of a qualified healthcare professional with questions about your health, lab results, or treatment decisions. Never delay or disregard professional medical advice because of information generated by the service."
    ]
  },
  {
    title: "Limitations of Liability",
    body: [
      "To the maximum extent permitted by law, Kritr and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, revenue, or goodwill arising from your use of MyLabStory.",
      "The service is provided on an as-is and as-available basis. We do not guarantee uninterrupted availability, error-free operation, or complete accuracy of extracted or summarized information."
    ]
  },
  {
    title: "Termination and Contact",
    body: [
      "We may suspend or terminate access if these terms are violated, if required for security reasons, or if the service is discontinued. You may stop using the service at any time.",
      `Questions about these terms can be sent to ${supportEmail}.`
    ]
  }
];
