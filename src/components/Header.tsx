import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { primaryNavigation } from "../data/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo-link" to="/" aria-label="Supplynex home">
          <BrandLogo variant="dark" className="header-logo" />
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={27} />}
        </button>
        <nav className={`main-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <NavLink key={item.href} to={item.href} onClick={closeMenu}>
              {item.label}
              {item.hasDropdown ? <ChevronDown size={14} strokeWidth={3} /> : null}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
