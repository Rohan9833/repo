import React from "react";

import FindingCard from "./FindingCard";

const FindingsGrid = ({ findings }) => {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold">

                    Posture Findings

                </h2>

                <p className="text-slate-500 mt-2">

                    AI-generated posture analysis from MediaPipe landmarks.

                </p>

            </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">

                {findings.map((finding) => (

                    <FindingCard

                        key={finding.id}

                        finding={finding}

                    />

                ))}

            </div>

        </div>

    );

};

export default FindingsGrid;