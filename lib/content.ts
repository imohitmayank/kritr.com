export type ActionLink = {
  href: string;
  label: string;
  disabled?: boolean;
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
    "Kritr helps people make clearer decisions with AI, through products, applications, and collaboration.",
  supportEmail,
  myLabStorySupportEmail,
  downloadHref: `mailto:${myLabStorySupportEmail}?subject=MyLabStory%20Download%20Access`,
  contactHref: `mailto:${supportEmail}?subject=Kritr%20Contact`,
  workHref: `mailto:${supportEmail}?subject=Work%20with%20Kritr`,
  myLabStoryContactHref: `mailto:${myLabStorySupportEmail}?subject=MyLabStory`
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mylabstory", label: "MyLabStory" }
];

export const products: Product[] = [
  {
    name: "MyLabStory",
    tagline: "Your health is a story, not a stack of reports.",
    description:
      "An AI companion that turns scattered medical reports into a living health history you can search, understand, and follow over time.",
    href: "/mylabstory",
    status: "Coming Soon"
  }
];

export const philosophyPoints = [
  {
    title: "Start small, then expand",
    description:
      "Start with one decision worth getting right. Expand only when the work earns it."
  },
  {
    title: "Show the work",
    description:
      "People should see how a result was reached. If they cannot check it, they cannot trust it."
  },
  {
    title: "Stop at the edge of certainty",
    description:
      "If we do not know, we should not pretend. Overconfident AI is worse than a missing answer."
  }
];

export const myLabStoryProblemPoints = [
  {
    title: "Reports are scattered",
    description:
      "Labs, hospital portals, email, a drawer of PDFs. Every provider has its own format. Nothing lives in one place."
  },
  {
    title: "The language is not yours",
    description:
      "HDL, LDL, TSH, HbA1c, MCV, ESR. Most people look the terms up after a checkup. The report was written for a clinician, not for you."
  },
  {
    title: "Today is not a trend",
    description:
      "A single value says what happened this visit. It does not say if it is improving, worsening, or just how you usually look."
  },
  {
    title: "Care stays reactive",
    description:
      "Doctors often see one snapshot. Patients rarely arrive with years of organized history. Patterns get missed until they are loud."
  }
];

export const myLabStorySolutionSteps = [
  {
    title: "Upload",
    description: "A PDF, a photo, or a camera scan. Any report you already have."
  },
  {
    title: "Extract",
    description:
      "AI pulls biomarkers, values, units, ranges, dates, lab, and document type into structured data."
  },
  {
    title: "Organize",
    description:
      "Searchable documents, biomarker timelines, summaries, and historical values. Not another folder of files."
  },
  {
    title: "Use it",
    description:
      "Ask questions, see trends, compare visits, and walk into the next appointment with a story instead of a stack."
  }
];

export const myLabStoryFeatures = [
  {
    title: "AI document upload",
    description:
      "Camera, PDF, or image. The report is read automatically: biomarkers, values, units, and ranges included.",
    eyebrow: "Capture"
  },
  {
    title: "Document library",
    description:
      "Every upload is stored, searchable, and easy to preview. Find last year’s panel without hunting email.",
    eyebrow: "Library"
  },
  {
    title: "Biomarker tracking",
    description:
      "Each marker joins a timeline: historical values, charts, reference ranges, and what sat outside them.",
    eyebrow: "Trends"
  },
  {
    title: "Plain-English summaries",
    description:
      "Each report gets a short read: major findings, abnormal results, and what is worth noticing.",
    eyebrow: "Summaries"
  },
  {
    title: "Ask your history",
    description:
      "Why is my LDL rising? Explain my thyroid. Compare this visit with last year. The chat answers from your own records.",
    eyebrow: "Chat"
  },
  {
    title: "Home dashboard",
    description:
      "Recent reports, highlights, and a sense of what has changed, without opening five PDFs.",
    eyebrow: "Overview"
  }
];

export const myLabStoryTrustPoints = [
  {
    title: "You own the data",
    description:
      "Health records are yours. We treat them that way: carefully, with restraint, and no mystery about where they go."
  },
  {
    title: "A companion, not a clinician",
    description:
      "MyLabStory helps you prepare for a doctor. It does not diagnose, treat, or replace medical advice."
  },
  {
    title: "Calm by design",
    description:
      "No alarmist red screens. The point is understanding over time, not a panic after every lab."
  }
];

export const myLabStoryVisionPoints = [
  {
    title: "Family health",
    description: "Parents, children, a spouse. One account for the people you already look after."
  },
  {
    title: "Medicines and visits",
    description: "Prescriptions, reminders, appointments, and notes alongside the reports they belong to."
  },
  {
    title: "A fuller timeline",
    description: "Labs, surgeries, vaccinations, diagnoses. Chapters in one history, not separate piles."
  },
  {
    title: "Wearables, later",
    description: "Daily metrics from the health apps already on your phone, next to the bloodwork, when we get there."
  },
  {
    title: "Patterns over years",
    description:
      "Cholesterol climbing for three years. Vitamin D dipping every winter. The kind of notice a single report never gives."
  }
];
