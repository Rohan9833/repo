// client/src/utils/scoreUtils.js

/**
 * Lower value is better.
 *
 * Example:
 * Head Tilt
 * Forward Head
 * Pelvic Tilt
 * Shoulder Difference
 */

export const calculateLowerBetterScore = (
    value,
    threshold
) => {

    if (value <= threshold.excellent) {

        return {
            score: 100,
            status: "EXCELLENT",
            severity: "None",
        };

    }

    if (value <= threshold.mild) {

        return {
            score: 85,
            status: "MILD",
            severity: "Low",
        };

    }

    if (value <= threshold.moderate) {

        return {
            score: 70,
            status: "MODERATE",
            severity: "Medium",
        };

    }

    return {

        score: 50,
        status: "SEVERE",
        severity: "High",

    };

};


/**
 * Higher value is better.
 *
 * Example:
 * Neck Angle
 */

export const calculateHigherBetterScore = (
    value,
    threshold
) => {

    if (value >= threshold.excellent) {

        return {
            score: 100,
            status: "EXCELLENT",
            severity: "None",
        };

    }

    if (value >= threshold.mild) {

        return {
            score: 85,
            status: "MILD",
            severity: "Low",
        };

    }

    if (value >= threshold.moderate) {

        return {
            score: 70,
            status: "MODERATE",
            severity: "Medium",
        };

    }

    return {

        score: 50,
        status: "SEVERE",
        severity: "High",

    };

};


/**
 * Ideal value lies inside a range.
 *
 * Example:
 * Stance Width
 */

export const calculateRangeScore = (
    value,
    threshold
) => {

    if (
        value >= threshold.excellentMin &&
        value <= threshold.excellentMax
    ) {

        return {

            score: 100,
            status: "EXCELLENT",
            severity: "None",

        };

    }

    if (
        value >= threshold.mildMin &&
        value <= threshold.mildMax
    ) {

        return {

            score: 85,
            status: "MILD",
            severity: "Low",

        };

    }

    if (
        value >= threshold.moderateMin &&
        value <= threshold.moderateMax
    ) {

        return {

            score: 70,
            status: "MODERATE",
            severity: "Medium",

        };

    }

    return {

        score: 50,
        status: "SEVERE",
        severity: "High",

    };

};


/**
 * Score based on closeness to an ideal angle.
 *
 * Example:
 * Spinal Alignment
 * Thoracic Curve
 * Body Lean
 */

export const calculateIdealAngleScore = (
    value,
    idealAngle = 180
) => {

    const deviation = Math.abs(
        idealAngle - value
    );

    if (deviation <= 2) {

        return {

            score: 100,
            status: "EXCELLENT",
            severity: "None",

        };

    }

    if (deviation <= 5) {

        return {

            score: 85,
            status: "MILD",
            severity: "Low",

        };

    }

    if (deviation <= 10) {

        return {

            score: 70,
            status: "MODERATE",
            severity: "Medium",

        };

    }

    return {

        score: 50,
        status: "SEVERE",
        severity: "High",

    };

};