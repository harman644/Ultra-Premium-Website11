import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  carType: "",
  service: "",
  date: "",
  time: "",
  address: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.carType) newErrors.carType = "Please select car type";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";
    if (!form.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
  await emailjs.send(
    "service_wycnx3q",
    "template_dperr56",
    {
      user_name: form.name,
      phone: form.phone,
      user_email: form.email,
      car_type: form.carType,
      service: form.service,
      date: form.date,
    },
    "ce7JgkzChoUOzKKeJ"
  );

  alert("Sent ✅");

} catch (error) {
  alert("Error ❌");
}


        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send booking.");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setErrors({ submit: message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  return (
    <section id="booking" className="py-24 lg:py-32 relative" style={{ background: "#0d0d0d" }}>
      <div className="gold-divider w-full max-w-xs mb-0 absolute top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Online Booking</span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </div>
          <h2
            className="text-white font-bold section-title-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Book Your <span className="gold-text italic">Detail</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
            Fill in your details and we'll be in touch to confirm your booking. Quick, easy, and convenient.
          </p>
        </div>

        {success ? (
          <div className="reveal success-banner p-10 text-center" style={{ borderRadius: "4px" }}>
            <p className="text-4xl mb-4">✦</p>
            <h3
              className="text-[#d4af37] text-2xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Booking Request Sent!
            </h3>
            <p className="text-white/60" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}>
              Thank you for choosing Preets Mobile Car Wash. Your email client should open with the booking details.
              Gurpreet will confirm your booking shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button
                onClick={() => setSuccess(false)}
                className="btn-outline-gold"
                style={{ borderRadius: "2px" }}
              >
                Make Another Booking
              </button>
              <a
                href="https://wa.me/61410194829"
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-center"
                style={{ borderRadius: "2px" }}
              >
                WhatsApp Gurpreet
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal glass p-8 lg:p-12" style={{ borderRadius: "4px" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="luxury-input"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="04xx xxx xxx"
                  className="luxury-input"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="luxury-input"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Car Type */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Car Type *</label>
                <select
                  name="carType"
                  value={form.carType}
                  onChange={handleChange}
                  className="luxury-input"
                  style={{ appearance: "none" }}
                >
                  <option value="">Select car type...</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV / 4WD</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Ute">Ute / Van</option>
                  <option value="Other">Other</option>
                </select>
                {errors.carType && <p className="text-red-400 text-xs mt-1">{errors.carType}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Service *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="luxury-input"
                  style={{ appearance: "none" }}
                >
                  <option value="">Select a service...</option>
                  <option value="Mini Detail">Mini Detail</option>
                  <option value="Basic Detail – Sedan ($90)">Basic Detail – Sedan ($90)</option>
                  <option value="Basic Detail – SUV/4x4 ($110)">Basic Detail – SUV / 4x4 ($110)</option>
                  <option value="Full Detail – Sedan (From $270)">Full Detail – Sedan ($270)</option>
                  <option value="Full Detail – SUV ($300)">Full Detail – SUV ($300)</option>
                  <option value="Detail Polish & Buffing">Detail Polish & Buffing (Call for Details)</option>
                  <option value="Pickup & Drop">Pickup & Drop</option>
                </select>
                {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  min={getTomorrow()}
                  onChange={handleChange}
                  className="luxury-input"
                  style={{ colorScheme: "dark" }}
                />
                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="luxury-input"
                  style={{ appearance: "none" }}
                >
                  <option value="">Select time...</option>
                  <option value="7:00 AM">7:00 AM</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
                {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Service Address *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address, suburb"
                  className="luxury-input"
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Special Requests (Optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special notes or requirements..."
                  rows={3}
                  className="luxury-input resize-none"
                />
              </div>
            </div>

            {/* Submit error */}
            {errors.submit && (
              <div className="mt-6 px-4 py-3 text-sm text-red-400 border border-red-400/30 rounded" style={{ background: "rgba(220,38,38,0.08)" }}>
                ⚠ {errors.submit}
              </div>
            )}

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full sm:w-auto"
                style={{ borderRadius: "2px", opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? "Sending..." : "Submit Booking Request"}
              </button>
              <a
                href="https://wa.me/61410194829?text=Hi%20Gurpreet%2C%20I'd%20like%20to%20book%20a%20car%20detail"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold w-full sm:w-auto text-center"
                style={{ borderRadius: "2px" }}
              >
                Or Book via WhatsApp
              </a>
            </div>

            <p className="text-white/30 text-xs mt-4 text-center">
              Your booking goes directly to Gurpreet. He'll confirm within a few hours.
              Prefer an instant reply? Use the WhatsApp button above.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
