import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#063522] text-white">
      <div className="w-full px-8 py-8 sm:px-10 lg:px-16 xl:px-20">

        <div className="flex justify-around items-center h-[150px] grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center text-2xl text-[#6cae5b]">
                ♧
              </div>

              <h2 className="text-lg font-semibold">
                BodySense
              </h2>
            </div>

            <p className="mt-3 max-w-[220px] text-xs leading-5 text-gray-300">
              AI-powered posture assessment
              <br />
              for a healthier you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-medium">
              Quick Links
            </h3>

            <div className="flex flex-col gap-1.5">
              <a
                href="#how-it-works"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#features"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#about"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-3 text-xs font-medium">
              Follow Us
            </h3>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-300 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-300 hover:text-white"
              >
                ♥
              </a>

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-xs font-bold text-gray-300 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-[10px] font-bold text-gray-300 hover:text-white"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
          <p className="text-[11px] text-gray-400">
            © 2026 BodySense. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;