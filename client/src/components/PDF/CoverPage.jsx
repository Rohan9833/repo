import React from "react";

import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";
import ScoreCircle from "./ScoreCircle";
import PatientDetailsCard from "./PatientDetailsCard";
import ScanImages from "./ScanImages";

const CoverPage = ({ scanData }) => {

    const report = scanData.report;

    return (

        <div
            id="pdf-cover"
            className="pdf-page"
        >

            <ReportHeader />

            <div className="pdf-body">

                {/* Report Title */}

                <div className="cover-title">

                    <h2>

                        AI Posture Assessment Report

                    </h2>

                    <p>

                        Computer Vision Based Postural Analysis

                    </p>

                </div>

                {/* Score + Patient */}

                <div className="cover-top">

                    <div className="cover-score">

                        <ScoreCircle
                            score={report.overallScore}
                            status={report.overallStatus}
                        />

                    </div>

                    <div className="cover-patient">

                        <PatientDetailsCard
                            scanData={scanData}
                        />

                    </div>

                </div>

                {/* Images */}

                <div className="cover-images">

                    <ScanImages
                        frontImage={scanData.frontImage}
                        sideImage={scanData.sideImage}
                    />

                </div>

            </div>

            <ReportFooter />

        </div>

    );

};

export default CoverPage;