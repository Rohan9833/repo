import { LANDMARKS } from "../../../constants/landmarks";
import { angleBetweenPoints } from "../../../utils/angleUtils";
import { round } from "../../../utils/mathUtils";

const getSeverity = (angle) => {

    if (angle >= 55) {
        return "Excellent";
    }

    if (angle >= 50) {
        return "Mild";
    }

    if (angle >= 45) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateNeckAngle = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const ear = landmarks[LANDMARKS.LEFT_EAR];
    const shoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const hip = landmarks[LANDMARKS.LEFT_HIP];

    if (!ear || !shoulder || !hip) {
        return null;
    }

    const angle = angleBetweenPoints(
        ear,
        shoulder,
        hip
    );

    return {

        angle: round(angle),

        severity: getSeverity(angle),

        unit: "°",

        landmarks: {
            ear,
            shoulder,
            hip,
        },
    };
};