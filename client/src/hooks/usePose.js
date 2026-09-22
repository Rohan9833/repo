import { useState, useEffect, useCallback } from "react";
import { loadPoseLandmarker } from "../services/mediapipe/poseLoader";
import { detectPose } from "../services/mediapipe/poseService";

const usePose = () => {
    const [poseModel, setPoseModel] = useState(null);

    const [loading, setLoading] = useState(false);

    const [modelLoading, setModelLoading] = useState(true);

    const [error, setError] = useState(null);

    const [landmarks, setLandmarks] = useState([]);

    const initializeModel = useCallback(async () => {
        try {
            setModelLoading(true);
            setError(null);

            const model = await loadPoseLandmarker();

            setPoseModel(model);

            console.log("✅ Pose Model Ready");
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setModelLoading(false);
        }
    }, []);

    useEffect(() => {
        initializeModel();
    }, [initializeModel]);

    const runPoseDetection = useCallback(
        async (image) => {
            if (!poseModel) {
                console.warn("Pose model not loaded.");
                return null;
            }

            try {
                setLoading(true);
                setError(null);

                const result = await detectPose(image);

                if (
                    result &&
                    result.landmarks &&
                    result.landmarks.length > 0
                ) {
                    setLandmarks(result.landmarks[0]);

                    return result.landmarks[0];
                }

                setLandmarks([]);

                return [];
            } catch (err) {
                console.error(err);
                setError(err);

                return null;
            } finally {
                setLoading(false);
            }
        },
        [poseModel]
    );

    return {
        poseModel,

        landmarks,

        loading,

        modelLoading,

        error,

        initializeModel,

        runPoseDetection,
    };
};

export default usePose;