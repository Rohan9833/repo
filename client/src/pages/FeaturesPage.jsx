import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  ScanLine,
  FileText,
  Lock,
  Activity,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Analyze posture using computer vision and body landmark detection to turn images into measurable posture data.",
  },
  {
    icon: ScanLine,
    title: "Front & Side Analysis",
    description:
      "Use two views to build a broader picture of body alignment instead of relying on a single angle.",
  },
  {
    icon: Activity,
    title: "Detailed Measurements",
    description:
      "Review posture measurements such as body lean, shoulder alignment, pelvic levelness, and other findings.",
  },
  {
    icon: BarChart3,
    title: "Individual Scores",
    description:
      "Each finding is presented with a score and severity so the report is easy to scan and understand.",
  },
  {
    icon: FileText,
    title: "Clear Assessment Report",
    description:
      "Get your results in a structured report that brings measurements, findings, and recommendations together.",
  },
  {
    icon: Lock,
    title: "Privacy-Focused Experience",
    description:
      "The assessment is designed with a privacy-first approach around the images used during your posture analysis.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6] text-[#17211d]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf7ed] via-white to-[#f4fbf5]">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm">
                Built around your assessment
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Everything you need to
                <span className="text-green-700"> understand your posture.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                BodySense combines posture detection, measurements, scoring,
                and reporting into one focused experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 transition group-hover:bg-green-100">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-slate-900">
                      {feature.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid items-center gap-8 rounded-3xl bg-[#eff9f1] p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2 text-green-700">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Designed for clarity
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
                  Your results should be easy to understand.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  BodySense organizes the technical analysis into visual
                  findings, scores, severity levels, and recommendations.
                </p>
              </div>

              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1b4d3e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#143a2f]"
              >
                Try BodySense
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
