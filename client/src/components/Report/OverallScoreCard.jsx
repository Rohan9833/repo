import React from "react";

const OverallScoreCard = ({
    score,
    status,
}) => {

    const getClass = () => {

        switch ((status || "").toUpperCase()) {

            case "EXCELLENT":
                return "overall-circle excellent";

            case "GOOD":
                return "overall-circle good";

            case "MILD":
                return "overall-circle mild";

            case "MODERATE":
                return "overall-circle moderate";

            case "SEVERE":
                return "overall-circle severe";

            default:
                return "overall-circle";
        }

    };

    return (

        <div className="overall-card">

            <div className={getClass()}>

                <div className="overall-score">

                    {score}

                </div>

                <div className="overall-total">

                    /100

                </div>

            </div>

            <h2 className="overall-title">

                Overall Wellness Score

            </h2>

            <div className="overall-status">

                {status}

            </div>

        </div>

    );

};

export default OverallScoreCard;