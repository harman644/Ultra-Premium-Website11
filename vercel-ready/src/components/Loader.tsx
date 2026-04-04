interface LoaderProps {
  loaded: boolean;
}

export default function Loader({ loaded }: LoaderProps) {
  return (
    <div className={`loader-overlay ${loaded ? "fade-out" : ""}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="loader-ring" />
        <div className="text-center">
          <p className="gold-text text-lg font-semibold tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Preets
          </p>
          <p className="text-xs tracking-[0.4em] text-white/40 uppercase mt-1">Mobile Car Wash</p>
        </div>
      </div>
    </div>
  );
}
