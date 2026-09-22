// client/src/services/posture/recommendationEngine.js

import { RECOMMENDATIONS } from "../../data/recommendations";

export const recommendationEngine = (assessment) => {

    const findings = assessment.findings.map((finding) => {

        const recommendation =
            RECOMMENDATIONS[finding.id]?.[finding.status] || {

                title: "No Recommendation Available",

                advice: [
                    "No recommendation found for this assessment."
                ]

            };

        return {

            ...finding,

            recommendation: {

                title: recommendation.title,

                advice: recommendation.advice,

            }

        };

    });

    return {

        ...assessment,

        findings,

    };

};

export default recommendationEngine;