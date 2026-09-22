import React from "react";
import {
    FaHeartbeat,
    FaCalendarAlt,
    FaShieldAlt,
} from "react-icons/fa";

const ReportFooter = () => {

    const today = new Date().toLocaleString();

    return (

        <div className="space-y-6">

            {/* Disclaimer */}

            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">

                <div className="flex items-start gap-4">

                    <FaShieldAlt
                        className="text-amber-600 mt-1"
                        size={22}
                    />

                    <div>

                        <h3 className="text-xl font-bold text-amber-700">

                            Medical Disclaimer

                        </h3>

                        <p className="mt-2 text-slate-700 leading-7">

                            This report is generated using AI-based posture
                            analysis and is intended for educational,
                            wellness, and screening purposes only.
                            It should not be considered a medical diagnosis.
                            Please consult a qualified physiotherapist,
                            orthopedic specialist, or healthcare professional
                            for a complete clinical evaluation.

                        </p>

                    </div>

                </div>

            </div>

            {/* Footer */}

            <div className="bg-slate-900 rounded-3xl p-8 text-white">

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                    <div>

                        <div className="flex items-center gap-3">

                            <FaHeartbeat size={30} />

                            <div>

                                <h2 className="text-2xl font-bold">

                                    AI Posture Assessment System

                                </h2>

                                <p className="text-slate-400">

                                    Professional Posture Analysis Platform

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="text-left lg:text-right">

                        <div className="flex items-center lg:justify-end gap-2">

                            <FaCalendarAlt />

                            <span>

                                Generated

                            </span>

                        </div>

                        <p className="mt-2 text-slate-300">

                            {today}

                        </p>

                        <p className="mt-3 text-slate-500">

                            Version 1.0

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ReportFooter;