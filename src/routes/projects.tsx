import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import rdpImg from "@/assets/project-rdp.jpg";
import hospitalImg from "@/assets/project-hospital.jpg";
import schoolImg from "@/assets/project-school.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sthololwazi Projects" },
      {
        name: "description",
        content:
          "Flagship delivery: 500 RDP houses (R53,000,000), Evander Hospital renovations, Tholinhlanhla Primary School and more across Mpumalanga.",
      },
      { property: "og:title", content: "Projects — Sthololwazi Projects" },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: rdpImg },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    img: rdpImg,
    value: "R 53,000,000",
    title: "500 RDP Houses",
    scope: "Project management of national housing delivery",
    detail:
      "End-to-end project management of a 500-unit NHBRC-compliant RDP housing programme, including local workforce onboarding and skills transfer.",
    role: "Project Management",
  },
  {
    img: hospitalImg,
    value: "R 70,000",
    title: "Evander Hospital",
    scope: "Renovation works",
    detail:
      "Targeted renovation works on the Evander Hospital facility, delivered to public-sector procurement standards.",
    role: "Building & Renovation",
  },
  {
    img: schoolImg,
    value: "R 97,000",
    title: "Tholinhlanhla Primary School",
    scope: "Renovation works",
    detail:
      "Classroom block renovation and facility upgrades for Tholinhlanhla Primary School, with local hiring across the build.",
    role: "Building & Renovation",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-10 lg:pt-28">
          <div className="eyebrow flex items-center gap-3 text-forest">
            <span className="h-px w-8 bg-gold" /> Projects
          </div>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-forest lg:text-7xl">
            Delivery you can verify.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            A selection of completed work across housing, healthcare and education — each project
            anchored by SANS-standard construction and local workforce development.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="space-y-16">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="lg:col-span-5">
                  <div className="eyebrow text-gold">{p.value}</div>
                  <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">{p.title}</h2>
                  <div className="mt-2 text-sm text-muted-foreground">{p.role} &middot; {p.scope}</div>
                  <p className="mt-5 text-foreground/80">{p.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-border bg-muted/40 p-10 text-center">
            <h2 className="font-serif text-3xl text-forest">Have a project brief?</h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/75">
              We respond to inquiries within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
