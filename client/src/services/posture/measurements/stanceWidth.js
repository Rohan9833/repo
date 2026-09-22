import { LANDMARKS } from "../../../constants/landmarks";
import { distance } from "../../../utils/distanceUtils";
import { round } from "../../../utils/mathUtils";

const getSeverity = (ratio) => {

    if (ratio >= 0.9 && ratio <= 1.3) {
        return "Excellent";
    }

    if (ratio >= 0.75 && ratio <= 1.5) {
        return "Mild";
    }

    if (ratio >= 0.6 && ratio <= 1.8) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateStanceWidth = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftHip = landmarks[LANDMARKS.LEFT_HIP];
    const rightHip = landmarks[LANDMARKS.RIGHT_HIP];

    const leftAnkle = landmarks[LANDMARKS.LEFT_ANKLE];
    const rightAnkle = landmarks[LANDMARKS.RIGHT_ANKLE];

    if (
        !leftHip ||
        !rightHip ||
        !leftAnkle ||
        !rightAnkle
    ) {
        return null;
    }

    const hipWidth = distance(leftHip, rightHip);
    const ankleWidth = distance(leftAnkle, rightAnkle);

    if (hipWidth === 0) {
        return null;
    }

    const ratio = ankleWidth / hipWidth;

    return {

        ratio: round(ratio),

        severity: getSeverity(ratio),

        unit: "hip-ratio",

        landmarks: {
            leftHip,
            rightHip,
            leftAnkle,
            rightAnkle,
        },
    };
};