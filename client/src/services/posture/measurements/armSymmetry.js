import { LANDMARKS } from "../../../constants/landmarks";
import { round } from "../../../utils/mathUtils";

const getSeverity = (difference) => {

    if (difference <= 0.02) {
        return "Excellent";
    }

    if (difference <= 0.04) {
        return "Mild";
    }

    if (difference <= 0.07) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateArmSymmetry = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER];

    const leftWrist = landmarks[LANDMARKS.LEFT_WRIST];
    const rightWrist = landmarks[LANDMARKS.RIGHT_WRIST];

    if (
        !leftShoulder ||
        !rightShoulder ||
        !leftWrist ||
        !rightWrist
    ) {
        return null;
    }

    const leftLength =
        Math.abs(leftWrist.y - leftShoulder.y);

    const rightLength =
        Math.abs(rightWrist.y - rightShoulder.y);

    const difference =
        Math.abs(leftLength - rightLength);

    let lowerArm = "Balanced";

    if (difference > 0.005) {
        lowerArm =
            leftLength > rightLength
                ? "Left"
                : "Right";
    }

    return {

        difference: round(difference),

        lowerArm,

        severity: getSeverity(difference),

        unit: "normalized",

        landmarks: {
            leftShoulder,
            rightShoulder,
            leftWrist,
            rightWrist,
        },
    };
};