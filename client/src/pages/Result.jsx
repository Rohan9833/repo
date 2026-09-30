import React from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../components/Layout/PageContainer";
import "./AssessmentSetup.css";
import "../components/Report/report.css";
import "./Result.css";
import "../components/PDF/pdf.css";

import ResultHeader from "../components/Report/ReportHeader";
import OverallScoreCard from "../components/Report/OverallScoreCard";
import PatientInfoCard from "../components/Report/PatientInfoCard";
import ScanPreviewCard from "../components/Report/ScanPreviewCard";
import FindingsGrid from "../components/Report/FindingsGrid";
import RecommendationSection from "../components/Report/RecommendationSection";

import generatePDF from "../components/PDF/generatePDF";

import CoverPage from "../components/PDF/CoverPage";
import FrontFindingsPage from "../components/PDF/FrontFindingsPage";
import SideFindingsPage from "../components/PDF/SideFindingsPage";
import RecommendationPage from "../components/PDF/RecommendationPage";
import DisclaimerPage from "../components/PDF/DisclaimerPage";

import { useScan } from "../context/ScanContext";

const Result = () => {

    const navigate = useNavigate();

    const {
        scanData,
        resetScanData,
    } = useScan();

    const report = scanData.report;

    if (!report) {

        return (

            <PageContainer>

                <div className="no-report">

                    <h1>
                        No Report Available
                    </h1>

                </div>

            </PageContainer>

        );

    }

    const handleDownload = async () => {

        try {

            await generatePDF(scanData);

        } catch (err) {

            console.error("Download failed:", err);
            alert("Sorry, the PDF could not be generated. Please try again.");

        }

    };

    const handleNewScan = () => {

        resetScanData();

        navigate("/");

    };

    /*
      UI-only sample images.
      Real scan images will always be preferred.
    */
    const sampleFrontImage =
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85";

    const sampleSideImage =
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85";

    return (

        <PageContainer>

            <div className="result-page">

                <div className="result-header-wrap">
                    <ResultHeader
                        onDownload={handleDownload}
                    />
                </div>

                <div className="result-top-grid">

                    <div className="result-score-wrap">
                        <OverallScoreCard
                            score={report.overallScore}
                            status={report.overallStatus}
                        />
                    </div>

                    <div className="result-patient-wrap">
                        <PatientInfoCard
                            data={scanData}
                        />
                    </div>

                </div>

                <div className="result-images-wrap">

                    <ScanPreviewCard
                        frontImage={
                            scanData.frontImage || sampleFrontImage
                        }
                        sideImage={
                            scanData.sideImage || sampleSideImage
                        }
                    />

                </div>

                <div className="result-findings-wrap">

                    <FindingsGrid
                        findings={report.findings}
                    />

                </div>

                <div className="result-recommendation-wrap">

                    <RecommendationSection
                        findings={report.findings}
                    />

                </div>

                <div className="new-scan-section">

                    <button
                        className="new-scan-btn"
                        onClick={handleNewScan}
                    >
                        <span>↻</span>
                        Start New Scan
                    </button>

                </div>

            </div>

            {/* PDF ONLY - DO NOT CHANGE */}

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: "-99999px",
                    zIndex: -1,
                }}
            >

                <CoverPage scanData={scanData} />

                <FrontFindingsPage report={report} />

                <SideFindingsPage report={report} />

                <RecommendationPage report={report} />

                <DisclaimerPage />

            </div>

        </PageContainer>

    );

};

export default Result;