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

export const calculateKneeAlignment = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftKnee =
        landmarks[LANDMARKS.LEFT_KNEE];

    const rightKnee =
        landmarks[LANDMARKS.RIGHT_KNEE];

    if (!leftKnee || !rightKnee) {
        return null;
    }

    const difference = Math.abs(
        leftKnee.y - rightKnee.y
    );

    let higherKnee = "Level";

    if (difference > 0.001) {
        higherKnee =
            leftKnee.y < rightKnee.y
                ? "Left"
                : "Right";
    }

    return {

        difference: round(difference),

        higherKnee,

        severity: getSeverity(difference),

        unit: "normalized",

        landmarks: {
            leftKnee,
            rightKnee,
        },
    };
};