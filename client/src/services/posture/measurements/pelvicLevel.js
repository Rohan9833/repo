import { LANDMARKS } from "../../../constants/landmarks";
import { round } from "../../../utils/mathUtils";

const getSeverity = (difference) => {
    if (difference <= 0.01) {
        return "Excellent";
    }

    if (difference <= 0.02) {
        return "Mild";
    }

    if (difference <= 0.04) {
        return "Moderate";
    }

    return "Severe";
};

export const calculatePelvicLevel = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftHip = landmarks[LANDMARKS.LEFT_HIP];
    const rightHip = landmarks[LANDMARKS.RIGHT_HIP];

    if (!leftHip || !rightHip) {
        return null;
    }

    const difference = Math.abs(
        leftHip.y - rightHip.y
    );

    let higherHip = "Level";

    if (difference > 0.001) {
        higherHip =
            leftHip.y < rightHip.y
                ? "Left"
                : "Right";
    }

    return {
        difference: round(difference),

        higherHip,

        severity: getSeverity(difference),

        unit: "normalized",

        landmarks: {
            leftHip,
            rightHip,
        },
    };
};