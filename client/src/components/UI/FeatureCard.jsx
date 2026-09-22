import React from "react";
import Card from "./Card";

const FeatureCard = ({
    icon,
    title,
    description,
    className = "",
}) => {
    return (
        <Card
            icon={icon}
            className={`
                h-full
                min-h-[250px]
                flex
                flex-col
                justify-between
                group
                ${className}
            `}
        >
            <div className="space-y-4">

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                        group-hover:text-blue-600
                        transition-colors
                        duration-300
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        text-slate-600
                        leading-8
                        text-[16px]
                    "
                >
                    {description}
                </p>

            </div>
        </Card>
    );
};

export default FeatureCard;