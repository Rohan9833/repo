// client/src/services/posture/assessmentEngine.js

export const assessmentEngine = (scores) => {

    const findings = [];

    const addFinding = (
        key,
        title,
        data
    ) => {

        findings.push({

            id: key,

            title,

            measurement: data.measurement,

            unit: data.unit,

            score: data.score,

            status: data.status,

            severity: data.severity,

            recommendationKey: null,

        });

    };

    // ---------- FRONT ----------

    addFinding(
        "headTilt",
        "Head Tilt",
        scores.front.headTilt
    );

    addFinding(
        "shoulderHeightDifference",
        "Shoulder Height",
        scores.front.shoulderHeightDifference
    );

    addFinding(
        "pelvicLevelness",
        "Pelvic Levelness",
        scores.front.pelvicLevelness
    );

    addFinding(
        "spinalAlignment",
        "Spinal Alignment",
        scores.front.spinalAlignment
    );

    addFinding(
        "armSymmetry",
        "Arm Symmetry",
        scores.front.armSymmetry
    );

    addFinding(
        "kneeAlignment",
        "Knee Alignment",
        scores.front.kneeAlignment
    );

    addFinding(
        "stanceWidth",
        "Stance Width",
        scores.front.stanceWidth
    );

    addFinding(
        "weightDistribution",
        "Weight Distribution",
        scores.front.weightDistribution
    );

    // ---------- SIDE ----------

    addFinding(
        "forwardHead",
        "Forward Head",
        scores.side.forwardHead
    );

    addFinding(
        "neckAngle",
        "Neck Angle",
        scores.side.neckAngle
    );

    addFinding(
        "pelvicTilt",
        "Pelvic Tilt",
        scores.side.pelvicTilt
    );

    addFinding(
        "thoracicCurve",
        "Thoracic Curve",
        scores.side.thoracicCurve
    );

    addFinding(
        "bodyLean",
        "Body Lean",
        scores.side.bodyLean
    );

    // Overall Status

    let overallStatus = "Excellent";

    if (scores.overallScore < 90)
        overallStatus = "Good";

    if (scores.overallScore < 80)
        overallStatus = "Fair";

    if (scores.overallScore < 70)
        overallStatus = "Needs Improvement";

    return {

        overallScore:
            scores.overallScore,

        overallStatus,

        findings,

    };

};

export default assessmentEngine;