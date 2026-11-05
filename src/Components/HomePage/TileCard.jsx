import Link from "next/link";

const TileCard = ({ tile, index = 0 }) => {
  return (
    <div
      className="tile-card animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="tile-card-image">
        <img src={tile.image} alt={tile.title} loading="lazy" />
        <span className="tile-card-badge">{tile.category}</span>
        <span
          className={`tile-card-stock ${tile.inStock ? "in-stock" : "out-of-stock"}`}
        >
          {tile.inStock ? "In Stock" : "Sold Out"}
        </span>
      </div>
      <div className="tile-card-body">
        <h3 className="tile-card-title">{tile.title}</h3>
        <div className="tile-card-meta">
          <span className="tile-card-material">{tile.material}</span>
          <span className="tile-card-price">
            ${tile.price.toFixed(2)}
          </span>
        </div>
        <p className="tile-card-dims">📐 {tile.dimensions}</p>
        <div className="tile-card-footer">
          <Link
            href={`/tile/${tile.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
