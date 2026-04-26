import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal-layout";
import { privacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "MyLabStory Privacy Policy",
  description:
    "Read the MyLabStory privacy policy covering data collection, usage, storage, and user rights."
};

export default function MyLabStoryPrivacyPage() {
  return (
    <LegalLayout
      title="MyLabStory Privacy Policy"
      effectiveDate="April 26, 2026"
      intro="This privacy policy explains how Kritr may collect, use, store, and protect information when you use MyLabStory, join a waitlist, or contact us about the product."
      sections={privacySections}
    />
  );
}
