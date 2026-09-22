// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//     ArrowLeft,
//     ArrowRight,
//     Camera,
//     Upload,
//     User,
//     Ruler,
//     Weight,
//     Phone,
//     Calendar,
//     HeartPulse,
//     Mars,
//     Venus,
// } from "lucide-react";

// import { useScan } from "../context/ScanContext";
// import "./AssessmentSetup.css";

// const AssessmentSetup = () => {
//     const navigate = useNavigate();
//     const { updateScanData } = useScan();

//     const [formData, setFormData] = useState({
//         fullName: "",
//         age: "",
//         gender: "",
//         height: "",
//         weight: "",
//         mobile: "",
//     });

//     const [scanMode, setScanMode] = useState("");
//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         let { name, value } = e.target;

//         // Age cannot be negative
//         if (name === "age") {
//             if (value === "") {
//                 value = "";
//             } else {
//                 value = Math.max(0, Number(value));
//             }
//         }

//         // Height cannot be negative
//         if (name === "height") {
//             if (value === "") {
//                 value = "";
//             } else {
//                 value = Math.max(0, Number(value));
//             }
//         }

//         // Weight cannot be negative
//         if (name === "weight") {
//             if (value === "") {
//                 value = "";
//             } else {
//                 value = Math.max(0, Number(value));
//             }
//         }

//         // Mobile number only digits and max 10
//         if (name === "mobile") {
//             value = value.replace(/\D/g, "").slice(0, 10);
//         }

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
//     const convertCmToFeet = (cm) => {
//         if (!cm || cm <= 0) return "";

//         const totalInches = cm / 2.54;
//         const feet = Math.floor(totalInches / 12);
//         const inches = Math.round(totalInches % 12);

//         return `${feet} ft ${inches} in`;
//     };

//     const handleContinue = () => {
//         if (
//             !formData.fullName ||
//             !formData.age ||
//             !formData.gender ||
//             !formData.height ||
//             !formData.weight ||
//             !formData.mobile
//         ) {
//             setError("Please fill all the details.");
//             return;
//         }

//         if (!scanMode) {
//             setError("Please select a scan mode.");
//             return;
//         }

//         if (formData.mobile.length !== 10) {
//             setError("Mobile number must be exactly 10 digits.");
//             return;
//         }
//         updateScanData({
//             ...formData,
//             scanMode,
//         });

//         if (scanMode === "camera") {
//             navigate("/camera");
//         } else {
//             navigate("/upload");
//         }
//     };

//     return (
//         <div className="assessment-container">
//             {/* Ambient background accents */}
//             <div className="bg-accent-1" />
//             <div className="bg-accent-2" />
//             <div className="bg-accent-3" />

//             <div className="main-wrapper">
//                 {/* Back */}
//                 <button onClick={() => navigate(-1)} className="back-button">
//                     <ArrowLeft size={20} />
//                     Back
//                 </button>

//                 {/* Heading */}
//                 <div className="header-section">
//                     <div className="icon-wrapper">
//                         <HeartPulse size={26} className="icon-heart" />
//                     </div>
//                     <h1 className="main-title">Health Assessment Setup</h1>
//                     <p className="sub-title">
//                         Enter your details before starting the AI posture assessment.
//                     </p>
//                 </div>

//                 {/* Form Card */}
//                 <div className="form-card">
//                     <div className="form-grid">
//                         {/* Full Name */}
//                         <div className="form-group">
//                             <label htmlFor="fullName" className="form-label">
//                                 <User size={16} className="label-icon" />
//                                 Full Name
//                             </label>
//                             <div className="input-wrapper">
//                                 <User size={18} className="input-icon" />
//                                 <input
//                                     id="fullName"
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     placeholder="Enter your full name"
//                                     className="form-input"
//                                 />
//                             </div>
//                         </div>

