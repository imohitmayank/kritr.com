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

const supportEmail = "contact@kritr.com";
const myLabStorySupportEmail = "mylabstory@kritr.com";

export const siteConfig = {
  name: "Kritr",
  title: "Kritr | AI systems that turn data into decisions",
  description:
    "Kritr builds intelligent, human-first products that turn complex data into clear decisions, starting with health.",
  supportEmail,
  myLabStorySupportEmail,
  downloadHref: `mailto:${myLabStorySupportEmail}?subject=MyLabStory%20Download%20Access`,
  contactHref: `mailto:${supportEmail}?subject=Kritr%20Contact`
};

export const navLinks = [
  { href: "/", label: "Home" },
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
      "We bring product thinking, engineering, and design together into tools people can actually use."
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
