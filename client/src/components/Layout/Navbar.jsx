import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[82px] flex items-center justify-around">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-[#5b9d57] text-3xl font-bold">♧</div>

          <span className="text-[22px] font-semibold text-[#17211d]">
            BodySense
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#how-it-works"
            className="text-sm text-[#17211d] hover:text-[#347a3b] transition"
          >
            How It Works
          </a>

          <a
            href="#features"
            className="text-sm text-[#17211d] hover:text-[#347a3b] transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm text-[#17211d] hover:text-[#347a3b] transition"
          >
            About Us
          </a>

          <a
            href="#blog"
            className="text-sm text-[#17211d] hover:text-[#347a3b] transition"
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <button className=" !pt-[8px] !pb-[7px] !pr-[13px] !pl-[13px] bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
      Get Started
    </button>
      </div>
    </nav>
  );
};

export default Navbar;