//                         {/* Age */}
//                         <div className="form-group">
//                             <label htmlFor="age" className="form-label">
//                                 <Calendar size={16} className="label-icon" />
//                                 Age
//                             </label>
//                             <div className="input-wrapper">
//                                 <Calendar size={18} className="input-icon" />
//                                 <input
//                                     id="age"
//                                     type="number"
//                                     min="0"
//                                     name="age"
//                                     value={formData.age}
//                                     onChange={handleChange}
//                                     placeholder="Enter your age"
//                                     className="form-input"
//                                 />
//                             </div>
//                         </div>

//                         {/* Gender */}
//                         <div className="form-group">
//                             <label className="form-label">
//                                 <User size={16} className="label-icon" />
//                                 Gender
//                             </label>
//                             <div className="gender-group">
//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             gender: "Male",
//                                         }))
//                                     }
//                                     className={`gender-button ${formData.gender === "Male" ? "gender-active" : "gender-inactive"}`}
//                                 >
//                                     <Mars size={18} />
//                                     Male
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             gender: "Female",
//                                         }))
//                                     }
//                                     className={`gender-button ${formData.gender === "Female" ? "gender-active" : "gender-inactive"}`}
//                                 >
//                                     <Venus size={18} />
//                                     Female
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Height */}
//                         <div className="form-group">
//                             <label htmlFor="height" className="form-label">
//                                 <Ruler size={16} className="label-icon" />
//                                 Height (cm)
//                             </label>
//                             <div className="input-wrapper">
//                                 <Ruler size={18} className="input-icon" />
//                                 <input
//                                     id="height"
//                                     type="number"
//                                     min="0"
//                                     step="any"
//                                     name="height"
//                                     value={formData.height}
//                                     onChange={handleChange}
//                                     placeholder="Enter your height in cm"
//                                     className="form-input"
//                                 />

//                                 {formData.height && (
//                                     <small
//                                         style={{
//                                             marginTop: "6px",
//                                             display: "block",
//                                             color: "#666",
//                                             fontSize: "13px",
//                                             fontWeight: "500",
//                                         }}
//                                     >
//                                         Height in Feet: {convertCmToFeet(formData.height)}
//                                     </small>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Weight */}
//                         <div className="form-group">
//                             <label htmlFor="weight" className="form-label">
//                                 <Weight size={16} className="label-icon" />
//                                 Weight (kg)
//                             </label>
//                             <div className="input-wrapper">
//                                 <Weight size={18} className="input-icon" />
//                                 <input
//                                     id="weight"
//                                     type="number"
//                                     min="0"
//                                     step="any"
//                                     name="weight"
//                                     value={formData.weight}
//                                     onChange={handleChange}
//                                     placeholder="Enter your weight in kg"
//                                     className="form-input"
//                                 />
//                             </div>
//                         </div>

//                         {/* Mobile */}
//                         <div className="form-group">
//                             <label htmlFor="mobile" className="form-label">
//                                 <Phone size={16} className="label-icon" />
//                                 Mobile Number
//                             </label>
//                             <div className="input-wrapper">
//                                 <Phone size={18} className="input-icon" />
//                                 <input
//                                     id="mobile"
//                                     type="tel"
//                                     name="mobile"
//                                     value={formData.mobile}
//                                     onChange={handleChange}
//                                     placeholder="Enter your mobile number"
//                                     maxLength={10}
//                                     className="form-input"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Scan Mode */}
//                     <div className="scan-mode-section">
//                         <div className="divider-container">
//                             <div className="divider-left" />
//                             <h2 className="scan-mode-title">Choose Scan Mode</h2>
//                             <div className="divider-right" />
//                         </div>

