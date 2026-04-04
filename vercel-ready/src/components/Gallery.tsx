import { useState } from "react";

const galleryImages = [
  { src: "/images/audi-interior.jpeg", alt: "Audi luxury interior after deep clean", label: "Interior Detail" },
  { src: "/images/suv-black.jpeg", alt: "Black Land Rover SUV after exterior wash", label: "Exterior Polish" },
  { src: "/images/car-wash-foam.jpeg", alt: "BMW being hand washed with foam", label: "Hand Wash" },
  { src: "/images/steering-wash.jpeg", alt: "Steering wheel interior cleaning", label: "Interior Clean" },
  { src: "/images/seats-clean.jpeg", alt: "Clean leather seats after detailing", label: "Seat Shampoo" },
  { src: "/images/floor-clean.jpeg", alt: "Car floor and carpet after cleaning", label: "Deep Clean" },
  { src: "/images/suv-white.jpeg", alt: "White Porsche Cayenne after exterior detail", label: "Exterior Shine" },
  { src: "/images/sedan-grey.jpeg", alt: "Grey Renault Megane sedan after car wash", label: "Full Wash" },
  { src: "/images/door-clean.jpeg", alt: "Car door interior cleaned and polished", label: "Door Detail" },
  { src: "/images/interior-1.jpeg", alt: "Range Rover luxury interior detailing", label: "Luxury Detail" },
  { src: "/images/interior-rear.jpeg", alt: "Car rear interior cleaned with sunroof", label: "Interior Rear" },
  { src: "/images/sedan-silver.png", alt: "Silver sedan exterior after professional car wash", label: "Exterior Wash" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32" style={{ background: "#0d0d0d" }}>
      <div className="gold-divider w-full max-w-xs mb-0 absolute left-1/2 -translate-x-1/2" style={{ top: "auto" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Our Work</span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </div>
          <h2
            className="text-white font-bold section-title-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The <span className="gold-text italic">Results</span> Speak
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
            Every car leaves our hands spotless. Browse through a selection of our recent work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal gallery-item relative cursor-pointer group ${
                i === 0 || i === 4 || i === 8 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                transitionDelay: `${(i % 4) * 0.08}s`,
                aspectRatio: i === 0 || i === 4 || i === 8 ? "1" : "4/3",
              }}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(11,11,11,0.65)" }}
              >
                <p className="text-[#d4af37] text-xs tracking-[0.25em] uppercase font-semibold">{img.label}</p>
                <div className="w-8 h-px bg-[#d4af37] mt-2 opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
              style={{ borderRadius: "4px" }}
            />
            <p className="text-center text-[#d4af37] text-xs tracking-widest uppercase mt-3">
              {galleryImages[selected].label}
            </p>
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-black border border-white/10 rounded-full"
            >
              ✕
            </button>
            {/* Prev/Next */}
            <button
              onClick={() => setSelected((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#d4af37] glass hover:bg-[rgba(212,175,55,0.15)] transition-all"
              style={{ borderRadius: "2px" }}
            >
              ←
            </button>
            <button
              onClick={() => setSelected((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#d4af37] glass hover:bg-[rgba(212,175,55,0.15)] transition-all"
              style={{ borderRadius: "2px" }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
