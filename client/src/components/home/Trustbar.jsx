import React from 'react';
import { Brain, ShieldCheck, Cross, Timer } from 'lucide-react'; // Icons import

const TrustBar = () => {
  const items = [
    { icon: <Brain className="w-5 h-5" />, label: "AI POWERED" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "PRIVACY FIRST" },
    { icon: <Cross className="w-5 h-5" />, label: "CLINICALLY INSPIRED" },
    { icon: <Timer className="w-5 h-5" />, label: "FAST & ACCURATE" },
  ];

  return (
    <div className="w-full bg-[#F7F7F5] py-12">
      
      {/* Main Content Wrapper: Poori width aur sab kuch center mein */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Heading - Center align */}
        <h3 className="text-center text-gray-500 !py-[30px] font-medium text-sm sm:text-base mb-10 tracking-wide">
          Trusted by the health-conscious
        </h3>

        {/* 
          Features Row 
          - w-full: Poori width lega
          - flex-wrap: Mobile par wrap hoga
          - items-center justify-center: Sab kuch bilkul center mein aayega
          - gap-x-12 gap-y-6: Icons ke beech ka spacing
          (Hata diya: h-[60px] aur mt-[15px] kyunki wo layout ko tod rahe the)
        */}
        <div className="flex flex-wrap !py-[30px] items-center justify-center w-full gap-x-12 gap-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Icon */}
              <span className="text-gray-500">
                {item.icon}
              </span>
              {/* Label */}
              <span className="text-gray-500 text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrustBar;