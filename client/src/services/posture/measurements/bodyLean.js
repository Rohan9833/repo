import { LANDMARKS } from "../../../constants/landmarks";
import { midpoint } from "../../../utils/distanceUtils";
import { degrees, round } from "../../../utils/mathUtils";

const getSeverity = (angle) => {

    if (angle <= 2) {
        return "Excellent";
    }

    if (angle <= 5) {
        return "Mild";
    }

    if (angle <= 8) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateBodyLean = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const shoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const hip = landmarks[LANDMARKS.LEFT_HIP];
    const ankle = landmarks[LANDMARKS.LEFT_ANKLE];

    if (!shoulder || !hip || !ankle) {
        return null;
    }

    // Center of upper body
    const bodyCenter = midpoint(
        shoulder,
        hip
    );

    const dx = bodyCenter.x - ankle.x;
    const dy = bodyCenter.y - ankle.y;

    // Angle relative to vertical
    const rawAngle = degrees(
        Math.atan2(dx, dy)
    );

    const angle = Math.abs(rawAngle);

    let direction = "Centered";

    if (rawAngle > 2) {
        direction = "Forward";
    } else if (rawAngle < -2) {
        direction = "Backward";
    }

    return {

        angle: round(angle),

        direction,

        severity: getSeverity(angle),

        unit: "°",

        landmarks: {

            shoulder,

            hip,

            ankle,

            bodyCenter,

        },
    };
};