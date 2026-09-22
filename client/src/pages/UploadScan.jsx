// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, CheckCircle } from "lucide-react";
// import { ArrowLeft } from "lucide-react";

// import PageContainer from "../components/Layout/PageContainer";
// import Button from "../components/UI/Button";

// import UploadInstructions from "../components/Upload/UploadInstructions";
// import UploadBox from "../components/Upload/UploadBox";
// import ImagePreview from "../components/Upload/ImagePreview";

// import { useScan } from "../context/ScanContext";

// const UploadScan = () => {
//     const navigate = useNavigate();
//     const { updateScanData } = useScan();

//     const [frontImage, setFrontImage] = useState(null);
//     const [sideImage, setSideImage] = useState(null);

//     const handleContinue = () => {
//         if (!frontImage || !sideImage) {
//             alert("Please upload both Front and Side images.");
//             return;
//         }
//         console.log(frontImage);
//         console.log(sideImage);
//         updateScanData({
//             frontImage,
//             sideImage,
//             source: "upload",
//         });

//         navigate("/processing");
//     };

//     return (
//         <PageContainer
//             title="Upload Images"
//             subtitle="Upload your front and side posture images. Both images are required before AI analysis begins."
//         >
//             {/* Instructions */}

//             <UploadInstructions />

//             {/* Step Indicator */}

//             <div className="mt-10 flex items-center justify-center gap-4 text-sm font-medium flex-wrap">

//                 <div className="flex items-center gap-2 text-blue-600">
//                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
//                         1
//                     </div>
//                     Front Image
//                 </div>

//                 <div className="w-10 h-px bg-slate-300 hidden sm:block"></div>

//                 <div className="flex items-center gap-2 text-blue-600">
//                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
//                         2
//                     </div>
//                     Side Image
//                 </div>

//                 <div className="w-10 h-px bg-slate-300 hidden sm:block"></div>

//                 <div className="flex items-center gap-2 text-slate-500">
//                     <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center">
//                         3
//                     </div>
//                     Analyze
//                 </div>

//             </div>

//             {/* Front Upload */}

//             <section className="mt-16">

//                 <h2 className="text-2xl font-bold text-slate-900 mb-6">
//                     Front View
//                 </h2>

//                 <div className="grid lg:grid-cols-2 gap-8">

//                     <UploadBox
//                         title="Upload Front Image"
//                         image={frontImage}
//                         onImageSelect={setFrontImage}
//                     />

//                     <ImagePreview
//                         title=""
//                         file={frontImage}
//                     />

//                 </div>

//             </section>

//             {/* Side Upload */}

//             <section className="mt-16">

//                 <h2 className="text-2xl font-bold text-slate-900 mb-6">
//                     Side View
//                 </h2>

//                 <div className="grid lg:grid-cols-2 gap-8">

//                     <UploadBox
//                         title="Upload Side Image"
//                         image={sideImage}
//                         onImageSelect={setSideImage}
//                     />

//                     <ImagePreview
//                         title=""
//                         file={sideImage}
//                     />

//                 </div>

//             </section>
//             <div className="mb-6">
//                 <button
//                     onClick={() => navigate("/assessment")}
//                     className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                     <ArrowLeft size={18} />
//                     Back to Assessment
//                 </button>
//             </div>

//             {/* Summary */}

//             <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6">

//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

//                     <div className="space-y-3">

//                         <div className="flex items-center gap-3">

//                             <CheckCircle
//                                 size={20}
//                                 className={
//                                     frontImage
//                                         ? "text-green-600"
//                                         : "text-slate-300"
//                                 }
//                             />

//                             <span className="text-slate-700">
//                                 Front Image
//                             </span>

//                         </div>

//                         <div className="flex items-center gap-3">

//                             <CheckCircle
//                                 size={20}
//                                 className={
//                                     sideImage
//                                         ? "text-green-600"
//                                         : "text-slate-300"
//                                 }
//                             />

//                             <span className="text-slate-700">
//                                 Side Image
//                             </span>

//                         </div>

//                     </div>

//                     <Button
//                         size="lg"
//                         onClick={handleContinue}
//                         disabled={!frontImage || !sideImage}
//                         icon={<ArrowRight size={18} />}
//                     >
//                         Continue
//                     </Button>

//                 </div>

//             </div>

//         </PageContainer>
//     );
// };

// export default UploadScan;
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    UploadCloud,
    UserRound,
    Eye,
    CheckCircle2,
    Circle,
    XCircle,
    Info,
    Image as ImageIcon,
} from "lucide-react";

import { useScan } from "../context/ScanContext";
import "./UploadScan.css";

