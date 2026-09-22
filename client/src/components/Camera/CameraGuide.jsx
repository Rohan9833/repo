import {
    Camera,
    CheckCircle,
    User,
} from "lucide-react";

const CameraGuide = ({ currentStep }) => {
    const tips =
        currentStep === "front"
            ? [
                "Face the camera directly",
                "Keep your full body visible",
                "Stand naturally",
                "Good lighting",
            ]
            : [
                "Turn sideways",
                "Keep your body straight",
                "Both feet visible",
                "Do not lean",
            ];

    return (
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sticky top-24">

            <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                    <Camera
                        size={22}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h2 className="font-semibold text-xl">
                        {currentStep === "front"
                            ? "Front View"
                            : "Side View"}
                    </h2>

                    <p className="text-sm text-slate-500">
                        Follow these instructions
                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {tips.map((tip) => (

                    <div
                        key={tip}
                        className="flex items-center gap-3"
                    >

                        <CheckCircle
                            size={18}
                            className="text-green-600"
                        />

                        <span className="text-slate-700">
                            {tip}
                        </span>

                    </div>

                ))}

            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">

                <User
                    size={72}
                    className="mx-auto text-blue-600"
                />

                <p className="mt-4 text-sm text-slate-600">

                    {currentStep === "front"
                        ? "Look straight at the camera."
                        : "Keep your side profile visible."}

                </p>

            </div>

        </div>
    );
};

export default CameraGuide;