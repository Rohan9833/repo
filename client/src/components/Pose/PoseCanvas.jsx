import React, { useRef, useEffect, useState } from "react";

const PoseCanvas = ({
    image,
    landmarks = [],
    OverlayComponent = null,
}) => {
    const canvasRef = useRef(null);

    const [imageSize, setImageSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (!image) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const img = new Image();

        const imageUrl =
            image instanceof File
                ? URL.createObjectURL(image)
                : image;

        img.src = imageUrl;

        img.onload = () => {
            setImageSize({
                width: img.width,
                height: img.height,
            });

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 0, 0);

            if (image instanceof File) {
                URL.revokeObjectURL(imageUrl);
            }
        };
        img.onerror = (err) => {
            console.error("PoseCanvas Image Error:", err);
        };
    }, [image]);

    return (
        <div className="relative w-full flex justify-center">

            <canvas
                ref={canvasRef}
                className="w-full max-w-3xl h-auto rounded-2xl shadow-lg border border-slate-300"
            />

            {OverlayComponent &&
                imageSize.width > 0 &&
                imageSize.height > 0 && (
                    <div className="absolute inset-0 flex justify-center">
                        <div
                            className="relative"
                            style={{
                                width: "100%",
                                maxWidth: "768px",
                            }}
                        >
                            <OverlayComponent
                                landmarks={landmarks}
                                imageWidth={imageSize.width}
                                imageHeight={imageSize.height}
                            />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default PoseCanvas;