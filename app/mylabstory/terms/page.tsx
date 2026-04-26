import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { getLegalDocument } from "@/lib/legal";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument("mylabstory-terms");

  return {
    title: document.title,
    description: document.description
  };
}

export default async function MyLabStoryTermsPage() {
  const document = await getLegalDocument("mylabstory-terms");

  return <LegalDocumentView document={document} />;
}
