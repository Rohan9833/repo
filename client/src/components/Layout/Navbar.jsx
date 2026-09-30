import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SiteLayout.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { to: "/how-it-works", label: "How It Works" },
    { to: "/features", label: "Features" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-logo" aria-label="BodySense home">
          <span className="site-nav-logo-mark">♧</span>
          <span className="site-nav-logo-text">BodySense</span>
        </Link>

        <div className="site-nav-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`site-nav-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button type="button" onClick={() => navigate("/assessment")} className="site-nav-cta">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
