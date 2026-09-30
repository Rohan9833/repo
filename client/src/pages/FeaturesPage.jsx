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
import "./InfoPages.css";

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

const FeaturesPage = () => (
  <div className="info-page">
    <Navbar />

    <main>
      <section className="info-hero">
        <div className="info-container info-hero-inner">
          <div className="info-hero-copy">
            <span className="info-eyebrow">Built around your assessment</span>

            <h1 className="info-title">
              Everything you need to{" "}
              <span className="info-title-accent">understand your posture.</span>
            </h1>

            <p className="info-lead">
              BodySense combines posture detection, measurements, scoring,
              and reporting into one focused experience.
            </p>

            <div className="info-actions">
              <Link to="/assessment" className="info-button info-button-primary">
                Start Assessment
                <ArrowRight size={16} />
              </Link>
              <Link to="/how-it-works" className="info-button info-button-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section info-section-white">
        <div className="info-container">
          <div className="info-section-head">
            <p className="info-kicker">What BodySense provides</p>
            <h2 className="info-section-title">A focused assessment experience.</h2>
            <p className="info-section-description">
              Each part of the assessment has a clear purpose, from analyzing
              your scans to organizing the final report.
            </p>
          </div>

          <div className="info-grid info-grid-3 info-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="info-card" key={feature.title}>
                  <div className="info-icon">
                    <Icon />
                  </div>
                  <h2 className="info-card-title">{feature.title}</h2>
                  <p className="info-card-text">{feature.description}</p>
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
              <p className="info-kicker">Designed for clarity</p>
              <h2>Your results should be easy to understand.</h2>
              <p>
                BodySense organizes technical analysis into visual findings,
                scores, severity levels, and recommendations.
              </p>
            </div>

            <Link to="/assessment" className="info-button info-button-primary">
              Try BodySense
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default FeaturesPage;
