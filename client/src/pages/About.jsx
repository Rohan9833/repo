import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Target, Eye, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./BodySensePages.css";

export default function About(){
 return <div className="bs-page">
  <Navbar/>
  <main>
   <section className="bs-hero"><div className="bs-wrap bs-hero-inner"><div className="bs-copy">
    <span className="bs-label"><HeartPulse size={14}/> About BodySense</span>
    <h1 className="bs-title">Making posture assessment <span className="bs-green">easier to understand.</span></h1>
    <p className="bs-lead">BodySense is an AI-powered posture assessment experience built to turn posture images into clear, structured information.</p>
    <div className="bs-actions"><Link to="/how-it-works" className="bs-btn bs-btn-main">Explore the assessment <ArrowRight size={15}/></Link><Link to="/assessment" className="bs-btn bs-btn-light">Start Assessment</Link></div>
   </div></div></section>

   <section className="bs-section bs-white"><div className="bs-wrap">
    <div className="bs-heading"><div className="bs-kicker">What guides BodySense</div><h2>Built around clarity and useful information.</h2><p>The experience is organized around making posture analysis easier to follow from the first scan through the final report.</p></div>
    <div className="bs-grid bs-grid-3">
      <article className="bs-card bs-card-soft"><div className="bs-icon"><Target/></div><h3>Our purpose</h3><p>Give people a simpler way to explore posture measurements without turning the assessment into a complicated process.</p></article>
      <article className="bs-card bs-card-soft"><div className="bs-icon"><Eye/></div><h3>Our approach</h3><p>Present technical posture analysis through readable findings, visual hierarchy, and a report that is easy to navigate.</p></article>
      <article className="bs-card bs-card-soft"><div className="bs-icon"><ShieldCheck/></div><h3>Our focus</h3><p>Keep the assessment experience focused, transparent, and centered around the information produced from your scans.</p></article>
    </div>
   </div></section>

   <section className="bs-section"><div className="bs-wrap"><div className="bs-story">
    <article className="bs-story-card"><div className="bs-kicker">The BodySense experience</div><h2>From your images to a clearer view of your posture.</h2><p>BodySense brings the assessment into a single flow so scans, measurements, findings, and recommendations can be viewed together.</p><ul className="bs-list"><li><CheckCircle2/> Front and side posture views</li><li><CheckCircle2/> Structured posture measurements</li><li><CheckCircle2/> Individual scores and severity</li><li><CheckCircle2/> Organized assessment reporting</li></ul></article>
    <article className="bs-story-card bs-card-soft"><div className="bs-icon"><HeartPulse/></div><h2>A focused assessment flow.</h2><p>The interface is designed to keep each stage understandable, from preparing the scan to reviewing the final findings.</p><Link to="/how-it-works" className="bs-read">See How It Works <ArrowRight size={15}/></Link></article>
   </div></div></section>

   <section className="bs-section bs-soft bs-bottom-space"><div className="bs-wrap"><div className="bs-callout"><div><div className="bs-kicker">Explore BodySense</div><h2>See how the assessment turns scans into structured results.</h2><p>Learn about the assessment flow or start an assessment when you are ready.</p></div><Link to="/assessment" className="bs-btn bs-btn-main">Start Assessment <ArrowRight size={15}/></Link></div></div></section>
  </main>
  <Footer/>
 </div>
}
