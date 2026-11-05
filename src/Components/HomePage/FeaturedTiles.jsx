import Link from "next/link";
import TileCard from "./TileCard";

const FeaturedTiles = () => {
  // Top 4 featured tiles (hardcoded for UI – will be fetched from server later)
  const tiles = [
    {
      id: "tile_001",
      title: "Ceramic Blue Tide",
      description: "Premium ceramic tile with a mesmerizing ocean blue glaze finish.",
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80",
      category: "ceramic",
      price: 45.99,
      currency: "USD",
      dimensions: "60x60 cm",
      material: "Ceramic",
      inStock: true,
    },
    {
      id: "tile_002",
      title: "Marble Veined Gold",
      description: "Elegant marble tile with stunning white and gold veining patterns.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
      category: "marble",
      price: 89.99,
      currency: "USD",
      dimensions: "80x80 cm",
      material: "Marble",
      inStock: true,
    },
    {
      id: "tile_003",
      title: "Geometric Noir Mosaic",
      description: "Bold geometric patterns in black and white porcelain.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      category: "porcelain",
      price: 62.50,
      currency: "USD",
      dimensions: "45x45 cm",
      material: "Porcelain",
      inStock: true,
    },
    {
      id: "tile_004",
      title: "Terracotta Sunrise",
      description: "Warm terracotta tile with natural earthy tones and artisan texture.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      category: "terracotta",
      price: 34.75,
      currency: "USD",
      dimensions: "30x30 cm",
      material: "Terracotta",
      inStock: true,
    },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Curated Selection</span>
          <h2 className="section-title">Featured Tiles</h2>
          <p className="section-subtitle">
            Handpicked from our finest collections — discover the tiles that
            designers love the most.
          </p>
        </div>

        <div className="tiles-grid">
          {tiles.map((tile, index) => (
            <TileCard key={tile.id} tile={tile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTiles;
