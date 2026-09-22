import { LANDMARKS } from "../../../constants/landmarks";
import { lineAngle } from "../../../utils/angleUtils";
import { round } from "../../../utils/mathUtils";

const getSeverity = (angle) => {
    const absAngle = Math.abs(angle);

    if (absAngle <= 2) {
        return "Excellent";
    }

    if (absAngle <= 5) {
        return "Mild";
    }

    if (absAngle <= 10) {
        return "Moderate";
    }

    return "Severe";
};

const getDirection = (angle) => {
    if (Math.abs(angle) <= 0.5) {
        return "Centered";
    }

    return angle > 0
        ? "Tilted Right"
        : "Tilted Left";
};

export const calculateHeadTilt = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftEye = landmarks[LANDMARKS.LEFT_EYE];
    const rightEye = landmarks[LANDMARKS.RIGHT_EYE];

    if (!leftEye || !rightEye) {
        return null;
    }

    const rawAngle = lineAngle(leftEye, rightEye);

    // Normalize angle to the smallest tilt from horizontal
    let headTilt = rawAngle;

    if (headTilt > 90) {
        headTilt -= 180;
    }

    if (headTilt < -90) {
        headTilt += 180;
    }

    return {
        angle: round(Math.abs(headTilt)),
        direction: getDirection(headTilt),
        severity: getSeverity(headTilt),
        unit: "°",

        landmarks: {
            leftEye,
            rightEye,
        },
    };
};