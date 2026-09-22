import React from "react";

const LandmarkViewer = ({
    landmarks = [],
}) => {
    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Detected Landmarks
            </h2>

            {!landmarks.length ? (
                <div className="text-slate-500">
                    No landmarks detected.
                </div>
            ) : (
                <div className="overflow-auto max-h-[500px]">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-blue-600 text-white">

                                <th className="p-3 text-left">
                                    #
                                </th>

                                <th className="p-3 text-left">
                                    X
                                </th>

                                <th className="p-3 text-left">
                                    Y
                                </th>

                                <th className="p-3 text-left">
                                    Z
                                </th>

                                <th className="p-3 text-left">
                                    Visibility
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {landmarks.map((point, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-slate-200"
                                >
                                    <td className="p-3 font-medium">
                                        {index}
                                    </td>

                                    <td className="p-3">
                                        {point.x.toFixed(4)}
                                    </td>

                                    <td className="p-3">
                                        {point.y.toFixed(4)}
                                    </td>

                                    <td className="p-3">
                                        {point.z.toFixed(4)}
                                    </td>

                                    <td className="p-3">
                                        {(point.visibility ?? 0).toFixed(2)}
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            )}

        </div>
    );
};

export default LandmarkViewer;