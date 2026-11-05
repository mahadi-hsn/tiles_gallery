import Link from "next/link";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export const metadata = {
  title: "My Profile | TileVault",
  description: "View and manage your TileVault profile.",
};

const MyProfilePage = () => {
  // Simulated user data for UI design
  const user = {
    name: "Alex Johnson",
    email: "alex@tilevault.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    joinDate: "December 2024",
  };

  return (
    <>
      <Navbar />
      <main className="profile-page">
        <div className="container-custom">
          <div className="profile-card">
            <img
              className="profile-avatar"
              src={user.image}
              alt={user.name}
            />
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>

            {/* Stats */}
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Saved Tiles</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8</div>
                <div className="stat-label">Collections</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{user.joinDate}</div>
                <div className="stat-label">Joined</div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/update-profile" className="btn btn-primary btn-lg">
                ✏️ Update Information
              </Link>
              <button className="btn btn-danger btn-lg">
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyProfilePage;
