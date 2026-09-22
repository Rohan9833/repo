import React from "react";

const ScoreCircle = ({ score, status }) => {

    const getCircleClass = () => {

        switch ((status || "").toUpperCase()) {

            case "EXCELLENT":
                return "score-circle excellent";

            case "GOOD":
                return "score-circle good";

            case "MILD":
                return "score-circle mild";

            case "MODERATE":
                return "score-circle moderate";

            case "SEVERE":
                return "score-circle severe";

            default:
                return "score-circle";
        }

    };

    return (

        <div className={getCircleClass()}>

            <div className="score-value">

                {score}

            </div>

            <div className="score-total">

                /100

            </div>

            <div className="score-status">

                {status}

            </div>

        </div>

    );

};

export default ScoreCircle;