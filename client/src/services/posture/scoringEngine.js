// client/src/services/posture/scoringEngine.js

import { THRESHOLDS } from "../../data/thresholds";

import {
    calculateHigherBetterScore,
    calculateIdealAngleScore,
    calculateLowerBetterScore,
    calculateRangeScore,
} from "../../utils/scoreUtils";

export function scoringEngine(measurements) {

    const front = measurements.front;
    const side = measurements.side;

    const scores = {

        front: {

            headTilt: {

                measurement: front.headTilt?.angle ?? null,
                unit: front.headTilt?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.headTilt?.angle ?? 999,
                    THRESHOLDS.headTilt
                ),

            },

            shoulderHeightDifference: {

                measurement: front.shoulderHeightDifference?.difference ?? null,
                unit: front.shoulderHeightDifference?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.shoulderHeightDifference?.difference ?? 999,
                    THRESHOLDS.shoulderHeightDifference
                ),

            },

            pelvicLevelness: {

                measurement: front.pelvicLevelness?.difference ?? null,
                unit: front.pelvicLevelness?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.pelvicLevelness?.difference ?? 999,
                    THRESHOLDS.pelvicLevelness
                ),

            },

            spinalAlignment: {

                measurement: front.spinalAlignment?.angle ?? null,
                unit: front.spinalAlignment?.unit ?? "",
                recommendationKey: null,

                ...calculateIdealAngleScore(
                    front.spinalAlignment?.angle ?? 180,
                    180
                ),

            },

            armSymmetry: {

                measurement: front.armSymmetry?.difference ?? null,
                unit: front.armSymmetry?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.armSymmetry?.difference ?? 999,
                    THRESHOLDS.armSymmetry
                ),

            },

            kneeAlignment: {

                measurement: front.kneeAlignment?.difference ?? null,
                unit: front.kneeAlignment?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.kneeAlignment?.difference ?? 999,
                    THRESHOLDS.kneeAlignment
                ),

            },

            stanceWidth: {

                measurement: front.stanceWidth?.ratio ?? null,
                unit: front.stanceWidth?.unit ?? "",
                recommendationKey: null,

                ...calculateRangeScore(
                    front.stanceWidth?.ratio ?? 1,
                    THRESHOLDS.stanceWidth
                ),

            },

            weightDistribution: {

                measurement: front.weightDistribution?.offset ?? null,
                unit: front.weightDistribution?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    front.weightDistribution?.offset ?? 999,
                    THRESHOLDS.weightDistribution
                ),

            },

        },

        side: {

            forwardHead: {

                measurement: side.forwardHead?.distance ?? null,
                unit: side.forwardHead?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    side.forwardHead?.distance ?? 999,
                    THRESHOLDS.forwardHead
                ),

            },

            neckAngle: {

                measurement: side.neckAngle?.angle ?? null,
                unit: side.neckAngle?.unit ?? "",
                recommendationKey: null,

                ...calculateHigherBetterScore(
                    side.neckAngle?.angle ?? 0,
                    THRESHOLDS.neckAngle
                ),

            },

            pelvicTilt: {

                measurement: side.pelvicTilt?.angle ?? null,
                unit: side.pelvicTilt?.unit ?? "",
                recommendationKey: null,

                ...calculateLowerBetterScore(
                    side.pelvicTilt?.angle ?? 999,
                    THRESHOLDS.pelvicTilt
                ),

            },

            thoracicCurve: {

                measurement: side.thoracicCurve?.angle ?? null,
                unit: side.thoracicCurve?.unit ?? "",
                recommendationKey: null,

                ...calculateIdealAngleScore(
                    side.thoracicCurve?.angle ?? 180,
                    180
                ),

            },

            bodyLean: {

                measurement: side.bodyLean?.angle ?? null,
                unit: side.bodyLean?.unit ?? "",
                recommendationKey: null,

                ...calculateIdealAngleScore(
                    side.bodyLean?.angle ?? 180,
                    180
                ),

            },

        },

    };

    const allScores = [

        ...Object.values(scores.front),
        ...Object.values(scores.side),

    ].map(item => item.score);

    const validScores = allScores.filter(
        (score) => typeof score === "number"
    );

    const overallScore = Math.round(
        validScores.reduce(
            (sum, score) => sum + score,
            0
        ) / validScores.length
    );

    return {

        overallScore,

        front: scores.front,

        side: scores.side,

    };

}