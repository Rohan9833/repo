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

export const calculateShoulderHeight = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftShoulder =
        landmarks[LANDMARKS.LEFT_SHOULDER];

    const rightShoulder =
        landmarks[LANDMARKS.RIGHT_SHOULDER];

    if (!leftShoulder || !rightShoulder) {
        return null;
    }

    const difference = Math.abs(
        leftShoulder.y - rightShoulder.y
    );

    let higherShoulder = "Level";

    if (difference > 0.001) {
        higherShoulder =
            leftShoulder.y < rightShoulder.y
                ? "Left"
                : "Right";
    }

    return {
        difference: round(difference),

        higherShoulder,

        severity: getSeverity(difference),

        unit: "normalized",

        landmarks: {
            leftShoulder,
            rightShoulder,
        },
    };
};