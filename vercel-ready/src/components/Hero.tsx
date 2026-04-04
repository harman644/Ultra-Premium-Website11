import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0b0b0b" }}
    >
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0" style={{ top: "-20%", height: "140%" }}>
        <img
          src="/images/car-wash-foam.jpeg"
          alt="Premium mobile car detailing service"
          className="w-full h-full object-cover"
        />
        {/* Overlay layers */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.85) 100%)" }} />
        {/* Gold shimmer strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Pre-heading label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.35em] uppercase font-medium">Premium Mobile Detailing</span>
          <span className="h-px w-8 bg-[#d4af37]" />
        </div>

        {/* Main Heading */}
        <h1
          className="text-white font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.01em",
          }}
        >
          Premium Mobile Car{" "}
          <span className="gold-text italic">Detailing</span>
          <br />
          at Your Doorstep
        </h1>

        {/* Subheading */}
        <p
          className="text-white/60 max-w-2xl mx-auto mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontStyle: "italic",
            letterSpacing: "0.04em",
          }}
        >
          Luxury Care. Professional Finish. Convenience Delivered.
        </p>

        {/* Pricing hint */}
        <p className="text-[#d4af37]/70 text-sm tracking-widest mb-12">
          Starting from <span className="text-[#d4af37] font-semibold">$90</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#booking")}
            className="btn-gold w-full sm:w-auto"
            style={{ borderRadius: "2px", minWidth: "180px" }}
          >
            Book Now
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="btn-outline-gold w-full sm:w-auto"
            style={{ borderRadius: "2px", minWidth: "180px" }}
          >
            View Services
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-4">
          {[
            { number: "100+", label: "Happy Clients" },
            { number: "5★", label: "Average Rating" },
            { number: "3+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gold-text text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.7), transparent)" }}
        />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1L6 7L11 1" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
