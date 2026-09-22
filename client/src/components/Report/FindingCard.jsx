import React from "react";
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaTimesCircle,
    FaInfoCircle,
} from "react-icons/fa";

const STATUS = {
    EXCELLENT: {
        color: "bg-green-100 text-green-700",
        icon: <FaCheckCircle />,
    },

    GOOD: {
        color: "bg-blue-100 text-blue-700",
        icon: <FaCheckCircle />,
    },

    MILD: {
        color: "bg-yellow-100 text-yellow-700",
        icon: <FaInfoCircle />,
    },

    MODERATE: {
        color: "bg-orange-100 text-orange-700",
        icon: <FaExclamationTriangle />,
    },

    SEVERE: {
        color: "bg-red-100 text-red-700",
        icon: <FaTimesCircle />,
    },
};

const FindingCard = ({ finding }) => {

    const style =
        STATUS[finding.status] ||
        STATUS.MODERATE;

    return (

        <div className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300">

            <div className="p-6">

                <div className="flex justify-between items-start">

                    <div>

                        <h3 className="text-xl font-bold">

                            {finding.title}

                        </h3>

                        <p className="text-slate-500 mt-1">

                            Posture Measurement

                        </p>

                    </div>

                    <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${style.color}`}
                    >

                        {style.icon}

                        {finding.status}

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <div>

                        <p className="text-slate-500 text-sm">

                            Measurement

                        </p>

                        <h2 className="text-3xl font-bold text-blue-600">

                            {finding.measurement}

                            <span className="text-lg">

                                {finding.unit}

                            </span>

                        </h2>

                    </div>

                    <div>

                        <p className="text-slate-500 text-sm">

                            Score

                        </p>

                        <h2 className="text-3xl font-bold">

                            {finding.score}

                        </h2>

                    </div>

                </div>

                <div className="mt-8">

                    <p className="text-sm text-slate-500">

                        Severity

                    </p>

                    <h3 className="font-semibold text-lg">

                        {finding.severity}

                    </h3>

                </div>

            </div>

        </div>

    );

};

export default FindingCard;