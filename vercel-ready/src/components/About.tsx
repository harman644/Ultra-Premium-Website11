export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "#0d0d0d" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="gallery-item rounded-sm overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/images/audi-interior.jpeg"
                  alt="Luxury car interior after professional detailing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="gallery-item rounded-sm overflow-hidden flex-1">
                  <img
                    src="/images/suv-black.jpeg"
                    alt="Black SUV exterior after car wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="gallery-item rounded-sm overflow-hidden flex-1">
                  <img
                    src="/images/seats-clean.jpeg"
                    alt="Clean car seats after interior detailing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating experience badge */}
            <div
              className="absolute -bottom-5 -right-2 lg:-right-8 glass p-5 text-center"
              style={{ borderRadius: "2px", minWidth: "140px" }}
            >
              <p className="gold-text text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>3+</p>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-1">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">About Us</span>
            </div>

            <h2
              className="text-white font-bold mb-6 section-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.15",
              }}
            >
              Passion for Perfection,
              <br />
              <span className="gold-text italic">Delivered to You</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-5" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
              Hi, I'm <span className="text-[#d4af37]">Gurpreet Singh</span> — the founder and sole detailer behind Preets Mobile Car Wash. 
              My passion is simple: treating every vehicle with the same care I'd give my own.
            </p>

            <p className="text-white/60 leading-relaxed mb-8" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
              I come to <em>you</em> — whether that's your home, your workplace, or wherever is most convenient. 
              No queues. No waiting. Just a spotless, professionally detailed car, right at your door.
              My commitment is to deliver luxury-level results with meticulous attention to every surface.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: "✦", title: "Mobile Service", desc: "We come to you — home or work" },
                { icon: "✦", title: "Eco Products", desc: "Safe, premium cleaning agents" },
                { icon: "✦", title: "Fully Insured", desc: "Your vehicle is in safe hands" },
                { icon: "✦", title: "Quality Guarantee", desc: "100% satisfaction commitment" },
              ].map((feat) => (
                <div key={feat.title} className="flex gap-3">
                  <span className="text-[#d4af37] text-xs mt-1">{feat.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium tracking-wide">{feat.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector("#booking");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold"
                style={{ borderRadius: "2px" }}
              >
                Book a Detail
              </button>
              <a
                href="tel:0410194829"
                className="btn-outline-gold text-center"
                style={{ borderRadius: "2px" }}
              >
                0410 194 829
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
