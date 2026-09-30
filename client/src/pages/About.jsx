import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  Eye,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./InfoPages.css";

const About = () => (
  <div className="info-page">
    <Navbar />

    <main>
      <section className="info-hero">
        <div className="info-container info-hero-inner">
          <div className="info-hero-copy">
            <span className="info-eyebrow">
              <HeartPulse />
              About BodySense
            </span>

            <h1 className="info-title">
              Making posture assessment{" "}
              <span className="info-title-accent">easier to understand.</span>
            </h1>

            <p className="info-lead">
              BodySense is an AI-powered posture assessment experience built
              to turn posture images into clear, structured information.
            </p>

            <div className="info-actions">
              <Link to="/how-it-works" className="info-button info-button-primary">
                Explore the assessment
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
            <p className="info-kicker">What guides BodySense</p>
            <h2 className="info-section-title">Built around clarity and useful information.</h2>
            <p className="info-section-description">
              The experience is organized around making posture analysis easier
              to follow from the first scan through the final report.
            </p>
          </div>

          <div className="info-grid info-grid-3">
            <article className="info-card info-card-soft">
              <div className="info-icon"><Target /></div>
              <h2 className="info-card-title">Our purpose</h2>
              <p className="info-card-text">
                Give people a simpler way to explore posture measurements
                without turning the assessment into a complicated process.
              </p>
            </article>

            <article className="info-card info-card-soft">
              <div className="info-icon"><Eye /></div>
              <h2 className="info-card-title">Our approach</h2>
              <p className="info-card-text">
                Present technical posture analysis through readable findings,
                visual hierarchy, and a report that is easy to navigate.
              </p>
            </article>

            <article className="info-card info-card-soft">
              <div className="info-icon"><ShieldCheck /></div>
              <h2 className="info-card-title">Our focus</h2>
              <p className="info-card-text">
                Keep the assessment experience focused, transparent, and
                centered around the information produced from your scans.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-container">
          <div className="info-story">
            <article className="info-story-panel">
              <p className="info-kicker">The BodySense experience</p>
              <h2>From your images to a clearer view of your posture.</h2>
              <p>
                BodySense brings the assessment into a single flow so that
                scans, measurements, findings, and recommendations can be
                viewed together.
              </p>

              <ul className="info-check-list">
                <li><CheckCircle2 /> Front and side posture views</li>
                <li><CheckCircle2 /> Structured posture measurements</li>
                <li><CheckCircle2 /> Individual scores and severity</li>
                <li><CheckCircle2 /> Organized assessment reporting</li>
              </ul>
            </article>

            <article className="info-story-panel info-card-soft">
              <div className="info-icon"><HeartPulse /></div>
              <h2>A focused assessment flow.</h2>
              <p>
                The interface is designed to keep each stage understandable,
                from preparing the scan to reviewing the final findings.
              </p>

              <Link to="/how-it-works" className="info-card-link">
                See How It Works
                <ArrowRight />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="info-section info-section-soft info-footer-space">
        <div className="info-container">
          <div className="info-callout">
            <div>
              <p className="info-kicker">Explore BodySense</p>
              <h2>See how the assessment turns scans into structured results.</h2>
              <p>
                Learn about the assessment flow or start an assessment when
                you are ready.
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

export default About;
