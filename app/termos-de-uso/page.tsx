import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/landing/legal-document";
import { termosDeUso } from "@/lib/legal";

export const metadata: Metadata = {
  title: termosDeUso.title,
  description: termosDeUso.description,
  alternates: {
    canonical: termosDeUso.path,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosDeUsoPage() {
  return <LegalDocumentView document={termosDeUso} />;
}