const UploadScan = () => {
    const navigate = useNavigate();
    const { updateScanData } = useScan();

    const frontInputRef = useRef(null);
    const sideInputRef = useRef(null);

    const [frontImage, setFrontImage] = useState(null);
    const [sideImage, setSideImage] = useState(null);

    const [frontPreview, setFrontPreview] = useState(null);
    const [sidePreview, setSidePreview] = useState(null);

    const handleImage = (file, type) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("Image size must be less than 10MB.");
            return;
        }

        const preview = URL.createObjectURL(file);

        if (type === "front") {
            setFrontImage(file);
            setFrontPreview(preview);
        } else {
            setSideImage(file);
            setSidePreview(preview);
        }
    };

    const handleDrop = (e, type) => {
        e.preventDefault();

        const file = e.dataTransfer.files?.[0];

        if (file) {
            handleImage(file, type);
        }
    };

    const handleContinue = () => {
        if (!frontImage || !sideImage) {
            alert("Please upload both Front and Side images.");
            return;
        }

        updateScanData({
            frontImage,
            sideImage,
            source: "upload",
        });

        navigate("/processing");
    };

    const UploadArea = ({
        type,
        image,
        inputRef,
        onSelect,
    }) => {
        return (
            <div
                className={`upload-area ${image ? "has-image" : ""}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, type)}
                onClick={() => inputRef.current?.click()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                        onSelect(e.target.files?.[0]);
                        e.target.value = "";
                    }}
                />

                {image ? (
                    <div className="selected-image">
                        <img
                            src={
                                type === "front"
                                    ? frontPreview
                                    : sidePreview
                            }
                            alt={`${type} posture`}
                        />

                        <div className="image-overlay">
                            <UploadCloud size={22} />
                            <span>Change image</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="upload-icon">
                            <UploadCloud size={30} />
                        </div>

                        <h3>Drag & drop your image here</h3>

                        <p>or click to browse files</p>

                        <span className="file-types">
                            JPG, PNG, JPEG · Max 10MB
                        </span>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="upload-page">

            {/* TOP HERO */}

            <section className="upload-hero">

                <button
                    className="back-button"
                    onClick={() => navigate("/assessment")}
                >
                    <ArrowLeft size={19} />
                    Back to Assessment
                </button>

                <div className="hero-content">

                    <div className="hero-icon">
                        <UploadCloud size={42} />
                    </div>

                    <div className="hero-text">
                        <h1>
                            Upload <span>Images</span>
                        </h1>

                        <p>
                            Upload your front and side posture images.
                            <br />
                            Both images are required before AI analysis begins.
                        </p>
                    </div>

                </div>

                <div className="hero-image max-w-full max-h-full object-contain">
                    <img
                        src="/uploadheader.png"
                        alt="Posture exercise"
                    />

                    {/* <div className="hero-check">
                        <CheckCircle2 size={34} />
                    </div> */}
                </div>

            </section>

            {/* INSTRUCTIONS */}

            <section className="instruction-row">

                <div className="instruction-card recommended">

                    <div className="instruction-title">
                        <CheckCircle2 size={20} />
                        <strong>Recommended</strong>
                    </div>

                    <div className="instruction-list">
                        <span>✓ Front view</span>
                        <span>✓ Good lighting</span>
                        <span>✓ Side view</span>
                        <span>✓ Plain background</span>
                        <span>✓ Full body visible</span>
                        <span>✓ Stand naturally</span>
                    </div>

                </div>

                <div className="instruction-card avoid">

                    <div className="instruction-title">
                        <XCircle size={20} />
                        <strong>Avoid</strong>
                    </div>

                    <div className="instruction-list">
                        <span>× Blurred photos</span>
                        <span>× Multiple people</span>
                        <span>× Half body</span>
                        <span>× Objects blocking body</span>
                    </div>

                </div>

                <div className="instruction-card information">

                    <Info size={23} />

                    <p>
                        For best results, stand naturally against a plain
                        background with your entire body visible from head to toe.
                    </p>

                </div>

            </section>

            {/* STEPS */}

            <div className="steps">

                <div className="step active">
                    <span>1</span>
                    Front Image
                </div>

                <div className="step-line"></div>

                <div className={`step ${frontImage ? "completed" : ""}`}>
                    <span>2</span>
                    Side Image
                </div>

                <div className="step-line"></div>

                <div className="step">
                    <span>3</span>
                    Analyze
                </div>

            </div>

            {/* FRONT */}

            <section className="image-section">

                <div className="image-card">

                    <div className="card-heading">

                        <div className="heading-icon">
                            <UserRound size={20} />
                        </div>

                        <div>
                            <h2>Front View</h2>
                            <p>Upload front posture image</p>
                        </div>

                    </div>

                    <UploadArea
                        type="front"
                        image={frontImage}
                        inputRef={frontInputRef}
                        onSelect={(file) => handleImage(file, "front")}
                    />

                </div>
                <div className="image-card">

                    <div className="card-heading">

                        <div className="heading-icon">
                            <UserRound size={20} />
                        </div>

                        <div>
                            <h2>Side View</h2>
                            <p>Upload side posture image</p>
                        </div>

                    </div>

                    <UploadArea
                        type="side"
                        image={sideImage}
                        inputRef={sideInputRef}
                        onSelect={(file) => handleImage(file, "side")}
                    />

                </div>

 

            </section>



            {/* BOTTOM ACTION */}

            <section className="bottom-bar">

                <button
                    className="bottom-back"
                    onClick={() => navigate("/assessment")}
                >
                    <ArrowLeft size={19} />
                    Back to Assessment
                </button>

                <div className="bottom-status">

                    <div className="bottom-status-item">
                        {frontImage ? (
                            <CheckCircle2 size={22} />
                        ) : (
                            <Circle size={22} />
                        )}
                        Front Image
                    </div>

                    <div className="status-line"></div>

                    <div className="bottom-status-item">
                        {sideImage ? (
                            <CheckCircle2 size={22} />
                        ) : (
                            <Circle size={22} />
                        )}
                        Side Image
                    </div>

                </div>

                <button
                    className="continue-button"
                    onClick={handleContinue}
                    disabled={!frontImage || !sideImage}
                >
                    Continue
                    <ArrowRight size={20} />
                </button>

            </section>

        </div>
    );
};

export default UploadScan;