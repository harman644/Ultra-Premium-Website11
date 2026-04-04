export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "#0b0b0b" }}>
      <div className="gold-divider w-full max-w-xs mb-0 absolute left-1/2 -translate-x-1/2" style={{ top: "auto" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Get In Touch</span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </div>
          <h2
            className="text-white font-bold section-title-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Contact <span className="gold-text italic">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="reveal-left space-y-6">
            {/* Phone */}
            <a
              href="tel:0410194829"
              className="flex items-start gap-4 glass-light p-5 group transition-all hover:border-[rgba(212,175,55,0.4)]"
              style={{ borderRadius: "4px", textDecoration: "none" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.1)", borderRadius: "2px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 10.79 19.79 19.79 0 01.92 2.22 2 2 0 012.92 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.21 14l.71 2.92z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Phone</p>
                <p className="text-white text-lg group-hover:text-[#d4af37] transition-colors">0410 194 829</p>
                <p className="text-white/30 text-xs mt-0.5">Tap to call</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:chahalgurpreet46984@gmail.com"
              className="flex items-start gap-4 glass-light p-5 group transition-all hover:border-[rgba(212,175,55,0.4)]"
              style={{ borderRadius: "4px", textDecoration: "none" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.1)", borderRadius: "2px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Email</p>
                <p className="text-white text-sm group-hover:text-[#d4af37] transition-colors break-all">
                  chahalgurpreet46984@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div
              className="flex items-start gap-4 glass-light p-5"
              style={{ borderRadius: "4px" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.1)", borderRadius: "2px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Location</p>
                <p className="text-white">190 Dixon Drive</p>
                <p className="text-white/40 text-xs mt-0.5">Mobile service — we come to you</p>
              </div>
            </div>

            {/* Working Hours */}
            <div
              className="glass-light p-5"
              style={{ borderRadius: "4px" }}
            >
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">Working Hours</p>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "7:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "By Appointment" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <span className="text-[#d4af37] text-sm font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/61410194829?text=Hi%20Gurpreet%2C%20I'd%20like%20to%20enquire%20about%20car%20detailing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-5 transition-all group"
              style={{
                background: "rgba(37,211,102,0.08)",
                border: "1px solid rgba(37,211,102,0.25)",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <p className="text-[#25d366] text-sm font-semibold">Chat on WhatsApp</p>
                <p className="text-white/40 text-xs">Quick response guaranteed</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(37,211,102,0.5)" strokeWidth="2" className="ml-auto group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Map Embed */}
          <div className="reveal-right">
            <div
              className="w-full h-full min-h-[400px] overflow-hidden glass-light"
              style={{ borderRadius: "4px", position: "relative" }}
            >
              <iframe
                title="Preets Mobile Car Wash Location - 190 Dixon Drive"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.219!2d152.8!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiUyAxNTLCsDQ4JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", filter: "grayscale(1) invert(0.9) hue-rotate(180deg) brightness(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay branding */}
              <div
                className="absolute bottom-4 left-4 glass px-4 py-2"
                style={{ borderRadius: "2px" }}
              >
                <p className="text-[#d4af37] text-xs font-semibold tracking-wide">Preets Mobile Car Wash</p>
                <p className="text-white/40 text-xs">190 Dixon Drive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
