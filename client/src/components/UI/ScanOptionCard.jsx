import React from "react";
import Button from "./Button";

const ScanOptionCard = ({
    icon,
    title,
    description,
    buttonText,
    onClick,
    className = "",
}) => {
    return (
        <div
            className={`
        group
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-blue-300
        flex
        flex-col
        h-full
        ${className}
      `}
        >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 leading-7 mb-8 flex-grow">
                {description}
            </p>

            {/* CTA Button */}
            <Button
                fullWidth
                onClick={onClick}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default ScanOptionCard;