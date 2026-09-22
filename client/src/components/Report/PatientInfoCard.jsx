import React from "react";

const PatientInfoCard = ({ data }) => {

    return (

        <div className="patient-card">

            <h2 className="section-heading">

                Patient Information

            </h2>

            <div className="patient-grid">

                <div className="patient-item">

                    <span>Name</span>

                    <strong>{data.fullName || "-"}</strong>

                </div>

                <div className="patient-item">

                    <span>Age</span>

                    <strong>{data.age || "-"}</strong>

                </div>

                <div className="patient-item">

                    <span>Gender</span>

                    <strong>{data.gender || "-"}</strong>

                </div>

                <div className="patient-item">

                    <span>Height</span>

                    <strong>

                        {data.height
                            ? `${data.height} cm`
                            : "-"}

                    </strong>

                </div>

                <div className="patient-item">

                    <span>Weight</span>

                    <strong>

                        {data.weight
                            ? `${data.weight} kg`
                            : "-"}

                    </strong>

                </div>

                <div className="patient-item">

                    <span>Mobile</span>

                    <strong>{data.mobile || "-"}</strong>

                </div>

                <div className="patient-item">

                    <span>Scan Mode</span>

                    <strong>{data.scanMode || "-"}</strong>

                </div>

                <div className="patient-item">

                    <span>Report Date</span>

                    <strong>

                        {new Date().toLocaleDateString()}

                    </strong>

                </div>

            </div>

        </div>

    );

};

export default PatientInfoCard;