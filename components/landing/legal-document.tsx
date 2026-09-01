import { Header } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/closing";
import type { LegalDocument } from "@/lib/legal";

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
          INSTITUCIONAL
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {document.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {document.updatedAt}
        </p>

        <div className="mt-12 space-y-10">
          {document.sections.map((section) => {
            const headingId = section.heading
              .toLowerCase()
              .replace(/[^\wà-ú]+/gi, "-")
              .replace(/^-|-$/g, "");

            return (
              <section key={section.heading} aria-labelledby={headingId}>
                <h2
                  id={headingId}
                  className="text-lg font-bold tracking-tight text-foreground"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.closing?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
