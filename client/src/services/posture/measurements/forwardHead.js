import { LANDMARKS } from "../../../constants/landmarks";
import { round } from "../../../utils/mathUtils";

const getSeverity = (distance) => {

    if (distance <= 0.02) {
        return "Excellent";
    }

    if (distance <= 0.04) {
        return "Mild";
    }

    if (distance <= 0.07) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateForwardHead = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const ear = landmarks[LANDMARKS.LEFT_EAR];
    const shoulder = landmarks[LANDMARKS.LEFT_SHOULDER];

    if (!ear || !shoulder) {
        return null;
    }

    // Positive means the ear is forward of the shoulder.
    const horizontalOffset = shoulder.x - ear.x;

    const distance = Math.abs(horizontalOffset);

    let direction = "Centered";

    if (horizontalOffset > 0.01) {
        direction = "Forward";
    } else if (horizontalOffset < -0.01) {
        direction = "Backward";
    }

    return {

        distance: round(distance),

        direction,

        severity: getSeverity(distance),

        unit: "normalized",

        landmarks: {
            ear,
            shoulder,
        },
    };
};