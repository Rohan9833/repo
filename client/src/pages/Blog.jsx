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
import "./InfoPages.css";

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

const Blog = () => (
  <div className="info-page">
    <Navbar />

    <main>
      <section className="info-hero">
        <div className="info-container info-hero-inner">
          <div className="info-hero-copy">
            <span className="info-eyebrow">
              <BookOpen />
              BodySense Journal
            </span>

            <h1 className="info-title">
              Practical ideas for{" "}
              <span className="info-title-accent">better posture awareness.</span>
            </h1>

            <p className="info-lead">
              Explore educational content about posture assessment, scan
              preparation, and understanding your results.
            </p>

            <div className="info-actions">
              <Link to="/how-it-works" className="info-button info-button-primary">
                Learn How It Works
                <ArrowRight size={16} />
              </Link>
              <Link to="/assessment" className="info-button info-button-secondary">
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section info-section-white">
        <div className="info-container">
          <div className="info-section-head">
            <p className="info-kicker">Latest articles</p>
            <h2 className="info-section-title">Learn the basics.</h2>
            <p className="info-section-description">
              Short, practical information to help you understand the
              assessment experience and the results it produces.
            </p>
          </div>

          <div className="info-article-grid">
            {posts.map((post) => {
              const Icon = post.icon;

              return (
                <article className="info-card info-article" key={post.title}>
                  <div className="info-icon"><Icon /></div>
                  <p className="info-article-category">{post.category}</p>
                  <h2 className="info-card-title">{post.title}</h2>
                  <p className="info-card-text">{post.description}</p>
                  <Link to="/blog" className="info-card-link">
                    Read article
                    <ArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="info-section info-section-soft info-footer-space">
        <div className="info-container">
          <div className="info-callout">
            <div>
              <p className="info-kicker">Ready to explore?</p>
              <h2>See your own posture assessment results.</h2>
              <p>
                Start an assessment and see how BodySense organizes posture
                measurements into a structured report.
              </p>
            </div>

            <Link to="/assessment" className="info-button info-button-primary">
              Start Assessment
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Blog;
