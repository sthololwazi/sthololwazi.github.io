import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Building, Civil & Material Supply | Sthololwazi Projects" },
      {
        name: "description",
        content:
          "Three integrated divisions: Building Construction (core), Civil Construction, and Material Supply. Delivered to SANS 1200, SANS 10400T and SANS 523 standards.",
      },
      { property: "og:title", content: "Services — Sthololwazi Projects" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    num: "01",
    title: "Building Construction",
    tag: "Core Division",
    blurb:
      "From NHBRC-compliant social housing to commercial structures and turnkey renovations — building is the discipline that anchors the firm.",
    scope: [
      "Rental units & private development",
      "NHBRC-compliant RDP & social housing",
      "Commercial structures (SANS 10400T)",
      "Renovations & alterations",
      "SANS 523 suspended ceilings",
      "✅ House Construction",
      "✅ Plastering & Tiling",
      "✅ Roofing",
      "✅ Plumbing & Electrical",
      "✅ Landscaping & Pool Construction",
      "✅ Renovations",
      "✅ Block & Brick Supply"
    ],
    featured: true,
  },
  {
    num: "02",
    title: "Civil Construction",
    tag: "Division",
    blurb:
      "Civil works delivered to SANS 1200 — roads, water and sanitation infrastructure for municipal and private clients.",
    scope: [
      "Roads & asphalt",
      "Stormwater management",
      "Water reticulation",
      "Sewer & sanitation",
      "Bulk earthworks",
      "Site clearance & preparation",
    ],
  },
  {
    num: "03",
    title: "Material Supply",
    tag: "Division",
    blurb:
      "An in-house Integrated Supply Chain that puts the right materials on site at the right time, at scale.",
    scope: [
      "Bricks & cement",
      "Aggregates & sand",
      "Steel & rebar",
      "Timber & formwork",
      "Plumbing & electrical consumables",
      "Direct-to-site delivery",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-10 lg:pt-28">
          <div className="eyebrow flex items-center gap-3 text-forest">
            <span className="h-px w-8 bg-gold" /> Services
          </div>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-forest lg:text-7xl">
            Three divisions. One standard of delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Building Construction is our core division and primary business driver. Civil
            Construction and Material Supply round out an integrated capability that lets us own
            scope end-to-end from earthworks to handover.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="space-y-6">
            {SERVICES.map((s) => (
              <article
                key={s.num}
                className={`grid gap-8 rounded-2xl border border-border p-8 lg:grid-cols-12 lg:p-12 ${
                  s.featured ? "bg-forest text-primary-foreground" : "bg-card"
                }`}
              >
                <div className="lg:col-span-4">
                  <div className={`eyebrow ${s.featured ? "text-gold-soft" : "text-muted-foreground"}`}>
                    {s.num} &middot; {s.tag}
                  </div>
                  <div className={`mt-2 font-serif text-7xl ${s.featured ? "text-gold-soft" : "text-forest/25"}`}>
                    {s.num}
                  </div>
                  <h2 className={`mt-4 font-serif text-3xl ${s.featured ? "text-primary-foreground" : "text-forest"}`}>
                    {s.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className={s.featured ? "text-primary-foreground/85" : "text-foreground/80"}>
                    {s.blurb}
                  </p>
                  <ul className={`mt-8 grid gap-3 sm:grid-cols-2 ${s.featured ? "text-primary-foreground/90" : "text-foreground/85"}`}>
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${s.featured ? "bg-gold-soft" : "bg-forest"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${
                      s.featured
                        ? "bg-gold text-accent-foreground hover:brightness-105"
                        : "bg-forest text-primary-foreground hover:bg-forest-deep"
                    }`}
                  >
                    Discuss this scope <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
