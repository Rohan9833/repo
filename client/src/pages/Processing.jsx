import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaSpinner,
    FaCheckCircle,
    FaTimesCircle,
    FaImage,
    FaRobot,
} from "react-icons/fa";

import PageContainer from "../components/Layout/PageContainer";
import { useScan } from "../context/ScanContext";
import usePose from "../hooks/usePose";
import generateMeasurements from "../services/posture/measurementEngine";
import { scoringEngine } from "../services/posture/scoringEngine";
import assessmentEngine from "../services/posture/assessmentEngine";
import recommendationEngine from "../services/posture/recommendationEngine";
import "./Processing.css";

const Processing = () => {
    const navigate = useNavigate();

    const {
        scanData,
        updateScanData,
    } = useScan();

    const {
        modelLoading,
        runPoseDetection,
    } = usePose();

    const [currentStep, setCurrentStep] = useState(
        "Loading AI Model..."
    );

    const [completedSteps, setCompletedSteps] = useState([]);

    useEffect(() => {
        if (modelLoading) return;

        processImages();

        // eslint-disable-next-line
    }, [modelLoading]);

    const addCompletedStep = (step) => {
        setCompletedSteps((prev) => [...prev, step]);
    };

    const loadImage = (source) =>
        new Promise((resolve, reject) => {
            const img = new Image();

            if (source instanceof File) {
                img.src = URL.createObjectURL(source);
            } else {
                img.src = source;
            }

            img.onload = () => {
                resolve(img);

                if (source instanceof File) {
                    URL.revokeObjectURL(img.src);
                }
            };

            img.onerror = reject;
        });

    const processImages = async () => {
        try {
            updateScanData({
                processing: true,
                error: null,
            });

            // -----------------------
            // Front Image
            // -----------------------

            setCurrentStep("Loading Front Image");

            const frontImg = await loadImage(scanData.frontImage);

            addCompletedStep("Front Image Loaded");

            setCurrentStep("Detecting Front Pose");

            const frontLandmarks =
                await runPoseDetection(frontImg);

            addCompletedStep("Front Pose Detected");

            // -----------------------
            // Side Image
            // -----------------------

            setCurrentStep("Loading Side Image");

            const sideImg = await loadImage(scanData.sideImage);

            addCompletedStep("Side Image Loaded");

            setCurrentStep("Detecting Side Pose");

            const sideLandmarks =
                await runPoseDetection(sideImg);

            addCompletedStep("Side Pose Detected");

            // -----------------------
            // Generate Measurements
            // -----------------------

            setCurrentStep("Calculating Posture Measurements");

            const measurements = generateMeasurements(
                frontLandmarks,
                sideLandmarks
            );

            // -----------------------
            // Generate Scores
            // -----------------------

            const scores = scoringEngine(measurements);

            // -----------------------
            // Generate Assessment
            // -----------------------

            const assessment = assessmentEngine(scores);

            // -----------------------
            // Generate Recommendations
            // -----------------------

            const report = recommendationEngine(assessment);

            // -----------------------
            // Debug
            // -----------------------

            console.log("Measurements");
            console.log(measurements);

            console.log("Scores");
            console.log(scores);

            console.log("Assessment");
            console.log(assessment);

            console.log("Final Report");
            console.log(report);

            addCompletedStep("Measurements Calculated");

            updateScanData({
                frontLandmarks,
                sideLandmarks,
                measurements,
                scores,
                assessment,
                report,

                frontPoseDetected:
                    frontLandmarks.length === 33,

                sidePoseDetected:
                    sideLandmarks.length === 33,

                processing: false,
            });

            setCurrentStep("Completed");

            addCompletedStep("AI Processing Finished");

            setTimeout(() => {
                navigate("/result");
            }, 1500);

        } catch (error) {
            console.error(error);

            updateScanData({
                processing: false,
                error,
            });

            setCurrentStep("Failed");
        }
    };

    // ------------------------------------------
    // UI-only derived values
    // ------------------------------------------

    const isFailed = currentStep === "Failed";
    const isCompleted = currentStep === "Completed";

    const totalSteps = 6;

    const progressPercent = isCompleted
        ? 100
        : Math.min(
            100,
            Math.round(
                (completedSteps.length / totalSteps) * 100
            )
        ) || 8;

    const getPreviewUrl = (img) =>
        img instanceof File
            ? URL.createObjectURL(img)
            : img;

    const frontDone =
        completedSteps.includes("Front Pose Detected");

    const sideDone =
        completedSteps.includes("Side Pose Detected");

    return (
        <PageContainer title="" subtitle="">
            <div className="processing-page">
                <div className="processing-shell">
                    <header className="processing-hero">
                        <div className="processing-brand">
                            <div className="processing-brand-mark">M</div>
                            <div>
                                <span className="processing-eyebrow">POSTURE AI</span>
                                <h1>Analyzing your posture</h1>
                                <p>Our AI is reviewing your front and side scans to prepare your assessment.</p>
                            </div>
                        </div>
                        <div className={`processing-status ${isFailed ? "is-failed" : isCompleted ? "is-complete" : ""}`}>
                            {isFailed ? <FaTimesCircle /> : isCompleted ? <FaCheckCircle /> : <FaSpinner className="processing-spin" />}
                            <span>{isFailed ? "Analysis failed" : isCompleted ? "Analysis complete" : "Processing"}</span>
                        </div>
                    </header>

                    <main className="processing-content">
                        <section className="processing-main-card">
                            <div className={`processing-orb ${isFailed ? "is-failed" : isCompleted ? "is-complete" : ""}`}>
                                {isFailed ? <FaTimesCircle /> : isCompleted ? <FaCheckCircle /> : <FaSpinner className="processing-spin" />}
                            </div>

                            <div className="processing-copy">
                                <span className="processing-kicker">
                                    {isCompleted ? "Ready" : isFailed ? "Attention required" : "AI analysis in progress"}
                                </span>
                                <h2>{currentStep}</h2>
                                <p>
                                    {isFailed
                                        ? scanData?.error?.message || "Something went wrong while analyzing the uploaded scans."
                                        : isCompleted
                                            ? "Your posture assessment has been generated successfully."
                                            : "Please keep this page open while we analyze your posture landmarks and calculate your results."}
                                </p>
                            </div>

                            <div className="processing-progress">
                                <div className="processing-progress-meta">
                                    <span>Analysis progress</span>
                                    <strong>{progressPercent}%</strong>
                                </div>
                                <div className="processing-progress-track">
                                    <div className={`processing-progress-bar ${isFailed ? "is-failed" : isCompleted ? "is-complete" : ""}`} style={{ width: `${progressPercent}%` }} />
                                </div>
                            </div>

                            <div className="processing-steps">
                                {[
                                    ["Front scan", "Front Image Loaded", "Front Pose Detected"],
                                    ["Side scan", "Side Image Loaded", "Side Pose Detected"],
                                    ["Measurements", "Measurements Calculated", null],
                                    ["Report", "AI Processing Finished", null],
                                ].map(([label, loadedStep, detectedStep]) => {
                                    const done = completedSteps.includes(loadedStep) ||
                                        (detectedStep && completedSteps.includes(detectedStep)) ||
                                        (label === "Report" && isCompleted);

                                    const active =
                                        !done &&
                                        ((label === "Front scan" && currentStep.includes("Front")) ||
                                        (label === "Side scan" && currentStep.includes("Side")) ||
                                        (label === "Measurements" && currentStep.includes("Measurements")) ||
                                        (label === "Report" && (currentStep.includes("Scores") || currentStep.includes("Completed"))));

                                    return (
                                        <div key={label} className={`processing-step ${done ? "is-done" : active ? "is-active" : ""}`}>
                                            <div className="processing-step-icon">
                                                {done ? <FaCheckCircle /> : active ? <FaSpinner className="processing-spin" /> : <span />}
                                            </div>
                                            <span>{label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <aside className="processing-preview-card">
                            <div className="processing-preview-heading">
                                <div>
                                    <span className="processing-kicker">Scan inputs</span>
                                    <h3>Images being analyzed</h3>
                                </div>
                                <FaImage />
                            </div>

                            <div className="processing-previews">
                                <div className="processing-preview">
                                    <div className="processing-preview-image">
                                        {scanData?.frontImage ? <img src={getPreviewUrl(scanData.frontImage)} alt="Front posture scan" /> : <div className="processing-preview-empty"><FaImage /></div>}
                                    </div>
                                    <div>
                                        <strong>Front view</strong>
                                        <span>{frontDone ? "Pose detected" : "Analyzing scan"}</span>
                                    </div>
                                </div>

                                <div className="processing-preview">
                                    <div className="processing-preview-image">
                                        {scanData?.sideImage ? <img src={getPreviewUrl(scanData.sideImage)} alt="Side posture scan" /> : <div className="processing-preview-empty"><FaImage /></div>}
                                    </div>
                                    <div>
                                        <strong>Side view</strong>
                                        <span>{sideDone ? "Pose detected" : "Analyzing scan"}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="processing-note">
                                <FaRobot />
                                <span>Landmarks, measurements and posture scores are calculated locally in this assessment flow.</span>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </PageContainer>
    );
};

export default Processing;