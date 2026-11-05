import Link from "next/link";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export const metadata = {
  title: "Update Profile | TileVault",
  description: "Update your profile information.",
};

const UpdateProfilePage = () => {
  return (
    <>
      <Navbar />
      <main className="update-page">
        <div className="container-custom">
          <div className="update-card">
            <div className="update-header">
              <div className="auth-header-icon">✏️</div>
              <h1 className="update-title">Update Information</h1>
              <p className="update-subtitle">
                Update your name and profile image below
              </p>
            </div>

            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="update-name">
                  Full Name
                </label>
                <input
                  id="update-name"
                  className="form-input"
                  type="text"
                  placeholder="Enter your name"
                  defaultValue="Alex Johnson"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="update-image">
                  Image URL
                </label>
                <input
                  id="update-image"
                  className="form-input"
                  type="url"
                  placeholder="https://example.com/your-photo.jpg"
                  defaultValue="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg">
                Update Information
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link
                href="/my-profile"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  transition: "var(--transition-fast)",
                }}
              >
                ← Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UpdateProfilePage;
