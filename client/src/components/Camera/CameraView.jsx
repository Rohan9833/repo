import React, { useEffect, useRef } from "react";
import {
    Camera,
    ScanLine,
    ShieldCheck,
} from "lucide-react";

const CameraView = ({ stream, facingMode = "user" }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    // Only mirror the FRONT (selfie) camera, like every normal camera
    // app does — it feels natural to look at, like a real mirror.
    // The back camera is left un-mirrored since that's the raw,
    // real-world orientation people expect from it.
    const isMirrored = facingMode === "user";

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            {/* Header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

                        <Camera
                            size={22}
                            className="text-blue-600"
                        />

                    </div>

                    <div>

                        <h2 className="font-semibold text-lg text-slate-900">
                            Live Camera
                        </h2>

                        <p className="text-sm text-slate-500">
                            Position your body inside the frame
                        </p>

                    </div>

                </div>

                <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                    <ShieldCheck size={16} />

                    Camera Ready

                </div>

            </div>

            {/* Camera */}

            <div className="relative bg-black">

                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    style={{
                        transform: isMirrored ? "scaleX(-1)" : "none",
                    }}
                    className="w-full h-[600px] lg:h-[640px] object-cover"
                />

                {/* Scan Frame */}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                    <div className="w-[70%] h-[88%] border-[3px] border-white/70 rounded-3xl">

                        <div className="absolute top-6 left-6 w-8 h-8 border-l-4 border-t-4 border-blue-400 rounded-tl-lg"></div>

                        <div className="absolute top-6 right-6 w-8 h-8 border-r-4 border-t-4 border-blue-400 rounded-tr-lg"></div>

                        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-4 border-b-4 border-blue-400 rounded-bl-lg"></div>

                        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-4 border-b-4 border-blue-400 rounded-br-lg"></div>

                    </div>

                </div>

                {/* AI Badge */}

                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2">

                    <ScanLine
                        size={18}
                        className="text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                        AI Scan Active
                    </span>

                </div>

            </div>

        </div>
    );
};

export default CameraView;