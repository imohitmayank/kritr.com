import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { getLegalDocument } from "@/lib/legal";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument("kritr-privacy");

  return {
    title: document.title,
    description: document.description
  };
}

export default async function KritrPrivacyPage() {
  const document = await getLegalDocument("kritr-privacy");

  return <LegalDocumentView document={document} />;
}
