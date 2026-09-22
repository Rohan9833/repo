import React from "react";

const RecommendationSection = ({ findings }) => {

    const recommendations = [];

    findings.forEach((item) => {

        if (
            item.status === "MILD" ||
            item.status === "MODERATE" ||
            item.status === "SEVERE"
        ) {

            switch (item.id) {

                case "headTilt":

                    recommendations.push(
                        "Perform gentle neck stretching exercises to improve head alignment."
                    );

                    break;

                case "shoulderHeightDifference":

                    recommendations.push(
                        "Include shoulder mobility and strengthening exercises."
                    );

                    break;

                case "pelvicLevelness":

                    recommendations.push(
                        "Improve hip stability with glute strengthening exercises."
                    );

                    break;

                case "spinalAlignment":

                    recommendations.push(
                        "Focus on maintaining a neutral spine while standing and sitting."
                    );

                    break;

                case "armSymmetry":

                    recommendations.push(
                        "Practice bilateral shoulder strengthening exercises."
                    );

                    break;

                case "kneeAlignment":

                    recommendations.push(
                        "Strengthen quadriceps and glute muscles to improve knee alignment."
                    );

                    break;

                case "stanceWidth":

                    recommendations.push(
                        "Practice balanced standing posture with feet hip-width apart."
                    );

                    break;

                case "weightDistribution":

                    recommendations.push(
                        "Improve weight balance by practicing static standing drills."
                    );

                    break;

                case "forwardHead":

                    recommendations.push(
                        "Perform chin tuck exercises to reduce forward head posture."
                    );

                    break;

                case "neckAngle":

                    recommendations.push(
                        "Improve cervical posture through daily mobility exercises."
                    );

                    break;

                case "pelvicTilt":

                    recommendations.push(
                        "Stretch hip flexors and strengthen abdominal muscles."
                    );

                    break;

                case "thoracicCurve":

                    recommendations.push(
                        "Improve thoracic extension using foam rolling and posture exercises."
                    );

                    break;

                case "bodyLean":

                    recommendations.push(
                        "Strengthen core muscles and practice upright standing posture."
                    );

                    break;

                default:
                    break;
            }

        }

    });

    return (

        <div className="recommendation-card">

            <h2 className="section-heading">

                AI Recommendations

            </h2>

            {

                recommendations.length === 0 ?

                    (

                        <div className="good-posture">

                            🎉 Excellent posture detected.
                            Continue your current lifestyle and
                            perform regular stretching.

                        </div>

                    )

                    :

                    (

                        <ul className="recommend-list">

                            {

                                recommendations.map((item, index) => (

                                    <li key={index}>

                                        {item}

                                    </li>

                                ))

                            }

                        </ul>

                    )

            }

        </div>

    );

};

export default RecommendationSection;