import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Activity, Camera, ShieldCheck } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./BodySensePages.css";

const posts=[
 {icon:Activity,category:"Posture Basics",title:"Understanding posture measurements",text:"Learn what posture measurements represent and how they fit into a structured assessment."},
 {icon:Camera,category:"Getting Started",title:"How to capture better posture scans",text:"Simple guidance for taking front and side images that are suitable for a posture assessment."},
 {icon:ShieldCheck,category:"Privacy",title:"A privacy-first assessment experience",text:"Explore the principles behind keeping the posture assessment focused on the information you provide."}
];

export default function Blog(){
 return <div className="bs-page">
  <Navbar/>
  <main>
   <section className="bs-hero"><div className="bs-wrap bs-hero-inner"><div className="bs-copy">
    <span className="bs-label"><BookOpen size={14}/> BodySense Journal</span>
    <h1 className="bs-title">Practical ideas for <span className="bs-green">better posture awareness.</span></h1>
    <p className="bs-lead">Explore educational content about posture assessment, scan preparation, and understanding your results.</p>
    <div className="bs-actions"><Link to="/how-it-works" className="bs-btn bs-btn-main">Learn How It Works <ArrowRight size={15}/></Link><Link to="/assessment" className="bs-btn bs-btn-light">Start Assessment</Link></div>
   </div></div></section>

   <section className="bs-section bs-white"><div className="bs-wrap">
    <div className="bs-heading"><div className="bs-kicker">Latest articles</div><h2>Learn the basics.</h2><p>Short, practical information to help you understand the assessment experience and the results it produces.</p></div>
    <div className="bs-article-grid">{posts.map(post=>{const Icon=post.icon;return <article className="bs-card bs-article" key={post.title}><div className="bs-icon"><Icon/></div><div className="bs-category">{post.category}</div><h3>{post.title}</h3><p>{post.text}</p><Link to="/blog" className="bs-read">Read article <ArrowRight size={15}/></Link></article>})}</div>
   </div></section>

   <section className="bs-section bs-soft bs-bottom-space"><div className="bs-wrap"><div className="bs-callout"><div><div className="bs-kicker">Ready to explore?</div><h2>See your own posture assessment results.</h2><p>Start an assessment and see how BodySense organizes posture measurements into a structured report.</p></div><Link to="/assessment" className="bs-btn bs-btn-main">Start Assessment <ArrowRight size={15}/></Link></div></div></section>
  </main>
  <Footer/>
 </div>
}
