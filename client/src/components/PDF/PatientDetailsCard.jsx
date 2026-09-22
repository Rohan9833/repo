import React from "react";

const PatientDetailsCard = ({ scanData }) => {

    return (

        <div className="pdf-card">

            <h2 className="card-title">

                Patient Information

            </h2>

            <table className="info-table">

                <tbody>

                    <tr>

                        <td>Full Name</td>

                        <td>{scanData.fullName || "-"}</td>

                    </tr>

                    <tr>

                        <td>Age</td>

                        <td>{scanData.age || "-"}</td>

                    </tr>

                    <tr>

                        <td>Gender</td>

                        <td>{scanData.gender || "-"}</td>

                    </tr>

                    <tr>

                        <td>Height</td>

                        <td>

                            {scanData.height
                                ? `${scanData.height} cm`
                                : "-"}

                        </td>

                    </tr>

                    <tr>

                        <td>Weight</td>

                        <td>

                            {scanData.weight
                                ? `${scanData.weight} kg`
                                : "-"}

                        </td>

                    </tr>

                    <tr>

                        <td>Mobile</td>

                        <td>{scanData.mobile || "-"}</td>

                    </tr>

                    <tr>

                        <td>Scan Mode</td>

                        <td>{scanData.scanMode || "-"}</td>

                    </tr>

                    <tr>

                        <td>Report Date</td>

                        <td>

                            {new Date().toLocaleDateString()}

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

};

export default PatientDetailsCard;