const services = [
  {
    id: "mini",
    name: "Mini Detail",
    price: "Call for Pricing",
    image: "/images/sedan-grey.jpeg",
    popular: false,
    icon: "✦",
    includes: [
      "Exterior wash",
      "Wheels cleaned",
      "Tyre shine",
      "Windows cleaned",
      "Full vacuum",
      "Interior wipe",
      "Interior polish & fine shine",
    ],
    note: null,
  },
  {
    id: "basic",
    name: "Basic Detail",
    price: "From $90",
    sedanPrice: "$90",
    suvPrice: "$110",
    priceSub: "Sedan / SUV, 4x4",
    image: "/images/steering-wash.jpeg",
    popular: false,
    icon: "◈",
    includes: [
      "Hand wash & dry",
      "Wheels cleaned",
      "Tyre shine",
      "Exterior windows cleaned",
      "Full interior vacuum",
      "Dash & console wipe",
      "Interior windows cleaned",
    ],
    note: null,
  },
  {
    id: "full",
    name: "Full Detail",
    price: "From $270",
    sedanPrice: "$270",
    suvPrice: "$300",
    priceSub: "Sedan / SUV, 4x4",
    image: "/images/audi-interior.jpeg",
    popular: true,
    icon: "❖",
    includes: [
      "Everything in Basic Detail",
      "Seats & carpet shampoo",
      "Stain removal",
      "Deep clean all surfaces",
      "Interior polish & UV protect",
      "Deodorised",
      "Pre-rinse & hand wash",
      "Wheels deep cleaned",
      "Door jambs cleaned",
      "Bug & tar removal",
      "Hand polish (gloss)",
      "Headlight restoration",
    ],
    note: null,
  },
  {
    id: "polish",
    name: "Detail Polish & Buffing",
    price: "Call for Details",
    image: "/images/suv-black.jpeg",
    popular: false,
    icon: "◇",
    includes: [
      "Machine polish & buff",
      "Swirl mark removal",
      "Paint correction",
      "High-gloss finish",
      "UV protection coating",
      "Headlight restoration",
    ],
    note: "Pricing varies based on paint condition and vehicle size. Call or message for a quote.",
  },
  {
    id: "pickup",
    name: "Pickup & Drop",
    price: "Distance Based",
    image: "/images/suv-white.jpeg",
    popular: false,
    icon: "⬡",
    includes: [
      "We collect your vehicle",
      "Full professional detail",
      "Returned to your location",
      "Available on request",
      "Conditions apply",
    ],
    note: "Available based on distance. Contact us to discuss.",
    localOnly: true,
  },
];

export default function Services() {
  const scrollToBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative" style={{ background: "#0b0b0b" }}>
      {/* Top divider */}
      <div className="gold-divider w-full max-w-xs mb-0 absolute top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Our Services</span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </div>
          <h2
            className="text-white font-bold section-title-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Choose Your <span className="gold-text italic">Detail Package</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
            Every vehicle deserves the highest standard of care. Select the package that suits your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal service-card relative flex flex-col overflow-hidden gold-border`}
              style={{
                background: "#0f0f0f",
                borderRadius: "4px",
                transitionDelay: `${i * 0.1}s`,
                border: service.popular
                  ? "1px solid rgba(212,175,55,0.5)"
                  : "1px solid rgba(212,175,55,0.15)",
              }}
            >
              {/* Most Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                  <span className="popular-badge rounded-b-sm">Most Popular</span>
                </div>
              )}

              {/* Image */}
              <div className="gallery-item relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={service.image}
                  alt={`${service.name} car detailing package`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,11,11,0.9) 100%)" }}
                />
                {/* Icon */}
                <div className="absolute bottom-3 right-4">
                  <span className="text-[#d4af37] text-2xl opacity-60">{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1" style={{ paddingTop: service.popular ? "1.75rem" : "1.5rem" }}>
                <h3
                  className="text-white font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}
                >
                  {service.name}
                </h3>

                {/* Price */}
                {"sedanPrice" in service && service.sedanPrice ? (
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 text-xs tracking-widest uppercase w-14">Sedan</span>
                      <span className="gold-text text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {service.sedanPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 text-xs tracking-widest uppercase w-14">SUV</span>
                      <span
                        className="text-lg font-bold px-2 py-0.5 rounded-sm"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          background: "rgba(212,175,55,0.12)",
                          border: "1px solid rgba(212,175,55,0.4)",
                          color: "#d4af37",
                        }}
                      >
                        {"suvPrice" in service ? service.suvPrice : ""}
                      </span>
                      <span className="text-white/30 text-xs">4x4</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="gold-text text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.price}
                    </span>
                    {service.priceSub && (
                      <span className="text-white/30 text-xs ml-2 tracking-wide">{service.priceSub}</span>
                    )}
                  </div>
                )}

                {/* Divider */}
                <div className="gold-divider w-full mb-4" style={{ opacity: 0.3 }} />

                {/* Includes list */}
                <ul className="flex-1 space-y-2 mb-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/60 text-sm" style={{ fontFamily: "'EB Garamond', serif" }}>
                      <span className="text-[#d4af37] text-xs mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Local Only highlight */}
                {"localOnly" in service && service.localOnly && (
                  <div
                    className="flex items-center gap-2 mb-3 px-3 py-2"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.5)",
                      borderRadius: "3px",
                    }}
                  >
                    <span className="text-[#d4af37] text-sm">📍</span>
                    <span
                      className="text-[#d4af37] text-xs font-bold tracking-[0.15em] uppercase"
                    >
                      Only for Local
                    </span>
                  </div>
                )}

                {/* Note */}
                {service.note && (
                  <p className="text-white/30 text-xs italic mb-4">{service.note}</p>
                )}

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className={service.popular ? "btn-gold" : "btn-outline-gold"}
                  style={{ borderRadius: "2px", fontSize: "0.7rem" }}
                >
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra cost notice */}
        <div className="reveal mt-10 glass-light p-6 text-center" style={{ borderRadius: "4px" }}>
          <p className="text-[#d4af37] text-sm font-semibold tracking-wide mb-2">⚠ Additional Charges May Apply</p>
          <p className="text-white/50 text-sm" style={{ fontFamily: "'EB Garamond', serif" }}>
            Extra dirty vehicles (dog hair, sand, excessive mess) or add-ons such as scratch removal and extra polishing 
            may incur additional costs. Please mention any special requirements when booking.
          </p>
        </div>
      </div>
    </section>
  );
}
