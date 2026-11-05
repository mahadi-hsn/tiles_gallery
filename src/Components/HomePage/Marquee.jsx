const Marquee = () => {
  const items = [
    { text: "New Arrivals:", highlight: "Ceramic Blue Tide" },
    { text: "Weekly Feature:", highlight: "Modern Geometric Patterns" },
    { text: "Join the Community — Get", highlight: "20% Off First Order" },
    { text: "Trending Now:", highlight: "Zellige Emerald Collection" },
    { text: "Free Shipping on orders over", highlight: "$150" },
    { text: "New Arrivals:", highlight: "Marble Veined Gold" },
    { text: "Weekly Feature:", highlight: "Modern Geometric Patterns" },
    { text: "Join the Community — Get", highlight: "20% Off First Order" },
    { text: "Trending Now:", highlight: "Zellige Emerald Collection" },
    { text: "Free Shipping on orders over", highlight: "$150" },
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span className="marquee-item" key={index}>
            {item.text} <span className="highlight">{item.highlight}</span>
            <span className="divider"></span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
