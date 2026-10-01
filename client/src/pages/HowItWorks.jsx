import React from "react";
import { Link } from "react-router-dom";
import { Camera, ScanLine, Brain, FileCheck2, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./BodySensePages.css";

const steps=[
  {number:"01",icon:Camera,title:"Capture your posture",text:"Take or upload clear front and side images. No special equipment is required for the assessment."},
  {number:"02",icon:ScanLine,title:"AI detects landmarks",text:"BodySense analyzes the images and identifies key body landmarks used for posture analysis."},
  {number:"03",icon:Brain,title:"Measurements are calculated",text:"Detected landmarks are converted into posture measurements and individual assessment scores."},
  {number:"04",icon:FileCheck2,title:"Receive your report",text:"Your findings, severity information, scores, and recommendations are organized into one report."}
];

export default function HowItWorks(){
 return <div className="bs-page">
  <Navbar/>
  <main>
   <section className="bs-hero"><div className="bs-wrap bs-hero-inner"><div className="bs-copy">
    <span className="bs-label"><ShieldCheck size={14}/> Simple assessment flow</span>
    <h1 className="bs-title">Understand your posture in <span className="bs-green">four simple steps.</span></h1>
    <p className="bs-lead">BodySense turns two posture images into a structured assessment so you can understand your alignment without a complicated setup.</p>
    <div className="bs-actions">
      <Link to="/assessment" className="bs-btn bs-btn-main">Start Assessment <ArrowRight size={15}/></Link>
      <Link to="/features" className="bs-btn bs-btn-light">Explore Features</Link>
    </div>
   </div></div></section>

   <section className="bs-section bs-white"><div className="bs-wrap">
    <div className="bs-heading"><div className="bs-kicker">The process</div><h2>From image to insight.</h2><p>Each stage keeps the experience straightforward while giving you useful posture information.</p></div>
    <div className="bs-grid bs-grid-2">{steps.map(s=>{const Icon=s.icon;return <article className="bs-card bs-card-soft" key={s.number}>
      <span className="bs-number">{s.number}</span><div className="bs-icon"><Icon/></div><h3>{s.title}</h3><p>{s.text}</p>
    </article>})}</div>
   </div></section>

   <section className="bs-section bs-soft bs-bottom-space"><div className="bs-wrap"><div className="bs-callout">
    <div><div className="bs-kicker">Ready when you are</div><h2>See what your posture assessment can reveal.</h2><p>Start with your front and side images and let BodySense organize the analysis for you.</p></div>
    <Link to="/assessment" className="bs-btn bs-btn-main">Start Assessment <ArrowRight size={15}/></Link>
   </div></div></section>
  </main>
  <Footer/>
 </div>
}
