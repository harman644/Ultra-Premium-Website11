import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    name: "Emma Hall",
    rating: 5,
    text: "Preet is the most friendly person and my car has never looked so good! The attention to detail is incredible. I would highly recommend.",
    initial: "E",
  },
  {
    name: "Sarabjot Singh",
    rating: 5,
    text: "Very impressed with the quality of work. Super reliable and hardworking. My car came back looking brand new — will definitely be a regular customer.",
    initial: "S",
  },
  {
    name: "Arshdeep Singh",
    rating: 5,
    text: "Great local guy with good pricing. Really knows his stuff and is super flexible with timing. Easy to deal with and the results speak for themselves.",
    initial: "A",
  },
  {
    name: "Samantha Palmer",
    rating: 5,
    text: "Amazing local business. The whole experience was completely hassle free and absolutely worth the money. My car looks fantastic!",
    initial: "S",
  },
  {
    name: "Rebecca Huxley",
    rating: 5,
    text: "Professional, stress-free, and incredible attention to detail. My car honestly looks brand new. Cannot recommend Preets enough!",
    initial: "R",
  },
  {
    name: "Marko",
    rating: 5,
    text: "Excellent job — my car looks absolutely amazing. Very happy with the service and will be coming back for sure.",
    initial: "M",
  },
  {
    name: "Maninder Lahoria",
    rating: 5,
    text: "Affordable pricing and great service overall. Gurpreet was professional and thorough. Highly satisfied with the result.",
    initial: "M",
  },
  {
    name: "Param Kaur",
    rating: 5,
    text: "Excellent service from start to finish. Very professional and the results were outstanding. Would definitely recommend to everyone.",
    initial: "P",
  },
  {
    name: "Darren Graham",
    rating: 5,
    text: "Amazing service — arrived on time and did an outstanding job. My car has never been this clean. 10/10!",
    initial: "D",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#d4af37" : "rgba(212,175,55,0.2)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;

  const total = reviews.length;
  const maxIndex = total - visibleCount;

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, maxIndex]);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 overflow-hidden" style={{ background: "#0b0b0b" }}>
      <div className="gold-divider w-full max-w-xs mb-0 absolute left-1/2 -translate-x-1/2" style={{ top: "auto" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Client Reviews</span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </div>
          <h2
            className="text-white font-bold section-title-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Our Clients <span className="gold-text italic">Say</span>
          </h2>
          {/* 5-star overall */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-white/50 text-sm">5.0 · {total} reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 1.25rem / ${visibleCount})))` }}
          >
            {reviews.map((review) => (
              <div
                key={review.name + review.text.slice(0, 10)}
                className="shrink-0 glass-light p-7 flex flex-col"
                style={{
                  borderRadius: "4px",
                  width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 1.25) / visibleCount}rem)`,
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-5xl leading-none mb-3 opacity-20"
                  style={{ color: "#d4af37", fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </div>

                <p
                  className="text-white/70 leading-relaxed flex-1 text-sm mb-5"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem" }}
                >
                  {review.text}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(212,175,55,0.12)" }}>
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-black"
                    style={{ background: "linear-gradient(135deg, #d4af37, #f0d060)" }}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="w-10 h-10 flex items-center justify-center border border-[rgba(212,175,55,0.3)] text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] disabled:opacity-30 transition-all"
            style={{ borderRadius: "2px" }}
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                style={{
                  width: current === i ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: current === i ? "#d4af37" : "rgba(212,175,55,0.25)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current >= maxIndex}
            className="w-10 h-10 flex items-center justify-center border border-[rgba(212,175,55,0.3)] text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] disabled:opacity-30 transition-all"
            style={{ borderRadius: "2px" }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
