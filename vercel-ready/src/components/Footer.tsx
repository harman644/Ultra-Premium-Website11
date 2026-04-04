const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#booking" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/61410194829",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="gold-text text-2xl font-bold tracking-widest uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Preets
              </p>
              <p className="text-white/30 text-xs tracking-[0.4em] uppercase">Mobile Car Wash</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5" style={{ fontFamily: "'EB Garamond', serif" }}>
              Premium mobile car detailing at your doorstep. Luxury care, professional finish, delivered with passion.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center text-[#d4af37]/60 hover:text-[#d4af37] transition-colors border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.5)]"
                  style={{ borderRadius: "2px" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 text-sm hover:text-[#d4af37] transition-colors tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Contact</p>
            <div className="space-y-3">
              <a href="tel:0410194829" className="flex items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors text-sm group">
                <span className="text-[#d4af37]/60 group-hover:text-[#d4af37]">✆</span>
                0410 194 829
              </a>
              <a href="mailto:chahalgurpreet46984@gmail.com" className="flex items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors text-sm group break-all">
                <span className="text-[#d4af37]/60 group-hover:text-[#d4af37] shrink-0">✉</span>
                chahalgurpreet46984@gmail.com
              </a>
              <p className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-[#d4af37]/60">⌖</span>
                190 Dixon Drive
              </p>
            </div>

            {/* Working hours */}
            <div className="mt-5 space-y-1">
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">Hours</p>
              <p className="text-white/40 text-xs">Mon–Fri: 7:00 AM – 5:00 PM</p>
              <p className="text-white/40 text-xs">Sat: 7:00 AM – 4:00 PM</p>
              <p className="text-white/40 text-xs">Sun: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider w-full mb-6" style={{ opacity: 0.25 }} />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Preets Mobile Car Wash. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Premium mobile car detailing · Mobile car wash · Interior cleaning · Exterior polishing
          </p>
        </div>
      </div>
    </footer>
  );
}
