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
import "./InfoPages.css";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Capture your posture",
    description:
      "Take or upload clear front and side images. The assessment is designed to work without special equipment.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "AI detects landmarks",
    description:
      "BodySense analyzes your images and identifies key body landmarks to understand alignment and posture.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Measurements are calculated",
    description:
      "The assessment converts detected landmarks into posture measurements and individual scores.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Receive your report",
    description:
      "Your results are organized into a clear report with findings, severity information, and recommendations.",
  },
];

const HowItWorks = () => (
  <div className="info-page">
    <Navbar />

    <main>
      <section className="info-hero">
        <div className="info-container info-hero-inner">
          <div className="info-hero-copy">
            <span className="info-eyebrow">
              <ShieldCheck />
              Simple assessment flow
            </span>

            <h1 className="info-title">
              Understand your posture in{" "}
              <span className="info-title-accent">four simple steps.</span>
            </h1>

            <p className="info-lead">
              BodySense turns two posture images into a structured assessment
              so you can understand your alignment without a complicated setup.
            </p>

            <div className="info-actions">
              <Link to="/assessment" className="info-button info-button-primary">
                Start Assessment
                <ArrowRight size={16} />
              </Link>
              <Link to="/features" className="info-button info-button-secondary">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section info-section-white">
        <div className="info-container">
          <div className="info-section-head">
            <p className="info-kicker">The process</p>
            <h2 className="info-section-title">From image to insight.</h2>
            <p className="info-section-description">
              Every stage is designed to keep the experience straightforward
              while giving you useful posture information.
            </p>
          </div>

          <div className="info-grid info-grid-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article className="info-card info-card-soft" key={step.number}>
                  <span className="info-card-number">{step.number}</span>
                  <div className="info-icon">
                    <Icon />
                  </div>
                  <h3 className="info-card-title">{step.title}</h3>
                  <p className="info-card-text">{step.description}</p>
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
              <p className="info-kicker">Ready when you are</p>
              <h2>See what your posture assessment can reveal.</h2>
              <p>
                Start with your front and side images and let BodySense organize
                the analysis for you.
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

export default HowItWorks;
