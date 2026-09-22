import React from "react";

const ScanPreviewCard = ({
    frontImage,
    sideImage,
}) => {

    const getImage = (image) => {

        if (!image) return "";

        return image instanceof File
            ? URL.createObjectURL(image)
            : image;

    };

    return (

        <div className="scan-card">

            <h2 className="section-heading">

                Scan Images

            </h2>

            <div className="scan-grid">

                <div className="scan-box">

                    <h3>

                        Front View

                    </h3>

                    <img
                        src={getImage(frontImage)}
                        alt="Front"
                        className="scan-image"
                    />

                </div>

                <div className="scan-box">

                    <h3>

                        Side View

                    </h3>

                    <img
                        src={getImage(sideImage)}
                        alt="Side"
                        className="scan-image"
                    />

                </div>

            </div>

        </div>

    );

};

export default ScanPreviewCard;