import {
    CheckCircle,
    XCircle,
    Info,
} from "lucide-react";

const UploadInstructions = () => {
    const recommended = [
        "Front view",
        "Side view",
        "Full body visible",
        "Good lighting",
    ];

    const avoid = [
        "Blurred photos",
        "Multiple people",
        "Half body",
        "Objects blocking body",
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-6">

            {/* Recommended */}

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">

                    <CheckCircle
                        size={24}
                        className="text-emerald-600"
                    />

                    <h3 className="text-xl font-semibold text-emerald-700">
                        Recommended
                    </h3>

                </div>

                <div className="grid grid-cols-2 gap-3">

                    {recommended.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-2 text-slate-700"
                        >
                            <CheckCircle
                                size={16}
                                className="text-emerald-600"
                            />

                            <span className="text-sm">
                                {item}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

            {/* Avoid */}

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">

                    <XCircle
                        size={24}
                        className="text-red-600"
                    />

                    <h3 className="text-xl font-semibold text-red-700">
                        Avoid
                    </h3>

                </div>

                <div className="grid grid-cols-2 gap-3">

                    {avoid.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-2 text-slate-700"
                        >
                            <XCircle
                                size={16}
                                className="text-red-500"
                            />

                            <span className="text-sm">
                                {item}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

            {/* Tip */}

            <div className="lg:col-span-2 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-3 items-start">

                <Info
                    size={22}
                    className="text-blue-600 mt-1"
                />

                <p className="text-slate-700 leading-7">
                    For the most accurate assessment, stand naturally against a plain
                    background with your entire body visible from head to toe.
                </p>

            </div>

        </div>
    );
};

export default UploadInstructions;