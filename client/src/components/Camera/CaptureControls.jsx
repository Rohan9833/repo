import React from "react";
import {
    Camera,
    RotateCcw,
    ArrowRight,
    CheckCircle2,
    Circle,
    SwitchCamera,
} from "lucide-react";
import Button from "../UI/Button";

const CaptureControls = ({
    currentStep,
    onCapture,
    onRetake,
    onFlip,
    onContinue,
    frontCaptured,
    sideCaptured,
}) => {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                    <h2 className="text-xl font-semibold text-slate-900">
                        Camera Controls
                    </h2>

                    <p className="text-slate-500 mt-1">
                        {currentStep === "front"
                            ? "Capture your front view first."
                            : "Now capture your side view."}
                    </p>

                </div>

                {/* Status */}

                <div className="flex gap-6">

                    <div className="flex items-center gap-2">

                        {frontCaptured ? (
                            <CheckCircle2
                                size={20}
                                className="text-green-600"
                            />
                        ) : (
                            <Circle
                                size={20}
                                className="text-slate-400"
                            />
                        )}

                        <span className="text-sm font-medium">
                            Front
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        {sideCaptured ? (
                            <CheckCircle2
                                size={20}
                                className="text-green-600"
                            />
                        ) : (
                            <Circle
                                size={20}
                                className="text-slate-400"
                            />
                        )}

                        <span className="text-sm font-medium">
                            Side
                        </span>

                    </div>

                </div>

            </div>

            {/* Buttons */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <Button
                    onClick={onCapture}
                    size="lg"
                    className="flex justify-center items-center gap-2"
                >
                    <Camera size={18} />
                    Capture
                </Button>

                <Button
                    variant="outline"
                    onClick={onRetake}
                    size="lg"
                    className="flex justify-center items-center gap-2"
                >
                    <RotateCcw size={18} />
                    Retake
                </Button>

                <Button
                    variant="outline"
                    onClick={onFlip}
                    size="lg"
                    className="flex justify-center items-center gap-2"
                >
                    <SwitchCamera size={18} />
                    Flip Camera
                </Button>

                <Button
                    variant="success"
                    onClick={onContinue}
                    disabled={!frontCaptured || !sideCaptured}
                    size="lg"
                    className="flex justify-center items-center gap-2"
                >
                    Continue
                    <ArrowRight size={18} />
                </Button>

            </div>

            {/* Progress */}

            <div className="mt-8">

                <div className="flex justify-between text-sm text-slate-500 mb-2">

                    <span>Capture Progress</span>

                    <span>
                        {(frontCaptured ? 1 : 0) + (sideCaptured ? 1 : 0)} / 2
                    </span>

                </div>

                <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">

                    <div
                        className={`h-full rounded-full transition-all duration-500 ${frontCaptured && sideCaptured
                            ? "w-full bg-green-500"
                            : frontCaptured
                                ? "w-1/2 bg-blue-500"
                                : "w-0"
                            }`}
                    />

                </div>

            </div>

        </div>
    );
};

export default CaptureControls;