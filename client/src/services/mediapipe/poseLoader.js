import {
    FilesetResolver,
    PoseLandmarker,
} from "@mediapipe/tasks-vision";

let poseLandmarker = null;

export const loadPoseLandmarker = async () => {
    if (poseLandmarker) {
        return poseLandmarker;
    }

    try {
        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        poseLandmarker = await PoseLandmarker.createFromOptions(
            vision,
            {
                baseOptions: {
                    modelAssetPath:
                        "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
                },

                runningMode: "IMAGE",

                numPoses: 1,
            }
        );

        console.log("✅ Pose Landmarker Loaded");

        return poseLandmarker;
    } catch (error) {
        console.error("Failed to load Pose Landmarker:", error);
        throw error;
    }
};