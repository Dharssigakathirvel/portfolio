import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey",      href: "#journey" },
  { name: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="dh-nav">
      <div className="dh-nav__inner">
        <span className="dh-nav__logo">Dharssiga.dev ⚡</span>

        {/* Desktop */}
        <div className="dh-nav__links">
          {links.map((l) => (
            <a key={l.name} href={l.href}>{l.name}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="dh-nav__mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="dh-nav__mobile-menu">
          {links.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)}>
              {l.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}