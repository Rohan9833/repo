import React from 'react';
import { Brain, ScanLine, FileText, Lock } from 'lucide-react';

const WhatYoullGet = () => {
  const features = [
    {
      icon: <Brain className="w-7 h-7 text-green-700" />,
      title: "AI Analysis",
      desc: "Advanced AI analyzes posture using MediaPipe's 33 body landmarks.",
    },
    {
      icon: <ScanLine className="w-7 h-7 text-green-700" />,
      title: "Accurate Detection",
      desc: "Detect body alignment from front and side images with high accuracy.",
    },
    {
      icon: <FileText className="w-7 h-7 text-green-700" />,
      title: "Professional Report",
      desc: "Generate a detailed posture assessment report with personalized recommendations.",
    },
    {
      icon: <Lock className="w-7 h-7 text-green-700" />,
      title: "Privacy First",
      desc: "Your images stay secure and are processed only for assessment.",
    },
  ];

  return (
    // Parent container ko pure width aur clean background diya hai
 <div className="w-full bg-white py-16 flex justify-center !mt-[21px]">
      
      {/* 
        FIX: Parent ko hi max-w-5xl de diya aur hata diya max-w-6xl. 
        Ab Heading aur Grid dono ek hi width mein center honge.
      */}
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center w-full mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            What You'll <span className="text-green-700">Get</span>
          </h2>
          {/* Green underline */}
          <div className="w-24 h-1 bg-green-600 mt-3 rounded-full"></div>
        </div>

        {/* Cards Grid (Ab isko wapas simple kar diya, kyunki parent hi center hai) */}
        <div className="grid grid-cols-1 !p-7 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="w-full bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhatYoullGet;