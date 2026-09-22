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

export const calculatePelvicTilt = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const hip = landmarks[LANDMARKS.LEFT_HIP];
    const knee = landmarks[LANDMARKS.LEFT_KNEE];

    if (!hip || !knee) {
        return null;
    }

    const dx = knee.x - hip.x;
    const dy = knee.y - hip.y;

    // Angle relative to vertical
    const rawAngle = degrees(
        Math.atan2(dx, dy)
    );

    const angle = Math.abs(rawAngle);

    let type = "Neutral";

    if (rawAngle > 3) {
        type = "Anterior";
    } else if (rawAngle < -3) {
        type = "Posterior";
    }

    return {

        angle: round(angle),

        type,

        severity: getSeverity(angle),

        unit: "°",

        landmarks: {
            hip,
            knee,
        },
    };
};