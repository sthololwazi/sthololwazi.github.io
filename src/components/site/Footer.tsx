import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { SITE, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-forest-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={SITE.logo} alt="" width={52} height={52} className="h-13 w-13" />
            <div>
              <div className="font-serif text-xl">Sthololwazi Projects</div>
              <div className="text-[0.65rem] tracking-[0.28em] text-primary-foreground/70">
                (PTY) LTD &middot; EST. {SITE.established}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md font-serif text-lg italic text-primary-foreground/85">
            {SITE.slogan}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
              { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
              { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: SITE.social.x, label: "X (Twitter)", Icon: Twitter },
              {
                href: `https://wa.me/${SITE.whatsapp}`,
                label: "WhatsApp",
                Icon: MessageCircle,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition hover:border-gold-soft hover:text-gold-soft"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold-soft">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-primary-foreground/80 hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-soft">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <a href={`tel:${SITE.phoneIntl}`} className="hover:text-gold-soft">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-soft break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/65 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span>Reg {SITE.compliance.reg}</span>
            <span>CIDB {SITE.compliance.cidb}</span>
            <span>NHBRC {SITE.compliance.nhbrc}</span>
            <span>CSD {SITE.compliance.csd}</span>
            <span>B-BBEE {SITE.compliance.bbbee}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
