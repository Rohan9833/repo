import React from "react";
import {
    FaDownload,
    FaPrint,
    FaRedo,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import generatePDF from "../PDF/generatePDF";

const ReportActions = ({ scanData }) => {

    const navigate = useNavigate();

    return (

        <div className="sticky bottom-6 z-50">

            <div className="bg-white shadow-2xl rounded-2xl p-4 flex flex-wrap justify-center gap-4 border">

                <button
                    onClick={() => generatePDF(scanData)}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >

                    <FaDownload className="inline mr-2" />

                    Download Report

                </button>

                <button
                    onClick={() => window.print()}
                    className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
                >
                    <FaPrint className="inline mr-2" />
                    Print
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-800 text-white font-semibold transition"
                >
                    <FaRedo className="inline mr-2" />
                    New Scan
                </button>

            </div>

        </div>

    );

};

export default ReportActions;