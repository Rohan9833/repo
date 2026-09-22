import { LANDMARKS } from "../../../constants/landmarks";
import { degrees } from "../../../utils/mathUtils";
import { round } from "../../../utils/mathUtils";

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

export const calculateSpinalAlignment = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER];

    const leftHip = landmarks[LANDMARKS.LEFT_HIP];
    const rightHip = landmarks[LANDMARKS.RIGHT_HIP];

    if (
        !leftShoulder ||
        !rightShoulder ||
        !leftHip ||
        !rightHip
    ) {
        return null;
    }

    const shoulderMid = {
        x: (leftShoulder.x + rightShoulder.x) / 2,
        y: (leftShoulder.y + rightShoulder.y) / 2,
    };

    const hipMid = {
        x: (leftHip.x + rightHip.x) / 2,
        y: (leftHip.y + rightHip.y) / 2,
    };

    const dx = shoulderMid.x - hipMid.x;
    const dy = shoulderMid.y - hipMid.y;

    // Angle relative to vertical
    const angle = Math.abs(
        degrees(Math.atan2(dx, dy))
    );

    return {

        angle: round(angle),

        severity: getSeverity(angle),

        unit: "°",

        landmarks: {
            shoulderMid,
            hipMid,
        },
    };
};