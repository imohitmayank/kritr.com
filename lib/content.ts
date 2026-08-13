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
  title: "Kritr | AI that helps people decide",
  description:
    "Kritr builds focused AI products for decisions that matter. First up: MyLabStory.",
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
    tagline: "Your lab history in one place, written so you can actually use it.",
    description:
      "Upload lab PDFs or photos, pull out biomarker values, and follow trends across visits — with plain-language summaries, not another opaque PDF pile.",
    href: "/mylabstory",
    status: "Live"
  }
];

export const homepagePillars = [
  {
    title: "Focused AI",
    description:
      "Small systems for specific jobs — extract, explain, compare — not a chatbot bolted onto everything."
  },
  {
    title: "Messy data, made usable",
    description:
      "We start with the files people already have and turn them into structured records you can revisit."
  },
  {
    title: "Products you can open",
    description:
      "Design and engineering ship together. If it is not clear on a phone screen, it is not done."
  }
];

export const philosophyPoints = [
  "Explain the number. Do not bury it in jargon.",
  "Earn trust with restraint — especially with health data.",
  "Say what you know, and stop short of what you do not."
];

export const myLabStoryProblemPoints = [
  "Reports live in email, portals, and camera rolls — nowhere you can scan as a history.",
  "Reference ranges and abbreviations take longer to parse than they should.",
  "Comparing last year’s panel to this year’s usually means opening two PDFs side by side."
];

export const myLabStorySolutionSteps = [
  "Upload a PDF or a photo of a report.",
  "OCR and models pull biomarker values into a structured timeline.",
  "Read plain-language notes and see what sits outside range.",
  "Watch markers move across reports instead of guessing from memory."
];

export const myLabStoryFeatures = [
  {
    title: "Upload and extract",
    description:
      "Camera shots and PDFs become structured biomarker rows you can save and correct.",
    eyebrow: "Capture"
  },
  {
    title: "Read the story",
    description:
      "Short summaries, context on key markers, and clear flags when something is out of range.",
    eyebrow: "Explain"
  },
  {
    title: "Track over time",
    description:
      "A running record of reports with comparisons so shifts show up before you forget the last visit.",
    eyebrow: "Timeline"
  }
];

export const myLabStoryScreenFlow = [
  {
    title: "Upload",
    detail: "Add a report image or PDF."
  },
  {
    title: "Extract",
    detail: "Dense pages become structured values."
  },
  {
    title: "Review",
    detail: "Confirm numbers before they are saved."
  },
  {
    title: "Insights",
    detail: "Summaries and out-of-range flags."
  },
  {
    title: "Trends",
    detail: "See how markers move visit to visit."
  }
];

export const myLabStoryTrustPoints = [
  "Your reports should be encrypted and under your control.",
  "Insights help you prepare for a clinician — they do not replace one.",
  "The app supports reflection and questions, not diagnosis."
];
