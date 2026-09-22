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
        <PageContainer
            title=""
            subtitle=""
        >
            <div className="min-h-screen bg-[#f5faf6] -mt-6 px-3 py-3 sm:px-5 lg:px-8">

                <div className="mx-auto w-full max-w-[1500px]">

                    {/* ================= HEADER ================= */}

                    <section className="relative overflow-hidden  bg-gradient-to-r from-[#08752f] via-[#159447] to-[#75c96f] px-5 py-6 sm:px-8 lg:px-10 lg:py-7">

                        {/* Background decoration */}

                        <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                        <div className="pointer-events-none absolute right-[18%] bottom-[-80px] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative flex items-center justify-between gap-6">

                            <div className="flex items-center gap-4 sm:gap-6">

                                {/* Logo */}

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg sm:h-16 sm:w-16">

                                    <span className="text-3xl font-extrabold text-[#14863b]">
                                        M
                                    </span>

                                </div>

                                <div>

                                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                                        AI Processing
                                    </h1>

                                    <p className="mt-1 text-sm text-green-50 sm:text-base">
                                        MediaPipe Pose is analyzing your posture.
                                    </p>

                                </div>

                            </div>

                            {/* STATUS */}

                            <div
                                className={`hidden items-center gap-2 rounded-full !px-4 !py-2 text-sm font-semibold sm:flex ${
                                    isFailed
                                        ? "bg-red-50 text-red-600"
                                        : isCompleted
                                            ? "bg-white text-green-700"
                                            : "bg-white/95 text-green-700"
                                }`}
                            >

                                {isFailed ? (
                                    <FaTimesCircle />
                                ) : isCompleted ? (
                                    <FaCheckCircle />
                                ) : (
                                    <FaSpinner className="animate-spin" />
                                )}

                                {isFailed
                                    ? "Failed"
                                    : isCompleted
                                        ? "Completed"
                                        : "Processing..."}

                            </div>

                        </div>

                        {/* Simple visual decoration */}

                        <div className="absolute right-5 bottom-0 hidden opacity-20 lg:block">

                            <div className="flex items-end gap-2">
                                <div className="h-16 w-3 rounded-full bg-white" />
                                <div className="h-24 w-3 rounded-full bg-white" />
                                <div className="h-20 w-3 rounded-full bg-white" />
                                <div className="h-32 w-3 rounded-full bg-white" />
                            </div>

                        </div>

                    </section>


                    {/* ================= STATUS CARD ================= */}

                    <section className="relative z-10 !mx-auto -mt-8 w-[96%] rounded-[22px] border border-green-100 bg-white px-5 py-7 shadow-[0_12px_40px_rgba(21,120,55,0.10)] sm:px-8 sm:py-9 lg:px-10">

                        {/* Loader / Success / Failed Icon */}

                        <div className="flex justify-center">

                            <div
                                className={`flex h-20 w-20 items-center justify-center rounded-full ${
                                    isFailed
                                        ? "bg-red-50"
                                        : isCompleted
                                            ? "bg-green-100"
                                            : "bg-green-50"
                                }`}
                            >

                                {isFailed ? (
                                    <FaTimesCircle
                                        className="text-red-500"
                                        size={40}
                                    />
                                ) : isCompleted ? (
                                    <FaCheckCircle
                                        className="text-green-600"
                                        size={42}
                                    />
                                ) : (
                                    <FaSpinner
                                        className="animate-spin text-green-600"
                                        size={38}
                                    />
                                )}

                            </div>

                        </div>


                        {/* CURRENT STATUS */}

                        <h2
                            className={`mt-5 text-center text-2xl font-bold sm:text-3xl ${
                                isFailed
                                    ? "text-red-600"
                                    : isCompleted
                                        ? "text-green-700"
                                        : "text-[#155d2f]"
                            }`}
                        >
                            {currentStep}
                        </h2>


                        {/* DESCRIPTION */}

                        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500 sm:text-base">

                            {isFailed
                                ? scanData?.error?.message ||
                                  "Something went wrong while detecting body landmarks."
                                : isCompleted
                                    ? "AI has successfully analyzed your posture."
                                    : "Please wait while AI detects body landmarks."}

                        </p>


                        {/* PROGRESS */}

                        <div className="mt-7">

                            <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">

                                <span className="flex items-center gap-2">

                                    <FaRobot className="text-green-600" />

                                    {currentStep}

                                </span>

                                <span>
                                    {progressPercent}%
                                </span>

                            </div>


                            <div className="h-3 overflow-hidden rounded-full bg-green-100">

                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${
                                        isFailed
                                            ? "bg-red-500"
                                            : isCompleted
                                                ? "bg-green-600"
                                                : "bg-gradient-to-r from-green-600 to-green-400 animate-pulse"
                                    }`}
                                    style={{
                                        width: `${progressPercent}%`,
                                    }}
                                />

                            </div>

                        </div>


                        {/* COMPLETED STEPS */}

                        {completedSteps.length > 0 && (

                            <div className="mt-6 flex flex-wrap gap-2">

                                {completedSteps.map(
                                    (step, index) => (

                                        <div
                                            key={index}
                                            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                                                isCompleted
                                                    ? "border-green-200 bg-green-50 text-green-700"
                                                    : "border-green-200 bg-green-50 text-green-700"
                                            }`}
                                        >

                                            <FaCheckCircle />

                                            {step}

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                    </section>


                    {/* ================= IMAGE PREVIEWS ================= */}

                    <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* FRONT IMAGE */}

                        <div className="rounded-[22px] border border-green-100 bg-white p-4 shadow-[0_8px_30px_rgba(21,120,55,0.07)] sm:p-5">

                            <div className="mb-4 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600">
                                        <FaImage size={19} />
                                    </div>

                                    <div>

                                        <h3 className="text-base font-bold text-[#174d2b] sm:text-lg">
                                            Front Image
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Posture preview
                                        </p>

                                    </div>

                                </div>


                                {/* FRONT STATUS */}

                                <span
                                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                                        isFailed && !frontDone
                                            ? "bg-red-50 text-red-600"
                                            : frontDone || isCompleted
                                                ? "bg-green-50 text-green-700"
                                                : "bg-slate-50 text-slate-500"
                                    }`}
                                >

                                    {isFailed && !frontDone ? (
                                        <>
                                            <FaTimesCircle />
                                            Failed
                                        </>
                                    ) : frontDone || isCompleted ? (
                                        <>
                                            <FaCheckCircle />
                                            Loaded
                                        </>
                                    ) : (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Loading
                                        </>
                                    )}

                                </span>

                            </div>


                            {/* FRONT PREVIEW */}

                            <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-[16px] border border-green-100 bg-[#f8fcf9] sm:h-[340px] lg:h-[390px]">

                                {scanData?.frontImage && (

                                    <img
                                        src={getPreviewUrl(
                                            scanData.frontImage
                                        )}
                                        alt="Front"
                                        className="h-full w-full object-contain"
                                    />

                                )}

                            </div>

                        </div>


                        {/* SIDE IMAGE */}

                        <div className="rounded-[22px] border border-green-100 bg-white p-4 shadow-[0_8px_30px_rgba(21,120,55,0.07)] sm:p-5">

                            <div className="mb-4 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600">
                                        <FaImage size={19} />
                                    </div>

                                    <div>

                                        <h3 className="text-base font-bold text-[#174d2b] sm:text-lg">
                                            Side Image
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            Posture preview
                                        </p>

                                    </div>

                                </div>


                                {/* SIDE STATUS */}

                                <span
                                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                                        isFailed && !sideDone
                                            ? "bg-red-50 text-red-600"
                                            : sideDone || isCompleted
                                                ? "bg-green-50 text-green-700"
                                                : "bg-slate-50 text-slate-500"
                                    }`}
                                >

                                    {isFailed && !sideDone ? (
                                        <>
                                            <FaTimesCircle />
                                            Failed
                                        </>
                                    ) : sideDone || isCompleted ? (
                                        <>
                                            <FaCheckCircle />
                                            Loaded
                                        </>
                                    ) : (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Loading
                                        </>
                                    )}

                                </span>

                            </div>


                            {/* SIDE PREVIEW */}

                            <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-[16px] border border-green-100 bg-[#f8fcf9] sm:h-[340px] lg:h-[390px]">

                                {scanData?.sideImage && (

                                    <img
                                        src={getPreviewUrl(
                                            scanData.sideImage
                                        )}
                                        alt="Side"
                                        className="h-full w-full object-contain"
                                    />

                                )}

                            </div>

                        </div>

                    </section>

                </div>

            </div>

        </PageContainer>
    );
};

export default Processing;