//                         <div className="scan-mode-grid">
//                             <button
//                                 type="button"
//                                 onClick={() => setScanMode("camera")}
//                                 className={`scan-option ${scanMode === "camera" ? "scan-option-active" : "scan-option-inactive"}`}
//                             >
//                                 <div className="scan-option-content">
//                                     <div className={`scan-icon-wrapper ${scanMode === "camera" ? "scan-icon-active" : "scan-icon-inactive"}`}>
//                                         <Camera size={26} className="scan-icon" />
//                                     </div>
//                                     <div className="scan-text">
//                                         <h3 className="scan-option-title">Live Camera</h3>
//                                         <p className="scan-option-description">
//                                             Capture images directly using your device camera.
//                                         </p>
//                                     </div>
//                                     <div className={`scan-arrow ${scanMode === "camera" ? "scan-arrow-active" : "scan-arrow-inactive"}`}>
//                                         <ArrowRight size={16} />
//                                     </div>
//                                 </div>
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={() => setScanMode("upload")}
//                                 className={`scan-option ${scanMode === "upload" ? "scan-option-active" : "scan-option-inactive"}`}
//                             >
//                                 <div className="scan-option-content">
//                                     <div className={`scan-icon-wrapper ${scanMode === "upload" ? "scan-icon-active" : "scan-icon-inactive"}`}>
//                                         <Upload size={26} className="scan-icon" />
//                                     </div>
//                                     <div className="scan-text">
//                                         <h3 className="scan-option-title">Upload Images</h3>
//                                         <p className="scan-option-description">
//                                             Upload existing front and side posture images.
//                                         </p>
//                                     </div>
//                                     <div className={`scan-arrow ${scanMode === "upload" ? "scan-arrow-active" : "scan-arrow-inactive"}`}>
//                                         <ArrowRight size={16} />
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                     </div>

//                     {error && <p className="error-message">{error}</p>}

//                     <div className="button-container">
//                         <button onClick={handleContinue} className="continue-button">
//                             Continue Assessment
//                             <ArrowRight size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AssessmentSetup;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Camera,
    Upload,
    User,
    Ruler,
    Weight,
    Phone,
    Calendar,
    HeartPulse,
    Mars,
    Venus,
    Sparkles,
    ShieldCheck,
    Target,
    Lock,
} from "lucide-react";

import { useScan } from "../context/ScanContext";
import "./AssessmentSetup.css";

