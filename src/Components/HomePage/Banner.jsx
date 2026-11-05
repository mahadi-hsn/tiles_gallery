import Link from "next/link";

const Banner = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Luxury tiled interior"
        />
      </div>
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Premium Collection 2024
        </div>
        <h1 className="hero-title">Discover Your Perfect Aesthetic</h1>
        <p className="hero-subtitle">
          Explore our curated gallery of premium tiles — from minimalist ceramics
          to bold geometric patterns. Transform your space into a work of art.
        </p>
        <div className="hero-actions">
          <Link href="/all-tiles" className="btn btn-primary btn-lg">
            Browse Now
          </Link>
          <Link href="/register" className="btn btn-outline btn-lg">
            Join Community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
