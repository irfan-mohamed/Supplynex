import { Facebook, Globe2, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { footerCompanyLinks, footerQuickLinks } from "../data/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BrandLogo variant="light" className="footer-logo" />
          <p>Connecting manufacturers and distributors to build stronger distribution networks across India.</p>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <Linkedin size={24} strokeWidth={2.6} />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <Facebook size={24} strokeWidth={2.6} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <Instagram size={24} strokeWidth={2.6} />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <Youtube size={25} strokeWidth={2.6} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          {footerQuickLinks.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>Company</h2>
          {footerCompanyLinks.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column contact-column">
          <h2>Contact</h2>
          <a href="mailto:contact@supplynex.com">
            <Mail size={23} />
            contact@supplynex.com
          </a>
          <a href="https://www.supplynex.com">
            <Globe2 size={24} />
            www.supplynex.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Supplynex. All rights reserved.</div>
    </footer>
  );
}
