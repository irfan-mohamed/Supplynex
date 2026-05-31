export const primaryNavigation = [
  { label: "For Brands", href: "/for-brands" },
  { label: "For Distributors", href: "/for-distributors" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Resources", href: "/resources", hasDropdown: true },
];

export const footerQuickLinks = primaryNavigation.map(({ label, href }) => ({ label, href }));

export const footerCompanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/mission" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];
