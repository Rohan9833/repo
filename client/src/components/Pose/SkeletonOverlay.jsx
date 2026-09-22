import React from "react";

// MediaPipe Pose Landmark Connections
const CONNECTIONS = [
    // Face
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 7],
    [0, 4],
    [4, 5],
    [5, 6],
    [6, 8],
    [9, 10],

    // Torso
    [11, 12],
    [11, 23],
    [12, 24],
    [23, 24],

    // Left Arm
    [11, 13],
    [13, 15],
    [15, 17],
    [15, 19],
    [15, 21],
    [17, 19],

    // Right Arm
    [12, 14],
    [14, 16],
    [16, 18],
    [16, 20],
    [16, 22],
    [18, 20],

    // Left Leg
    [23, 25],
    [25, 27],
    [27, 29],
    [29, 31],
    [27, 31],

    // Right Leg
    [24, 26],
    [26, 28],
    [28, 30],
    [30, 32],
    [28, 32],
];

const SkeletonOverlay = ({
    landmarks = [],
    imageWidth,
    imageHeight,
}) => {
    if (!landmarks || landmarks.length !== 33) {
        return null;
    }

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${imageWidth} ${imageHeight}`}
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Skeleton Lines */}
            {CONNECTIONS.map(([start, end], index) => {
                const p1 = landmarks[start];
                const p2 = landmarks[end];

                if (!p1 || !p2) return null;

                return (
                    <line
                        key={index}
                        x1={p1.x * imageWidth}
                        y1={p1.y * imageHeight}
                        x2={p2.x * imageWidth}
                        y2={p2.y * imageHeight}
                        stroke="#00E5FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                );
            })}

            {/* Landmark Points */}
            {landmarks.map((point, index) => (
                <circle
                    key={`point-${index}`}
                    cx={point.x * imageWidth}
                    cy={point.y * imageHeight}
                    r="5"
                    fill="#FF3B30"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                />
            ))}
        </svg>
    );
};

export default SkeletonOverlay;