import Link from "next/link";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export const metadata = {
  title: "Tile Details | TileVault",
  description: "View detailed information about this premium tile.",
};

// Hardcoded tile data for UI (will be fetched from server with params.id later)
const tilesMap = {
  tile_001: {
    id: "tile_001",
    title: "Ceramic Blue Tide",
    description:
      "Premium ceramic tile with a mesmerizing ocean blue glaze finish. Perfect for bathrooms, spa areas, and kitchen backsplashes. The deep blue tones create a calming atmosphere while the glossy surface reflects light beautifully, adding dimension to any room.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
    category: "ceramic",
    price: 45.99,
    currency: "USD",
    dimensions: "60x60 cm",
    material: "Ceramic",
    inStock: true,
    tags: ["Blue", "Minimalist", "Modern"],
    creator: "Artisan Studios",
  },
  tile_002: {
    id: "tile_002",
    title: "Marble Veined Gold",
    description:
      "Elegant marble tile with stunning white and gold veining patterns. Ideal for luxurious living spaces, grand foyers, and statement walls. Each piece is unique, showcasing nature's artistry through distinctive vein patterns.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    category: "marble",
    price: 89.99,
    currency: "USD",
    dimensions: "80x80 cm",
    material: "Marble",
    inStock: true,
    tags: ["Gold", "Luxury", "Classic"],
    creator: "Luxe Surfaces",
  },
  tile_003: {
    id: "tile_003",
    title: "Geometric Noir Mosaic",
    description:
      "Bold geometric patterns in black and white porcelain. A statement piece for contemporary interiors. The sharp contrast creates visual drama while the precision-cut shapes add a sense of order and sophistication.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    category: "porcelain",
    price: 62.50,
    currency: "USD",
    dimensions: "45x45 cm",
    material: "Porcelain",
    inStock: true,
    tags: ["Geometric", "Bold", "Contemporary"],
    creator: "ModernForm Co.",
  },
  tile_004: {
    id: "tile_004",
    title: "Terracotta Sunrise",
    description:
      "Warm terracotta tile with natural earthy tones and artisan texture. Brings rustic charm to any room. Handcrafted using traditional methods, each tile carries the warmth of the earth and the soul of the maker.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    category: "terracotta",
    price: 34.75,
    currency: "USD",
    dimensions: "30x30 cm",
    material: "Terracotta",
    inStock: true,
    tags: ["Rustic", "Warm", "Artisan"],
    creator: "Earth & Clay",
  },
  tile_005: {
    id: "tile_005",
    title: "Subway Pearl White",
    description:
      "Classic subway tile in pearl white finish with beveled edges. Timeless elegance for kitchen backsplashes and bathroom walls. The pearlescent sheen adds subtle luxury to the beloved subway format.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
    category: "ceramic",
    price: 28.00,
    currency: "USD",
    dimensions: "7.5x15 cm",
    material: "Ceramic",
    inStock: true,
    tags: ["White", "Classic", "Minimalist"],
    creator: "Heritage Tiles",
  },
  tile_006: {
    id: "tile_006",
    title: "Slate Storm Grey",
    description:
      "Textured slate tile in dramatic storm grey. Natural stone beauty for floors and accent walls. The rugged surface provides excellent grip while the deep grey tones bring sophistication to outdoor and indoor spaces.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    category: "stone",
    price: 72.00,
    currency: "USD",
    dimensions: "60x90 cm",
    material: "Slate",
    inStock: false,
    tags: ["Grey", "Natural", "Textured"],
    creator: "Stone & Co.",
  },
  tile_007: {
    id: "tile_007",
    title: "Zellige Emerald",
    description:
      "Handcrafted Moroccan zellige tile in deep emerald green. Each piece is uniquely imperfect and beautiful, reflecting centuries of artisan tradition from Fez. The glazed surface catches and plays with light.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    category: "zellige",
    price: 95.00,
    currency: "USD",
    dimensions: "10x10 cm",
    material: "Clay",
    inStock: true,
    tags: ["Green", "Handcrafted", "Moroccan"],
    creator: "Fez Artisans",
  },
  tile_008: {
    id: "tile_008",
    title: "Hexagon Blush",
    description:
      "Delicate hexagonal tile in soft blush pink. Adds a touch of warmth and modernity to any space. The geometric shape creates dynamic patterns when arranged, from honeycombs to flowing organic layouts.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    category: "porcelain",
    price: 55.00,
    currency: "USD",
    dimensions: "20x23 cm",
    material: "Porcelain",
    inStock: true,
    tags: ["Pink", "Modern", "Hexagonal"],
    creator: "Forma Design",
  },
};

export default async function TileDetailPage({ params }) {
  const { id } = await params;
  const tile = tilesMap[id];

  if (!tile) {
    return (
      <>
        <Navbar />
        <div className="not-found-page">
          <div>
            <div className="not-found-code">404</div>
            <h1 className="not-found-title">Tile Not Found</h1>
            <p className="not-found-text">
              We couldn&apos;t find the tile you&apos;re looking for. It may
              have been removed or the link is incorrect.
            </p>
            <Link href="/all-tiles" className="btn btn-primary">
              Browse All Tiles
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="detail-page">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div style={{ marginBottom: "2rem" }}>
            <Link
              href="/all-tiles"
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                transition: "var(--transition-fast)",
              }}
            >
              ← Back to All Tiles
            </Link>
          </div>

          <div className="detail-grid">
            {/* Left – Large Image */}
            <div className="detail-image-wrapper">
              <img src={tile.image} alt={tile.title} />
            </div>

            {/* Right – Details */}
            <div className="detail-info">
              <span className="detail-category">{tile.category}</span>
              <h1 className="detail-title">{tile.title}</h1>
              <p className="detail-creator">
                by <span>{tile.creator}</span>
              </p>
              <p className="detail-description">{tile.description}</p>

              {/* Specs */}
              <div className="detail-specs">
                <div className="spec-item">
                  <div className="spec-label">Material</div>
                  <div className="spec-value">{tile.material}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Dimensions</div>
                  <div className="spec-value">{tile.dimensions}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Category</div>
                  <div className="spec-value" style={{ textTransform: "capitalize" }}>
                    {tile.category}
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Availability</div>
                  <div
                    className="spec-value"
                    style={{
                      color: tile.inStock
                        ? "var(--color-success)"
                        : "var(--color-danger)",
                    }}
                  >
                    {tile.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="detail-tags">
                {tile.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="detail-price-row">
                <div className="detail-price">
                  <span className="currency">{tile.currency}</span>$
                  {tile.price.toFixed(2)}
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  disabled={!tile.inStock}
                  style={
                    !tile.inStock
                      ? { opacity: 0.5, cursor: "not-allowed" }
                      : {}
                  }
                >
                  {tile.inStock ? "Add to Cart" : "Sold Out"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
