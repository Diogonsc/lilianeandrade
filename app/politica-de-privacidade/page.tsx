import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/landing/legal-document";
import { politicaDePrivacidade } from "@/lib/legal";

export const metadata: Metadata = {
  title: politicaDePrivacidade.title,
  description: politicaDePrivacidade.description,
  alternates: {
    canonical: politicaDePrivacidade.path,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidadePage() {
  return <LegalDocumentView document={politicaDePrivacidade} />;
}
