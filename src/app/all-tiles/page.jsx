import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import TileCard from "@/Components/HomePage/TileCard";

export const metadata = {
  title: "All Tiles | TileVault",
  description: "Browse our complete collection of premium tiles.",
};

const allTiles = [
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
  {
    id: "tile_005",
    title: "Subway Pearl White",
    description: "Classic subway tile in pearl white finish with beveled edges.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    category: "ceramic",
    price: 28.00,
    currency: "USD",
    dimensions: "7.5x15 cm",
    material: "Ceramic",
    inStock: true,
  },
  {
    id: "tile_006",
    title: "Slate Storm Grey",
    description: "Textured slate tile in dramatic storm grey.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "stone",
    price: 72.00,
    currency: "USD",
    dimensions: "60x90 cm",
    material: "Slate",
    inStock: false,
  },
  {
    id: "tile_007",
    title: "Zellige Emerald",
    description: "Handcrafted Moroccan zellige tile in deep emerald green.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    category: "zellige",
    price: 95.00,
    currency: "USD",
    dimensions: "10x10 cm",
    material: "Clay",
    inStock: true,
  },
  {
    id: "tile_008",
    title: "Hexagon Blush",
    description: "Delicate hexagonal tile in soft blush pink.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    category: "porcelain",
    price: 55.00,
    currency: "USD",
    dimensions: "20x23 cm",
    material: "Porcelain",
    inStock: true,
  },
];

const AllTilesPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem", minHeight: "100vh" }}>
        <div className="container-custom">
          {/* Search Hero */}
          <div className="search-hero">
            <h1 className="search-hero-title">All Tiles</h1>
            <p className="search-hero-subtitle">
              Explore our entire collection of premium tiles. Find the perfect
              match for your space.
            </p>
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                id="tile-search"
                className="search-input"
                type="text"
                placeholder="Search tiles by title..."
              />
            </div>
          </div>

          {/* Tiles Grid */}
          <div className="tiles-grid" style={{ paddingBottom: "4rem" }}>
            {allTiles.map((tile, index) => (
              <TileCard key={tile.id} tile={tile} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllTilesPage;
