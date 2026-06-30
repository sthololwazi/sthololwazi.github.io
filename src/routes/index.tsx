import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-construction.jpg";
import craftImg from "@/assets/craft-bricks.jpg";
import rdpImg from "@/assets/project-rdp.jpg";
import hospitalImg from "@/assets/project-hospital.jpg";
import schoolImg from "@/assets/project-school.jpg";
import foremanImg from "@/assets/team-foreman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sthololwazi Projects — Building Infrastructure. Empowering Communities." },
      {
        name: "description",
        content:
          "100% black-owned, B-BBEE Level 1 civil and building construction partner in Mbombela. Building, civil engineering and material supply to SANS standards.",
      },
      { property: "og:title", content: "Sthololwazi Projects — Building & Civil Construction" },
      {
        property: "og:description",
        content:
          "Building, civil engineering and material supply across South Africa. B-BBEE Level 1, NHBRC and CIDB registered.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          url: "/",
          logo: SITE.logo,
          email: SITE.email,
          telephone: SITE.phone,
          foundingDate: String(SITE.established),
          address: {
            "@type": "PostalAddress",
            streetAddress: "K01041 Hilaria, Msogwaba",
            addressLocality: "Mbombela",
            postalCode: "1215",
            addressRegion: "Mpumalanga",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const DIVISIONS = [
  {
    num: "01",
    title: "Building Construction",
    blurb:
      "Our core division. Rental units, NHBRC-compliant RDP & social housing, commercial structures to SANS 10400T, renovations, SANS 523 ceilings, plumbing, tiling and welding.",
    items: ["Rental & RDP housing", "Commercial builds", "Renovations & ceilings", "Plumbing, tiling, welding"],
    featured: true,
  },
  {
    num: "02",
    title: "Civil Construction",
    blurb:
      "Roads, stormwater, water reticulation, sewer & sanitation, and bulk earthworks — engineered and delivered to SANS 1200 standards.",
    items: ["Roads & asphalt", "Water reticulation", "Bulk earthworks", "Stormwater"],
  },
  {
    num: "03",
    title: "Material Supply",
    blurb:
      "In-house Integrated Supply Chain delivering bricks, cement, aggregates and steel direct to site at scale.",
    items: ["Bricks & cement", "Aggregates", "Steel & rebar", "Site consumables"],
  },
];

const PROJECTS = [
  { img: rdpImg, value: "R 53,000,000", title: "500 RDP Houses", caption: "National housing delivery, project management" },
  { img: hospitalImg, value: "R 70,000", title: "Evander Hospital", caption: "Renovation works" },
  { img: schoolImg, value: "R 97,000", title: "Tholinhlanhla Primary School", caption: "Renovation works" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Sthololwazi Projects team reviewing plans on a Mpumalanga construction site at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-deep/85 via-forest-deep/55 to-forest-deep/30" />
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-28 lg:px-10 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl text-primary-foreground">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Est. {SITE.established} &middot; {SITE.region}</span>
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Building infrastructure. <em className="text-gold-soft">Empowering</em> communities.
            </h1>
            <p className="mt-7 max-w-xl text-base text-primary-foreground/85 lg:text-lg">
              A 100% black-owned, B-BBEE Level 1 building and civil construction partner — pairing
              technical mastery with a measurable mandate to upskill the workforces of the
              communities we build in.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-105"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Our services
              </Link>
            </div>
          </div>

          <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t border-primary-foreground/20 pt-8 text-primary-foreground sm:grid-cols-4">
            {[
              ["2017", "Established"],
              ["Level 1", "B-BBEE"],
              ["100%", "Black-Owned"],
              ["3", "Divisions"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl text-gold-soft">{v}</dt>
                <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <div className="eyebrow flex items-center gap-3 text-forest">
              <span className="h-px w-8 bg-gold" /> Our philosophy
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Not a contractor. An infrastructure &amp; social-development partner.
            </h2>
            <div className="mt-8 grid gap-6 text-base text-foreground/80 lg:grid-cols-2">
              <p>
                Founded in 2017 in response to a regional need for technically excellent
                construction that simultaneously advances Broad-based Black Economic Empowerment,
                Sthololwazi Projects operates on a dual mandate.
              </p>
              <p>
                We deliver high-quality building and civil works — and we ensure every project
                leaves behind a lasting legacy of skills, local employment, and economic dignity for
                previously disadvantaged communities.
              </p>
            </div>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-serif text-2xl italic text-forest">
              "Building infrastructure. Empowering communities. Mending the future — one brick, one
              skill, one life at a time."
            </blockquote>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow flex items-center gap-3 text-forest">
                <span className="h-px w-8 bg-gold" /> What we do best
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-5xl">
                Services engineered for impact.
              </h2>
              <p className="mt-4 max-w-xl text-foreground/75">
                Three integrated divisions delivering technical excellence and measurable
                empowerment on every project — from bulk earthworks to handover. Building is our
                core division and primary business driver.
              </p>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-forest">
              Explore all services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {DIVISIONS.map((d) => (
              <article
                key={d.num}
                className={`group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl ${
                  d.featured ? "lg:col-span-6 lg:row-span-2 bg-forest text-primary-foreground" : "lg:col-span-6"
                }`}
              >
                <div className={`eyebrow ${d.featured ? "text-gold-soft" : "text-muted-foreground"}`}>
                  {d.num} &middot; Division
                </div>
                <div className={`mt-1 font-serif text-6xl ${d.featured ? "text-gold-soft" : "text-forest/30"}`}>
                  {d.num}
                </div>
                <h3 className={`mt-6 font-serif text-3xl ${d.featured ? "text-primary-foreground" : "text-forest"}`}>
                  {d.title}
                  {d.featured && <span className="ml-3 align-middle text-xs font-sans uppercase tracking-[0.2em] text-gold-soft">Core</span>}
                </h3>
                <p className={`mt-3 ${d.featured ? "text-primary-foreground/85" : "text-foreground/75"}`}>
                  {d.blurb}
                </p>
                <ul className={`mt-6 grid grid-cols-2 gap-2 text-sm ${d.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                  {d.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className={`h-1 w-1 rounded-full ${d.featured ? "bg-gold-soft" : "bg-forest"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold ${
                    d.featured ? "text-gold-soft" : "text-forest"
                  }`}
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA BAND */}
      <section className="border-y border-forest/10 bg-forest text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="eyebrow text-gold-soft">Need a quote on a specific scope?</div>
            <p className="mt-2 font-serif text-2xl">
              Tender response &middot; Private development &middot; Material supply &middot; 48-hour reply.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-105"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* EMPOWERMENT */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <img
              src={craftImg}
              alt="Skilled artisan laying brickwork on a Sthololwazi Projects site"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow flex items-center gap-3 text-forest">
              <span className="h-px w-8 bg-gold" /> The empowerment multiplier
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              A verifiable B-BBEE contribution on every project.
            </h2>
            <p className="mt-5 max-w-xl text-foreground/75">
              For every site we open, our first operational directive is to identify, onboard and
              upskill local workers in partnership with ward councillors and community structures.
              A measurable portion of project value is converted into accredited, on-the-job
              training.
            </p>
            <ul className="mt-10 space-y-6">
              {[
                ["Each One, Teach One", "Mentorship programme pairing artisans with local mentees."],
                ["Ward-level engagement", "Transparent hiring with the communities we build in."],
                ["Skills Transfer Register", "Live B-BBEE evidence captured per project, per skill."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-t border-border pt-6">
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <div className="font-serif text-xl text-forest">{t}</div>
                    <div className="mt-1 text-sm text-foreground/75">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-forest-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow text-gold-soft">Track record</div>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                From a single classroom block to 500 homes delivered.
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-soft"
            >
              View all projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl bg-card text-card-foreground">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow text-gold">{p.value}</div>
                  <h3 className="mt-2 font-serif text-2xl text-forest">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="eyebrow flex items-center gap-3 text-forest">
              <span className="h-px w-8 bg-gold" /> Our people
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Master craft. Local knowledge.
            </h2>
            <p className="mt-5 max-w-xl text-foreground/75">
              From RDP homes to commercial complexes, every brick, tile and pipe is installed to
              SANS standards. We are accountable to the communities we build in, and we hire
              locally on every site.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep"
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest hover:bg-forest/5"
              >
                Work with us
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="font-serif text-4xl text-forest">135%</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Procurement recognition
                </dd>
              </div>
              <div>
                <dt className="font-serif text-4xl text-forest">Zero</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Harm site policy
                </dd>
              </div>
              <div>
                <dt className="font-serif text-xl text-forest">CIDB {SITE.compliance.cidb}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  CIDB registered
                </dd>
              </div>
              <div>
                <dt className="font-serif text-xl text-forest">NHBRC {SITE.compliance.nhbrc}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  NHBRC registered
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6">
            <img
              src={foremanImg}
              alt="Site foreman on a Sthololwazi Projects construction site"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-forest text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-10">
          <img src={SITE.logo} alt="" width={88} height={88} className="mx-auto h-22 w-22" />
          <h2 className="mt-6 mx-auto max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Let's build something that lasts.
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-primary-foreground/80">
            Whether it's a tender response, a private development, or a community project — start a
            conversation with the team in Mbombela.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-105"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
