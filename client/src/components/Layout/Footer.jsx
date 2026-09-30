import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#063522] text-white">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-900 text-2xl text-green-300">
                ♧
              </div>

              <h2 className="text-xl font-bold">
                BodySense
              </h2>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-green-100/70">
              AI-powered posture assessment designed to make posture
              information easier to understand.
            </p>

            <Link
              to="/assessment"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-300 transition hover:text-white"
            >
              Start an assessment
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>


          {/* Explore */}
          <div>

            <h3 className="mb-4 text-sm font-bold text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/how-it-works"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                How It Works
              </Link>

              <Link
                to="/features"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                to="/about"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/blog"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                Blog
              </Link>

            </div>

          </div>


          {/* Assessment */}
          <div>

            <h3 className="mb-4 text-sm font-bold text-white">
              Assessment
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/assessment"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                Start Assessment
              </Link>

              <Link
                to="/assessment"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                Upload Scans
              </Link>

              <Link
                to="/assessment"
                className="text-sm text-green-100/70 transition hover:text-white"
              >
                View Your Results
              </Link>

            </div>

          </div>


          {/* Stay Connected */}
          <div>

            <h3 className="mb-4 text-sm font-bold text-white">
              BodySense
            </h3>

            <p className="text-sm leading-6 text-green-100/70">
              Explore the platform, learn how the assessment works, and
              start when you're ready.
            </p>

            <Link
              to="/assessment"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
            >
              Get Started
            </Link>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-green-100/50">
            © 2026 BodySense. All rights reserved.
          </p>

          <p className="text-xs text-green-100/40">
            AI-powered posture assessment
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
