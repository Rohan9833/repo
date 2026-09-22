import React from "react";

const Card = ({
    children,
    title,
    subtitle,
    icon,
    className = "",
    hover = true,
}) => {
    return (
        <div
            className={`
                relative
                bg-white/90
                backdrop-blur-sm
                rounded-3xl
                border
                border-slate-200/80
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                p-8
                overflow-hidden
                transition-all
                duration-300
                ${hover ? "hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-200" : ""}
                ${className}
            `}
        >
            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

            {/* Icon */}
            {icon && (
                <div className="mb-6">
                    <div
                        className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-50
                            to-indigo-100
                            flex
                            items-center
                            justify-center
                            text-blue-600
                            shadow-sm
                        "
                    >
                        {icon}
                    </div>
                </div>
            )}

            {/* Title */}
            {title && (
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {title}
                </h3>
            )}

            {/* Subtitle */}
            {subtitle && (
                <p className="text-slate-500 leading-7 mb-5">
                    {subtitle}
                </p>
            )}

            {/* Content */}
            <div className="text-slate-600 leading-7">
                {children}
            </div>
        </div>
    );
};

export default Card;