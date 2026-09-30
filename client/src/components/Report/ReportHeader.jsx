import React from "react";

const ReportHeader = ({ onDownload }) => {

    return (

        <div className="report-header">

            <div className="report-header-copy">
                <span className="report-header-badge">
                    Assessment complete
                </span>

                <h1>
                    Your Posture Assessment
                </h1>

                <p>
                    A clear summary of your posture analysis, findings and next steps.
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