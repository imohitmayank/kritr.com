import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { getLegalDocument } from "@/lib/legal";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument("kritr-terms");

  return {
    title: document.title,
    description: document.description
  };
}

export default async function KritrTermsPage() {
  const document = await getLegalDocument("kritr-terms");

  return <LegalDocumentView document={document} />;
}
