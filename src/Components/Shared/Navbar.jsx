"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Simulate logged-out state for UI
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">T</span>
          TileVault
        </Link>

        {/* Center Links */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <Link href="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-tiles" className="nav-link">
              All Tiles
            </Link>
          </li>
          <li>
            <Link href="/my-profile" className="nav-link">
              My Profile
            </Link>
          </li>
          {/* Mobile-only auth links */}
          {mobileOpen && (
            <li className="nav-actions mobile">
              {isLoggedIn ? (
                <button className="btn btn-danger btn-sm">Logout</button>
              ) : (
                <Link href="/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
              )}
            </li>
          )}
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          {isLoggedIn ? (
            <>
              <Link href="/my-profile" className="btn btn-ghost btn-sm">
                👤 Profile
              </Link>
              <button className="btn btn-danger btn-sm">Logout</button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
