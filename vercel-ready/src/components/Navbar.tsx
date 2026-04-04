import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none"
        >
          <span
            className="gold-text text-xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Preets
          </span>
          <span className="text-[0.55rem] tracking-[0.35em] text-white/50 uppercase">Mobile Car Wash</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#d4af37] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <a
          href="#booking"
          onClick={(e) => handleNav(e, "#booking")}
          className="hidden md:block btn-gold text-xs tracking-[0.15em]"
          style={{ borderRadius: "2px" }}
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#d4af37] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#d4af37] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#d4af37] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(11,11,11,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm tracking-[0.2em] uppercase text-white/80 hover:text-[#d4af37] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleNav(e, "#booking")}
            className="btn-gold text-center text-xs tracking-[0.15em] mt-2"
            style={{ borderRadius: "2px" }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
