import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  Eye,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6] text-[#17211d]">
      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-[#e8f6eb] via-white to-[#f5fbf6]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm">
                <HeartPulse className="h-4 w-4" />
                About BodySense
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Making posture assessment
                <span className="text-green-700"> easier to understand.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                BodySense is an AI-powered posture assessment experience built
                to turn posture images into clear, structured information.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-green-100 bg-[#f8fcf9] p-7">
                <Target className="h-7 w-7 text-green-700" />
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  Our purpose
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Give people a simpler way to explore posture measurements
                  without turning the assessment into a complicated process.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-[#f8fcf9] p-7">
                <Eye className="h-7 w-7 text-green-700" />
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  Our approach
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Present technical posture analysis through readable findings,
                  visual hierarchy, and a report that is easy to navigate.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-[#f8fcf9] p-7">
                <ShieldCheck className="h-7 w-7 text-green-700" />
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  Our focus
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Keep the assessment experience focused, transparent, and
                  centered around the information produced from your scans.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="rounded-3xl bg-[#063522] p-8 text-white sm:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-300">
                  The BodySense experience
                </p>

                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                  From your images to a clearer view of your posture.
                </h2>

                <p className="mt-5 leading-7 text-green-100/80">
                  Explore the assessment flow and see how BodySense turns
                  front and side posture scans into a structured report.
                </p>

                <Link
                  to="/how-it-works"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
