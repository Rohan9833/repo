import React from "react";
import { Link } from "react-router-dom";
import { Brain, ScanLine, FileText, Lock, Activity, BarChart3, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./BodySensePages.css";

const features=[
 {icon:Brain,title:"AI-Powered Analysis",text:"Analyze posture using computer vision and body landmark detection to turn images into measurable posture data."},
 {icon:ScanLine,title:"Front & Side Analysis",text:"Use two views to build a broader picture of body alignment instead of relying on a single angle."},
 {icon:Activity,title:"Detailed Measurements",text:"Review posture measurements such as body lean, shoulder alignment, pelvic levelness, and other findings."},
 {icon:BarChart3,title:"Individual Scores",text:"Each finding is presented with a score and severity so the report is easy to scan and understand."},
 {icon:FileText,title:"Clear Assessment Report",text:"Get your results in a structured report that brings measurements, findings, and recommendations together."},
 {icon:Lock,title:"Privacy-Focused Experience",text:"The assessment is designed with a privacy-first approach around the images used during your posture analysis."}
];

export default function FeaturesPage(){
 return <div className="bs-page">
  <Navbar/>
  <main>
   <section className="bs-hero"><div className="bs-wrap bs-hero-inner"><div className="bs-copy">
    <span className="bs-label">Built around your assessment</span>
    <h1 className="bs-title">Everything you need to <span className="bs-green">understand your posture.</span></h1>
    <p className="bs-lead">BodySense combines posture detection, measurements, scoring, and reporting into one focused experience.</p>
    <div className="bs-actions"><Link to="/assessment" className="bs-btn bs-btn-main">Start Assessment <ArrowRight size={15}/></Link><Link to="/how-it-works" className="bs-btn bs-btn-light">See How It Works</Link></div>
   </div></div></section>

   <section className="bs-section bs-white"><div className="bs-wrap">
    <div className="bs-heading"><div className="bs-kicker">What BodySense provides</div><h2>A focused assessment experience.</h2><p>Each part of the assessment has a clear purpose, from analyzing your scans to organizing the final report.</p></div>
    <div className="bs-grid bs-grid-3">{features.map(f=>{const Icon=f.icon;return <article className="bs-card bs-feature-card" key={f.title}><div className="bs-icon"><Icon/></div><h3>{f.title}</h3><p>{f.text}</p></article>})}</div>
   </div></section>

   <section className="bs-section bs-soft bs-bottom-space"><div className="bs-wrap"><div className="bs-callout">
    <div><div className="bs-kicker"><ShieldCheck size={14} style={{verticalAlign:"-2px"}}/> Designed for clarity</div><h2>Your results should be easy to understand.</h2><p>BodySense organizes technical analysis into visual findings, scores, severity levels, and recommendations.</p></div>
    <Link to="/assessment" className="bs-btn bs-btn-main">Try BodySense <ArrowRight size={15}/></Link>
   </div></div></section>
  </main>
  <Footer/>
 </div>
}
