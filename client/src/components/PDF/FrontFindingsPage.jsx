import React from "react";

import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";
import FindingCard from "./FindingCard";

const FRONT_IDS = [

    "headTilt",

    "shoulderHeightDifference",

    "pelvicLevelness",

    "spinalAlignment",

    "armSymmetry",

    "kneeAlignment",

    "stanceWidth",

    "weightDistribution",

];

const FrontFindingsPage = ({ report }) => {

    const findings = report.findings.filter(item =>
        FRONT_IDS.includes(item.id)
    );

    return (

        <div
            id="pdf-front-findings"
            className="pdf-page"
        >

            <ReportHeader />

            <div className="pdf-body">

                <div className="page-heading">

                    <h2>

                        Front View Analysis

                    </h2>

                    <p>

                        AI assessment of frontal body posture.

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

export default FrontFindingsPage;