const AssessmentSetup = () => {
    const navigate = useNavigate();
    const { updateScanData } = useScan();

    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        mobile: "",
    });

    const [scanMode, setScanMode] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        let { name, value } = e.target;

        // Age cannot be negative
        if (name === "age") {
            if (value === "") {
                value = "";
            } else {
                value = Math.max(0, Number(value));
            }
        }

        // Height cannot be negative
        if (name === "height") {
            if (value === "") {
                value = "";
            } else {
                value = Math.max(0, Number(value));
            }
        }

        // Weight cannot be negative
        if (name === "weight") {
            if (value === "") {
                value = "";
            } else {
                value = Math.max(0, Number(value));
            }
        }

        // Mobile number only digits and max 10
        if (name === "mobile") {
            value = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const convertCmToFeet = (cm) => {
        if (!cm || cm <= 0) return "";

        const totalInches = cm / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);

        return `${feet} ft ${inches} in`;
    };

    const handleContinue = () => {
        if (
            !formData.fullName ||
            !formData.age ||
            !formData.gender ||
            !formData.height ||
            !formData.weight ||
            !formData.mobile
        ) {
            setError("Please fill all the details.");
            return;
        }

        if (!scanMode) {
            setError("Please select a scan mode.");
            return;
        }

        if (formData.mobile.length !== 10) {
            setError("Mobile number must be exactly 10 digits.");
            return;
        }
        updateScanData({
            ...formData,
            scanMode,
        });

        if (scanMode === "camera") {
            navigate("/camera");
        } else {
            navigate("/upload");
        }
    };

    return (
        <div className="assessment-container">
            <div className="assessment-shell">
                {/* Left intro panel */}
                <aside className="intro-panel">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <ArrowLeft size={18} />
                        Back
                    </button>

                    <div className="intro-copy">
                        {/* <div className="icon-wrapper">
                            <HeartPulse size={24} className="icon-heart" />
                        </div> */}
                        <h1 className="main-title">
                            Health
                            <br />
                            Assessment Setup
                        </h1>
                        <p className="sub-title">
                            Enter your details before starting the AI posture assessment.
                        </p>
                    </div>

                    <div className="illustration-wrap">
                        <div className="blob-" aria-hidden="true" />

                        <div className="badge-card badge-top-left">
                            <span className="badge-icon">
                                <Sparkles size={16} />
                            </span>
                            <span>
                                <strong>AI Powered</strong>
                                <small>Smart posture analysis</small>
                            </span>
                        </div>

                        <div className="badge-card badge-mid-right">
                            <span className="badge-icon">
                                <Target size={16} />
                            </span>
                            <span>
                                <strong>Accurate</strong>
                                <small>Get precise insights</small>
                            </span>
                        </div>

                        <div className="badge-card badge-bottom-left">
                            <span className="badge-icon">
                                <ShieldCheck size={16} />
                            </span>
                            <span>
                                <strong>Secure &amp; Private</strong>
                                <small>Your data is safe with us</small>
                            </span>
                        </div>

                        {/* <svg
                            className="posture-figure"
                            viewBox="0 0 220 380"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <ellipse cx="110" cy="360" rx="70" ry="14" className="figure-shadow" />
                            <circle cx="108" cy="46" r="30" className="figure-skin" />
                            <path
                                d="M78 44c2-18 14-30 30-30s28 12 30 30c2 10-2 16-8 18-6-10-10-14-22-14s-16 4-22 14c-6-2-10-8-8-18z"
                                className="figure-hair"
                            />
                            <path
                                d="M62 96c4-14 20-24 46-24s42 10 46 24l10 92c2 14-6 24-18 26l-6 60c-1 8-7 13-15 13H91c-8 0-14-5-15-13l-6-60c-12-2-20-12-18-26z"
                                className="figure-shirt"
                            />
                            <path
                                d="M92 274l-4 46c-1 7-6 12-13 12H63c-6 0-9-6-6-11l18-42-13-8 20-16z"
                                className="figure-shorts"
                            />
                            <path
                                d="M128 274l4 46c1 7 6 12 13 12h12c6 0 9-6 6-11l-18-42 13-8-20-16z"
                                className="figure-shorts"
                            />
                            <path
                                d="M110 96v168"
                                className="figure-spine"
                                strokeDasharray="1 13"
                                strokeLinecap="round"
                            />
                            <circle cx="110" cy="112" r="4" className="figure-dot" />
                            <circle cx="110" cy="150" r="4" className="figure-dot" />
                            <circle cx="110" cy="188" r="4" className="figure-dot" />
                            <circle cx="110" cy="226" r="4" className="figure-dot" />
                            <circle cx="110" cy="256" r="4" className="figure-dot" />
                        </svg> */}
                        <img src="/output1.png" alt="" />
                    </div>
                </aside>

                {/* Form Card */}
                <div className="form-card">
                    <div className="form-grid">
                        {/* Full Name */}
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">
                                <User size={16} className="label-icon" />
                                Full Name
                            </label>
                            <div className="input-wrapper">
                                <User size={18} className="input-icon" />
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Age */}
                        <div className="form-group">
                            <label htmlFor="age" className="form-label">
                                <Calendar size={16} className="label-icon" />
                                Age
                            </label>
                            <div className="input-wrapper">
                                <Calendar size={18} className="input-icon" />
                                <input
                                    id="age"
                                    type="number"
                                    min="0"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Enter your age"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="form-group">
                            <label className="form-label">
                                <User size={16} className="label-icon" />
                                Gender
                            </label>
                            <div className="gender-group">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            gender: "Male",
                                        }))
                                    }
                                    className={`gender-button ${formData.gender === "Male" ? "gender-active" : "gender-inactive"}`}
                                >
                                    <span className="gender-label">
                                        <Mars size={18} />
                                        Male
                                    </span>
                                    <span
                                        className={`gender-check ${formData.gender === "Male" ? "gender-check-active" : ""}`}
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            gender: "Female",
                                        }))
                                    }
                                    className={`gender-button ${formData.gender === "Female" ? "gender-active" : "gender-inactive"}`}
                                >
                                    <span className="gender-label">
                                        <Venus size={18} />
                                        Female
                                    </span>
                                    <span
                                        className={`gender-check ${formData.gender === "Female" ? "gender-check-active" : ""}`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Height */}
                        <div className="form-group">
                            <label htmlFor="height" className="form-label">
                                <Ruler size={16} className="label-icon" />
                                Height (cm)
                            </label>
                            <div className="input-wrapper">
                                <Ruler size={18} className="input-icon" />
                                <input
                                    id="height"
                                    type="number"
                                    min="0"
                                    step="any"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    placeholder="Enter your height in cm"
                                    className="form-input"
                                />
                            </div>
                            {formData.height && (
                                <small className="height-hint">
                                    Height in Feet: {convertCmToFeet(formData.height)}
                                </small>
                            )}
                        </div>

                        {/* Weight */}
                        <div className="form-group">
                            <label htmlFor="weight" className="form-label">
                                <Weight size={16} className="label-icon" />
                                Weight (kg)
                            </label>
                            <div className="input-wrapper">
                                <Weight size={18} className="input-icon" />
                                <input
                                    id="weight"
                                    type="number"
                                    min="0"
                                    step="any"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Enter your weight in kg"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="form-group">
                            <label htmlFor="mobile" className="form-label">
                                <Phone size={16} className="label-icon" />
                                Mobile Number
                            </label>
                            <div className="input-wrapper">
                                <Phone size={18} className="input-icon" />
                                <input
                                    id="mobile"
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number"
                                    maxLength={10}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scan Mode */}
                    <div className="scan-mode-section">
                        <div className="divider-container">
                            <div className="divider-left" />
                            <h2 className="scan-mode-title">Choose Scan Mode</h2>
                            <div className="divider-right" />
                        </div>

                        <div className="scan-mode-grid">
                            <button
                                type="button"
                                onClick={() => setScanMode("camera")}
                                className={`scan-option ${scanMode === "camera" ? "scan-option-active" : "scan-option-inactive"}`}
                            >
                                <div className="scan-option-content">
                                    <div className={`scan-icon-wrapper ${scanMode === "camera" ? "scan-icon-active" : "scan-icon-inactive"}`}>
                                        <Camera size={24} className="scan-icon" />
                                    </div>
                                    <div className="scan-text">
                                        <h3 className="scan-option-title">Live Camera</h3>
                                        <p className="scan-option-description">
                                            Capture images directly using your device camera.
                                        </p>
                                    </div>
                                    <div className={`scan-arrow ${scanMode === "camera" ? "scan-arrow-active" : "scan-arrow-inactive"}`}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </button>

                            <button
                                type="button"
                                onClick={() => setScanMode("upload")}
                                className={`scan-option ${scanMode === "upload" ? "scan-option-active" : "scan-option-inactive"}`}
                            >
                                <div className="scan-option-content">
                                    <div className={`scan-icon-wrapper ${scanMode === "upload" ? "scan-icon-active" : "scan-icon-inactive"}`}>
                                        <Upload size={24} className="scan-icon" />
                                    </div>
                                    <div className="scan-text">
                                        <h3 className="scan-option-title">Upload Images</h3>
                                        <p className="scan-option-description">
                                            Upload existing front and side posture images.
                                        </p>
                                    </div>
                                    <div className={`scan-arrow ${scanMode === "upload" ? "scan-arrow-active" : "scan-arrow-inactive"}`}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="button-container">
                        <button onClick={handleContinue} className="continue-button">
                            Continue Assessment
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <p className="secure-note">
                        <Lock size={13} />
                        Your information is 100% secure and confidential.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AssessmentSetup;