import { LANDMARKS } from "../../../constants/landmarks";
import { degrees, round } from "../../../utils/mathUtils";

const getSeverity = (angle) => {

    if (angle <= 5) {
        return "Excellent";
    }

    if (angle <= 10) {
        return "Mild";
    }

    if (angle <= 15) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateThoracicCurve = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const shoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const hip = landmarks[LANDMARKS.LEFT_HIP];

    if (!shoulder || !hip) {
        return null;
    }

    const dx = shoulder.x - hip.x;
    const dy = shoulder.y - hip.y;

    // Angle relative to vertical
    const rawAngle = degrees(
        Math.atan2(dx, dy)
    );

    const angle = Math.abs(rawAngle);

    let posture = "Neutral";

    if (rawAngle > 3) {
        posture = "Rounded";
    } else if (rawAngle < -3) {
        posture = "Extended";
    }

    return {

        angle: round(angle),

        posture,

        severity: getSeverity(angle),

        unit: "°",

        landmarks: {
            shoulder,
            hip,
        },
    };
};