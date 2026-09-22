import React from "react";

import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";
import FindingCard from "./FindingCard";

const SIDE_IDS = [

    "forwardHead",

    "neckAngle",

    "pelvicTilt",

    "thoracicCurve",

    "bodyLean",

];

const SideFindingsPage = ({ report }) => {

    const findings = report.findings.filter(item =>
        SIDE_IDS.includes(item.id)
    );

    return (

        <div
            id="pdf-side-findings"
            className="pdf-page"
        >

            <ReportHeader />

            <div className="pdf-body">

                <div className="page-heading">

                    <h2>

                        Side View Analysis

                    </h2>

                    <p>

                        AI assessment of sagittal body posture.

                    </p>

                </div>

                <div className="findings-grid">

                    {findings.map(item => (

                        <FindingCard

                            key={item.id}

                            finding={item}

                        />

                    ))}

                </div>

            </div>

            <ReportFooter />

        </div>

    );

};

export default SideFindingsPage;