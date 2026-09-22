import React from "react";

const variants = {
    primary:
        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-2xl",

    secondary:
        "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-md",

    success:
        "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg",

    danger:
        "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg",

    outline:
        "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50",

    ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-9 text-lg",
    xl: "h-16 px-12 text-xl",
};

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    icon = null,
    disabled = false,
    fullWidth = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                font-semibold
                tracking-wide
                transition-all
                duration-300
                active:scale-95
                hover:-translate-y-0.5
                disabled:opacity-50
                disabled:pointer-events-none
                focus:outline-none
                focus:ring-4
                focus:ring-blue-200
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
        >
            <span>{children}</span>

            {icon && (
                <span
                    className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    bg-white/20
                "
                >
                    {icon}
                </span>
            )}
        </button>
    );
};

export default Button;