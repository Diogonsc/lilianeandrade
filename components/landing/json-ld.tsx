import { faq } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        founder: {
          "@type": "Person",
          name: siteConfig.instructor,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#instructor`,
        name: siteConfig.instructor,
        jobTitle: "Instrutora",
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        image: `${siteConfig.url}/images/liliane-andrade.png`,
      },
      {
        "@type": "Course",
        "@id": `${siteConfig.url}/#course`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        inLanguage: "pt-BR",
        isAccessibleForFree: false,
        provider: { "@id": `${siteConfig.url}/#organization` },
        instructor: { "@id": `${siteConfig.url}/#instructor` },
        offers: {
          "@type": "Offer",
          price: "199",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: siteConfig.checkoutUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
