import React from "react";

const ScanImages = ({
    frontImage,
    sideImage,
}) => {

    const getImage = (img) => {

        if (!img) return "";

        return img instanceof File
            ? URL.createObjectURL(img)
            : img;

    };

    return (

        <div className="scan-grid">

            <div className="scan-card">

                <h3>

                    Front View

                </h3>

                <img
                    src={getImage(frontImage)}
                    alt="Front"
                    className="scan-photo"
                />

            </div>

            <div className="scan-card">

                <h3>

                    Side View

                </h3>

                <img
                    src={getImage(sideImage)}
                    alt="Side"
                    className="scan-photo"
                />

            </div>

        </div>

    );

};

export default ScanImages;