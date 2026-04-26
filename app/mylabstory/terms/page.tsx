import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal-layout";
import { termsSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "MyLabStory Terms and Conditions",
  description:
    "Read the MyLabStory terms and conditions, including usage terms, medical disclaimers, and liability limits."
};

export default function MyLabStoryTermsPage() {
  return (
    <LegalLayout
      title="MyLabStory Terms and Conditions"
      effectiveDate="April 26, 2026"
      intro="These terms govern your access to and use of MyLabStory. By using the product, you agree to the terms below."
      sections={termsSections}
    />
  );
}
