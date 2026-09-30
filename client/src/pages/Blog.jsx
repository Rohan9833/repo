import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowRight,
  Activity,
  Camera,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const posts = [
  {
    icon: Activity,
    category: "Posture Basics",
    title: "Understanding posture measurements",
    description:
      "Learn what posture measurements represent and how they fit into a structured assessment.",
  },
  {
    icon: Camera,
    category: "Getting Started",
    title: "How to capture better posture scans",
    description:
      "Simple guidance for taking front and side images that are suitable for a posture assessment.",
  },
  {
    icon: ShieldCheck,
    category: "Privacy",
    title: "A privacy-first assessment experience",
    description:
      "Explore the principles behind keeping the posture assessment focused on the information you provide.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6] text-[#17211d]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f6eb] via-white to-[#f5fbf6]">
          <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm">
                <BookOpen className="h-4 w-4" />
                BodySense Journal
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Practical ideas for
                <span className="text-green-700"> better posture awareness.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Explore educational content about posture assessment, scan
                preparation, and understanding your results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                Latest articles
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Learn the basics
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => {
                const Icon = post.icon;

                return (
                  <article
                    key={post.title}
                    className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                      {post.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {post.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {post.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                      Read article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="rounded-3xl border border-green-100 bg-[#eff9f1] p-8 sm:p-12">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Ready to explore your own results?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Start an assessment and see how the BodySense report organizes
                your posture measurements.
              </p>

              <Link
                to="/assessment"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1b4d3e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#143a2f]"
              >
                Start Assessment
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

export default Blog;
