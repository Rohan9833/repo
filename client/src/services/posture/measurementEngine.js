import {
    calculateHeadTilt,
    calculateShoulderHeight,
    calculatePelvicLevel,
    calculateSpinalAlignment,
    calculateArmSymmetry,
    calculateKneeAlignment,
    calculateStanceWidth,
    calculateWeightDistribution,
} from "./frontMeasurements";

import {
    calculateForwardHead,
    calculateNeckAngle,
    calculatePelvicTilt,
    calculateThoracicCurve,
    calculateBodyLean,
} from "./sideMeasurements";

const emptyFrontMeasurements = {
    headTilt: null,
    shoulderHeightDifference: null,
    pelvicLevelness: null,
    spinalAlignment: null,
    kneeAlignment: null,
    armSymmetry: null,
    stanceWidth: null,
    weightDistribution: null,
};

const emptySideMeasurements = {
    forwardHead: null,
    neckAngle: null,
    pelvicTilt: null,
    thoracicCurve: null,
    bodyLean: null,
};

export const generateMeasurements = (
    frontLandmarks,
    sideLandmarks
) => {
    const front = {
        ...emptyFrontMeasurements,
    };

    const side = {
        ...emptySideMeasurements,
    };

    // ---------- FRONT ----------

    if (frontLandmarks?.length === 33) {
        front.headTilt =
            calculateHeadTilt(frontLandmarks);
        front.shoulderHeightDifference =
            calculateShoulderHeight(frontLandmarks);
        front.pelvicLevelness =
            calculatePelvicLevel(frontLandmarks);
        front.spinalAlignment =
            calculateSpinalAlignment(frontLandmarks);
        front.kneeAlignment =
            calculateKneeAlignment(frontLandmarks);
        front.armSymmetry =
            calculateArmSymmetry(frontLandmarks);
        front.stanceWidth =
            calculateStanceWidth(frontLandmarks);
        front.weightDistribution =
            calculateWeightDistribution(frontLandmarks);
    }

    // ---------- SIDE ----------

    if (sideLandmarks?.length === 33) {
        side.forwardHead =
            calculateForwardHead(sideLandmarks);
        side.neckAngle =
            calculateNeckAngle(sideLandmarks);
        side.pelvicTilt =
            calculatePelvicTilt(sideLandmarks);
        side.thoracicCurve =
            calculateThoracicCurve(sideLandmarks);
        side.bodyLean =
            calculateBodyLean(sideLandmarks);
    }

    return {
        front,
        side,
    };
};

export default generateMeasurements;