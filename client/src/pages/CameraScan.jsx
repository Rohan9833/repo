import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import PageContainer from "../components/Layout/PageContainer";
import CameraView from "../components/Camera/CameraView";
import CameraGuide from "../components/Camera/CameraGuide";
import CaptureControls from "../components/Camera/CaptureControls";
import { useScan } from "../context/ScanContext";

const CameraScan = () => {
    const navigate = useNavigate();
    const { updateScanData } = useScan();

    const streamRef = useRef(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(document.createElement("canvas"));

    const [stream, setStream] = useState(null);
    const [cameraError, setCameraError] = useState(null);

    // "user" = front/selfie camera, "environment" = back camera
    const [facingMode, setFacingMode] = useState("user");

    const [currentStep, setCurrentStep] = useState("front");

    const [frontImage, setFrontImage] = useState(null);
    const [sideImage, setSideImage] = useState(null);

    // Open Camera
    useEffect(() => {
        startCamera(facingMode);

        return () => {
            stopCamera();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const startCamera = async (facing = facingMode) => {

        setCameraError(null);

        // getUserMedia only works in a secure context: HTTPS, or
        // localhost/127.0.0.1. Testing on a phone via a plain http://
        // LAN IP (e.g. http://192.168.x.x:3000) will fail this check
        // even though the permission prompt may still appear.
        if (!window.isSecureContext) {
            const message =
                "Camera access requires a secure connection (HTTPS). " +
                "If you're testing on your phone via a local network " +
                "IP address, use an HTTPS tunnel (e.g. ngrok) or a " +
                "deployed HTTPS URL instead.";

            console.error(message);
            setCameraError(message);
            alert(message);
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            const message = "This browser does not support camera access.";
            console.error(message);
            setCameraError(message);
            alert(message);
            return;
        }

        // Stop any previous stream before requesting a new one
        stopCamera();

        try {

            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: { ideal: facing },
                },
                audio: false,
            });

            streamRef.current = mediaStream;
            setStream(mediaStream);
            setFacingMode(facing);

        } catch (error) {

            console.error("Camera Error:", error.name, error.message);

            let message = "Unable to access camera.";

            if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
                message =
                    "Camera permission was denied. Please allow camera " +
                    "access for this site in your browser settings and try again.";
            } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
                message = "No camera was found on this device.";
            } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
                message =
                    "The camera is already in use by another app or tab. " +
                    "Close it and try again.";
            } else if (error.name === "OverconstrainedError") {
                message = "The camera does not support the requested settings.";
            } else if (error.name === "SecurityError") {
                message = "Camera access is blocked. Make sure you're using HTTPS.";
            }

            setCameraError(message);
            alert(message);

        }

    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }
    };

    // Switches between front ("user") and back ("environment") camera
    const flipCamera = () => {
        const nextFacing = facingMode === "user" ? "environment" : "user";
        startCamera(nextFacing);
    };

    // Receive video element from CameraView
    useEffect(() => {
        const timer = setInterval(() => {
            const video = document.querySelector("video");

            if (video) {
                videoRef.current = video;
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [stream]);

    const captureImage = () => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");

        // Note: we intentionally draw the RAW (un-mirrored) frame here,
        // even though the front camera preview is mirrored on screen
        // for natural viewing. The saved/captured image stays true to
        // real left/right orientation, which matters for accurate
        // posture (left vs. right shoulder/hip) analysis.
        ctx.drawImage(video, 0, 0);

        const image = canvas.toDataURL("image/png");

        if (currentStep === "front") {
            setFrontImage(image);
            setCurrentStep("side");
        } else {
            setSideImage(image);
        }
    };

    const retakeImage = () => {
        if (currentStep === "front") {
            setFrontImage(null);
        } else {
            setSideImage(null);
        }
    };

    const continueProcess = () => {
        if (!frontImage || !sideImage) {
            alert("Please capture both images.");
            return;
        }

        updateScanData({
            frontImage,
            sideImage,
            source: "camera",
        });

        navigate("/processing");
    };

    return (
        <PageContainer
            title="Camera Scan"
            subtitle="Capture your front and side posture images. Both images are required before AI analysis begins."
        >
            {/* Camera error banner */}

            {cameraError && (

                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 text-sm font-medium flex items-center justify-between gap-4">

                    <span>{cameraError}</span>

                    <button
                        onClick={() => startCamera(facingMode)}
                        className="shrink-0 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold"
                    >
                        Retry
                    </button>

                </div>

            )}

            {/* Top Section */}

            <div className="grid xl:grid-cols-4 gap-8 items-start">

                {/* Guide */}

                <div className="xl:col-span-1">

                    <CameraGuide
                        currentStep={currentStep}
                    />

                </div>

                {/* Camera */}

                <div className="xl:col-span-3">

                    <CameraView
                        stream={stream}
                        facingMode={facingMode}
                    />

                </div>

            </div>

            {/* Controls */}

            <div className="mt-8">

                <CaptureControls
                    currentStep={currentStep}
                    onCapture={captureImage}
                    onRetake={retakeImage}
                    onFlip={flipCamera}
                    onContinue={continueProcess}
                    frontCaptured={!!frontImage}
                    sideCaptured={!!sideImage}
                />

            </div>

            {/* Captured Images */}

            <div className="mt-10">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h2 className="text-2xl font-semibold text-slate-900">
                            Captured Images
                        </h2>

                        <p className="text-slate-500 mt-1">
                            Review your captured photos before continuing.
                        </p>

                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Front */}

                    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

                        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">

                            <h3 className="font-semibold text-lg">
                                Front View
                            </h3>

                            {frontImage ? (
                                <span className="text-green-600 font-medium text-sm">
                                    ✓ Captured
                                </span>
                            ) : (
                                <span className="text-slate-400 text-sm">
                                    Pending
                                </span>
                            )}

                        </div>

                        {frontImage ? (
                            <img
                                src={frontImage}
                                alt="Front"
                                className="w-full h-72 object-contain bg-slate-50"
                            />
                        ) : (
                            <div className="h-72 flex items-center justify-center bg-slate-50 text-slate-400">
                                No Image Captured
                            </div>
                        )}

                    </div>

                    {/* Side */}

                    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

                        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">

                            <h3 className="font-semibold text-lg">
                                Side View
                            </h3>

                            {sideImage ? (
                                <span className="text-green-600 font-medium text-sm">
                                    ✓ Captured
                                </span>
                            ) : (
                                <span className="text-slate-400 text-sm">
                                    Pending
                                </span>
                            )}

                        </div>

                        {sideImage ? (
                            <img
                                src={sideImage}
                                alt="Side"
                                className="w-full h-72 object-contain bg-slate-50"
                            />
                        ) : (
                            <div className="h-72 flex items-center justify-center bg-slate-50 text-slate-400">
                                No Image Captured
                            </div>
                        )}

                    </div>
                    <div className="mb-6">
                        <button
                            onClick={() => navigate("/assessment")}
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <ArrowLeft size={18} />
                            Back to Assessment
                        </button>
                    </div>

                </div>

            </div>

        </PageContainer>
    );
};

export default CameraScan;