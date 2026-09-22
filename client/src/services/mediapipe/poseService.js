import { loadPoseLandmarker } from "./poseLoader";

export const detectPose = async (image) => {
    try {
        const poseLandmarker = await loadPoseLandmarker();

        const result = poseLandmarker.detect(image);

        return result;
    } catch (error) {
        console.error("Pose Detection Error:", error);
        throw error;
    }
};