import logoAsset from "@/assets/sthololwazi-logo.jpg.asset.json";

export const SITE = {
  name: "Sthololwazi Projects (Pty) Ltd",
  shortName: "Sthololwazi Projects",
  slogan: "Building Infrastructure. Empowering Communities. Mending the Future.",
  established: 2017,
  region: "Mbombela, Mpumalanga",
  phone: "064 620 4247",
  phoneIntl: "+27646204247",
  whatsapp: "27646204247",
  email: "projectssithololwazi@gmail.com",
  address: "K01041 Hilaria, Msogwaba, Mbombela 1215, Mpumalanga, South Africa",
  logo: logoAsset.url,
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
  },
  compliance: {
    reg: "2017/135433/07",
    tax: "9071664248",
    nhbrc: "3000190954",
    cidb: "10127071",
    csd: "MAAA0446751",
    bbbee: "Level 1",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;
