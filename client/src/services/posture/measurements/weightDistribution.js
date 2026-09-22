import { LANDMARKS } from "../../../constants/landmarks";
import { midpoint } from "../../../utils/distanceUtils";
import { round } from "../../../utils/mathUtils";

const getSeverity = (offset) => {

    if (offset <= 0.02) {
        return "Excellent";
    }

    if (offset <= 0.05) {
        return "Mild";
    }

    if (offset <= 0.08) {
        return "Moderate";
    }

    return "Severe";
};

export const calculateWeightDistribution = (landmarks) => {

    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER];

    const leftHip = landmarks[LANDMARKS.LEFT_HIP];
    const rightHip = landmarks[LANDMARKS.RIGHT_HIP];

    const leftAnkle = landmarks[LANDMARKS.LEFT_ANKLE];
    const rightAnkle = landmarks[LANDMARKS.RIGHT_ANKLE];

    if (
        !leftShoulder ||
        !rightShoulder ||
        !leftHip ||
        !rightHip ||
        !leftAnkle ||
        !rightAnkle
    ) {
        return null;
    }

    const shoulderMid = midpoint(leftShoulder, rightShoulder);
    const hipMid = midpoint(leftHip, rightHip);

    const bodyCenter = midpoint(shoulderMid, hipMid);

    const footCenter = midpoint(leftAnkle, rightAnkle);

    const offset = Math.abs(bodyCenter.x - footCenter.x);

    let direction = "Centered";

    if (offset > 0.01) {
        direction =
            bodyCenter.x < footCenter.x
                ? "Left"
                : "Right";
    }

    return {

        offset: round(offset),

        direction,

        severity: getSeverity(offset),

        unit: "normalized",

        landmarks: {

            bodyCenter,

            footCenter,

            shoulderMid,

            hipMid,

            leftAnkle,

            rightAnkle,

        },
    };
};