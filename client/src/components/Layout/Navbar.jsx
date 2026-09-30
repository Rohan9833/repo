import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green-100/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="BodySense home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-2xl font-bold text-green-700">
            ♧
          </div>

          <span className="text-[22px] font-bold tracking-tight text-[#17211d]">
            BodySense
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-slate-700 transition hover:text-green-700"
          >
            How It Works
          </Link>

          <Link
            to="/features"
            className="text-sm font-medium text-slate-700 transition hover:text-green-700"
          >
            Features
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-green-700"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className="text-sm font-medium text-slate-700 transition hover:text-green-700"
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate("/assessment")}
          className="rounded-full bg-[#1b4d3e] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-green-900/10 transition duration-300 hover:bg-[#143a2f] hover:shadow-lg"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
