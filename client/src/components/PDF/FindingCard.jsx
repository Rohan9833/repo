import React from "react";

const FindingCard = ({ finding }) => {

    const getStatusClass = () => {

        switch ((finding.status || "").toUpperCase()) {

            case "EXCELLENT":
                return "status status-excellent";

            case "GOOD":
                return "status status-good";

            case "MILD":
                return "status status-mild";

            case "MODERATE":
                return "status status-moderate";

            case "SEVERE":
                return "status status-severe";

            default:
                return "status";
        }

    };

    return (

        <div className="finding-card">

            <div className="finding-header">

                <h3 className="finding-title">

                    {finding.title}

                </h3>

                <span className={getStatusClass()}>

                    {finding.status}

                </span>

            </div>

            <div className="measurement-block">

                <div className="measurement-label">

                    Measurement

                </div>

                <div className="measurement-value">

                    {finding.measurement}
                    {" "}
                    {finding.unit}

                </div>

            </div>

            <div className="finding-grid">

                <div>

                    <div className="small-label">

                        Score

                    </div>

                    <div className="score-text">

                        {finding.score}/100

                    </div>

                </div>

                <div>

                    <div className="small-label">

                        Severity

                    </div>

                    <div className="severity-text">

                        {finding.severity}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default FindingCard;