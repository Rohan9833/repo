import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Activity,
} from "lucide-react"; // Icons library
import { useNavigate } from "react-router-dom";

const PostureAssessment = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7F5] flex items-center justify-center font-sans overflow-hidden">
      {/* Background Image (Replace URL with your actual image) */}
      <img
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        alt="Posture Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
      />

      {/* Light overlay to make text readable */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full !p-4 shadow-sm w-fit">
            <ShieldCheck className="w-4 h-4 text-green-700" />
            <span className="text-sm font-medium text-gray-700">
              Trusted AI Healthcare Technology
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            AI Posture <br />
            <span className="text-green-700">Assessment</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Analyze your posture using advanced Artificial Intelligence and
            MediaPipe body landmarks. Capture or upload two images and receive
            an accurate posture assessment in under one minute.
          </p>

          {/* Features List */}
          <ul className="space-y-3 !mt-6">
            {[
              "AI Powered Analysis",
              "33 Body Landmarks",
              "Contactless Assessment",
              "Professional PDF Report",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-gray-700 font-medium !mt-4"
              >
                <CheckCircle2 className="w-5 h-5 text-green-700" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="!mt-8 !p-4 inline-flex items-center justify-center gap-2 bg-[#1B4D3E] hover:bg-[#143a2f] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg w-fit group"
            onClick={() => navigate("/assessment")}
          >
            Start Health Assessment
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: Cards (Overlapping the image) */}
        <div className="relative min-h-screen w-full  flex items-center justify-center font-sans overflow-hidden p-6">
          {/* Main Container */}
          <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN: Tall Image */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative w-full max-w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl ">
                {/* Sample Image (Long in length, short in breadth) */}
                <img
                  src="/hero.png"
                  alt="Posture Analysis"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative corner brackets around the image (Optional) */}
              <div className="absolute top-4 left-8 w-16 h-16 border-l-3 border-t-3 border-green-600 rounded-tl-lg pointer-events-none"></div>
              <div className="absolute bottom-4 left-8 w-16 h-16 border-l-3 border-b-3 border-green-600 rounded-bl-lg pointer-events-none"></div>
              <div className="absolute top-4 right-3 w-16 h-16 border-r-2 border-t-3 border-green-600 rounded-tr-lg pointer-events-none"></div>
              <div className="absolute bottom-4 right-3 w-16 h-16 border-r-2 border-b-3 border-green-600 rounded-br-lg pointer-events-none"></div>
            </div>

            {/* RIGHT COLUMN: Cards */}
            <div className="relative flex flex-col items-center lg:items-start justify-center gap-8 order-1 lg:order-2">
              {/* Posture Score Card */}
              <div className="w-60 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl !p-10 z-20">
                <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
                  Posture Score
                </h4>
                <div className="flex items-center justify-center mb-2">
                  {/* Circular Score */}
                  <div className="relative w-24 h-24 rounded-full border-8 border-green-200 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-t-8 border-green-600 rotate-45 absolute inset-0"></div>
                    <span className="text-3xl font-bold text-gray-800 relative z-10">
                      85
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-green-700">Good Posture</h5>
                  <p className="text-xs text-gray-500 mt-1">
                    Keep it up! Your posture is looking great.
                  </p>
                </div>
              </div>

              {/* Alignment Card */}
              <div className="w-52 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 z-20 lg:ml-10">
                {" "}
                {/* Added lg:ml-10 for a nice offset */}
                <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3">
                  Alignment
                </h4>
                <div className="border border-gray-100 rounded-lg p-2 flex items-center justify-center">
                  {/* Silhouette placeholder */}
                  <div className="w-20 h-36 bg-gray-100 rounded-t-full relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostureAssessment;
