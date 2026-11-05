import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | TileVault",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div>
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary btn-lg">
            🏠 Go Home
          </Link>
          <Link href="/all-tiles" className="btn btn-outline btn-lg">
            🖼️ Browse Tiles
          </Link>
        </div>
      </div>
    </div>
  );
}
