import React from "react";

const ReportHeader = ({ onDownload }) => {

    return (

        <div className="report-header">

            <div>

                <h1>

                    AI Posture Assessment Report

                </h1>

                <p>

                    Computer Vision Based Posture Analysis

                </p>

            </div>

            <button
                className="download-btn"
                onClick={onDownload}
            >

                Download PDF

            </button>

        </div>

    );

};

export default ReportHeader;