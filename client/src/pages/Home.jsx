import React from "react";

import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Footer from "../components/Layout/Footer";
import TrustBar from "../components/home/Trustbar";
import Navbar from "../components/Layout/Navbar";


const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar/>
            <Hero />
            <TrustBar/>
            <Features />

            <Footer />

        </div>
    );
};

export default Home;