import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";
import foremanImg from "@/assets/team-foreman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sthololwazi Projects" },
      {
        name: "description",
        content:
          "100% black-owned, B-BBEE Level 1, NHBRC and CIDB registered. Founded 2017 in Mbombela, Mpumalanga to deliver technically excellent construction with measurable community empowerment.",
      },
      { property: "og:title", content: "About — Sthololwazi Projects" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const credentials: [string, string][] = [
    ["Company Reg.", SITE.compliance.reg],
    ["Tax / VAT", SITE.compliance.tax],
    ["NHBRC", SITE.compliance.nhbrc],
    ["CIDB", SITE.compliance.cidb],
    ["CSD", SITE.compliance.csd],
    ["B-BBEE", `${SITE.compliance.bbbee} (135% procurement recognition)`],
  ];

  return (
    <SiteLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-10 lg:pt-28">
          <div className="eyebrow flex items-center gap-3 text-forest">
            <span className="h-px w-8 bg-gold" /> About
          </div>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-forest lg:text-7xl">
            A dual mandate: technical excellence and economic dignity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Sthololwazi Projects (Pty) Ltd was founded in {SITE.established} in Mbombela,
            Mpumalanga, in response to a regional need for technically excellent construction that
            simultaneously advances Broad-based Economic Empowerment.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <img
              src={foremanImg}
              alt="Sthololwazi Projects site foreman"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">Who we are</h2>
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                We are a 100% black-owned construction firm operating across building, civil
                engineering and material supply. Building Construction is our core division and
                primary business driver the work that anchors everything else we do.
              </p>
              <p>
                Every site we open begins with a workforce plan. We hire locally, partner with ward
                councillors, and convert a measurable portion of project value into accredited
                on-the-job training through our "Each One, Teach One" mentorship programme.
              </p>
              <p>
                Our work spans government tenders, private developments and community projects
                from a single classroom renovation to a 500-unit RDP housing delivery valued at
                R53 million.
              </p>
            </div>

            <h3 className="mt-12 font-serif text-2xl text-forest">Compliance &amp; credentials</h3>
            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {credentials.map(([k, v]) => (
                <div key={k} className="border-t border-border pt-3">
                  <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-serif text-lg text-forest">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep"
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
