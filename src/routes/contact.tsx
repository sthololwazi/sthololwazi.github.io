import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
     { property: "og:title", content: "Contact | Sthololwazi Projects" },
      {
        name: "description",
        content:
          "Request a quote or contact Sthololwazi Projects in Mbombela, Mpumalanga. Express 24 hr response on enquiries.",
      },
      { property: "og:title", content: "Contact Sthololwazi Projects" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  project_brief: z.string().trim().min(10, "A short description helps us respond accurately").max(2000),
});
type QuoteValues = z.infer<typeof quoteSchema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (values: QuoteValues) => {
  try {
    const message = `New Quote Request — Sthololwazi Projects
      Name: ${values.name}
      Company: ${values.company || "Not provided"}
      Email: ${values.email}
      Phone: ${values.phone}
      Project brief: ${values.project_brief}`;

      const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast.success(
  "Your quote request has been prepared. Please press Send to WhatsApp to complete the submission."
);

setSubmitted(true);
    reset();
  } catch (error) {
    console.error(error);
    toast.error("Unable to open WhatsApp. Please try again or call us.");
  }
};

return (
    <SiteLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-10 lg:pt-28">
          <div className="eyebrow flex items-center gap-3 text-forest">
            <span className="h-px w-8 bg-gold" /> Contact
          </div>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-forest lg:text-7xl">
            Let's build something that lasts.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Tell us about your project.
            We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10">
          <aside className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-forest">Reach the team</h2>
            <ul className="mt-6 space-y-5 text-sm text-foreground/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-forest">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-forest">{SITE.email}</a>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6">
              <div className="eyebrow text-forest">Compliance</div>
              <dl className="mt-4 space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between gap-3"><dt>CIDB</dt><dd className="font-medium text-forest">{SITE.compliance.cidb}</dd></div>
                <div className="flex justify-between gap-3"><dt>NHBRC</dt><dd className="font-medium text-forest">{SITE.compliance.nhbrc}</dd></div>
                <div className="flex justify-between gap-3"><dt>CSD</dt><dd className="font-medium text-forest">{SITE.compliance.csd}</dd></div>
                <div className="flex justify-between gap-3"><dt>B-BBEE</dt><dd className="font-medium text-forest">{SITE.compliance.bbbee}</dd></div>
                <div className="flex justify-between gap-3"><dt>Reg.</dt><dd className="font-medium text-forest">{SITE.compliance.reg}</dd></div>
              </dl>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-card p-8 lg:p-10"
              noValidate
            >
              <h2 className="font-serif text-2xl text-forest">Request a quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                All fields except company are required.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field label="Full name" error={errors.name?.message}>
                  <input
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className="form-input"
                  />
                </Field>
                <Field label="Company / department" error={errors.company?.message} optional>
                  <input
                    type="text"
                    autoComplete="organization"
                    {...register("company")}
                    className="form-input"
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="form-input"
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    type="tel"
                    autoComplete="tel"
                    {...register("phone")}
                    className="form-input"
                  />
                </Field>
                <Field label="Project brief" error={errors.project_brief?.message} full>
                  <textarea
                    rows={6}
                    {...register("project_brief")}
                    placeholder="Tell us about the scope, location, timeline and budget range if known."
                    className="form-input resize-y"
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting you agree we may contact you about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-forest-deep disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send via WhatsApp</>
                  )}
                </button>
              </div>

            {submitted && (
  <div className="mt-6 flex items-start gap-3 rounded-lg border border-forest/20 bg-forest/5 p-4 text-sm text-forest">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
    <div>
      <div className="font-semibold">
        WhatsApp opened successfully.
      </div>

      <p className="mt-1">
        Please press <strong>Send</strong> in WhatsApp to submit your quote
        request. Our team aims to respond within <strong>24 hours</strong>.
      </p>
    </div>
  </div>
)}
      </form>
    </div>
  </div>
</section>

 <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .form-input:focus {
          border-color: var(--color-ring);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-ring) 18%, transparent);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({
  label,
  error,
  children,
  full,
  optional,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
  optional?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}{optional && <span className="ml-1 text-muted-foreground/60 normal-case tracking-normal">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
