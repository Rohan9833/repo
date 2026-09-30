import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./SiteLayout.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="site-footer-grid">
        <div>
          <Link to="/" className="site-footer-logo">
            <span className="site-footer-logo-mark">♧</span>
            <span className="site-footer-logo-text">BodySense</span>
          </Link>

          <p className="site-footer-description">
            AI-powered posture assessment designed to make posture information
            easier to understand.
          </p>

          <Link to="/assessment" className="site-footer-start">
            Start an assessment
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="site-footer-column">
          <h3>Explore</h3>
          <div className="site-footer-links">
            <Link to="/how-it-works" className="site-footer-link">How It Works</Link>
            <Link to="/features" className="site-footer-link">Features</Link>
            <Link to="/about" className="site-footer-link">About Us</Link>
            <Link to="/blog" className="site-footer-link">Blog</Link>
          </div>
        </div>

        <div className="site-footer-column">
          <h3>Assessment</h3>
          <div className="site-footer-links">
            <Link to="/assessment" className="site-footer-link">Start Assessment</Link>
            <Link to="/upload" className="site-footer-link">Upload Scans</Link>
            <Link to="/result" className="site-footer-link">View Your Results</Link>
          </div>
        </div>

        <div className="site-footer-column">
          <h3>BodySense</h3>
          <p className="site-footer-description">
            Explore the platform, learn how the assessment works, and start
            when you're ready.
          </p>
          <Link to="/assessment" className="site-footer-button">Get Started</Link>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 BodySense. All rights reserved.</p>
        <p>AI-powered posture assessment</p>
      </div>
    </div>
  </footer>
);

export default Footer;
