import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  ScanLine,
  Brain,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const steps = [
  {
    number: "01",
    icon: <Camera className="w-6 h-6" />,
    title: "Capture your posture",
    description:
      "Take or upload clear front and side images. The assessment is designed to work without special equipment.",
  },
  {
    number: "02",
    icon: <ScanLine className="w-6 h-6" />,
    title: "AI detects landmarks",
    description:
      "BodySense analyzes your images and identifies key body landmarks to understand alignment and posture.",
  },
  {
    number: "03",
    icon: <Brain className="w-6 h-6" />,
    title: "Measurements are calculated",
    description:
      "The assessment converts detected landmarks into posture measurements and individual scores.",
  },
  {
    number: "04",
    icon: <FileCheck2 className="w-6 h-6" />,
    title: "Receive your report",
    description:
      "Your results are organized into a clear report with findings, severity information, and recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6] text-[#17211d]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
          <div className="absolute top-40 -left-32 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                Simple assessment flow
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Understand your posture in
                <span className="text-green-700"> four simple steps.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                BodySense turns two posture images into a structured assessment
                so you can understand your alignment without a complicated setup.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1b4d3e] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-[#143a2f]"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/features"
                  className="inline-flex items-center rounded-full border border-green-200 bg-white px-6 py-3.5 text-sm font-bold text-green-800 transition hover:bg-green-50"
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                The process
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From image to insight.
              </h2>
              <p className="mt-4 text-slate-600">
                Every stage is designed to keep the experience straightforward
                while giving you useful posture information.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl border border-green-100 bg-[#f8fcf9] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-green-100 transition group-hover:text-green-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="rounded-3xl bg-[#063522] p-8 text-white shadow-2xl shadow-green-950/10 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-300">
                    Ready when you are
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                    See what your posture assessment can reveal.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-green-100/80">
                    Start with your front and side images and let BodySense
                    organize the analysis for you.
                  </p>
                </div>

                <Link
                  to="/assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
                >
                  Start Assessment
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

export default HowItWorks;
