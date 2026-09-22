import React from "react";

import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

const DisclaimerPage = () => {

    return (

        <div
            id="pdf-disclaimer"
            className="pdf-page"
        >

            <ReportHeader />

            <div className="pdf-body">

                <div className="page-heading">

                    <h2>

                        Disclaimer & Important Information

                    </h2>

                    <p>

                        Please read the following information carefully.

                    </p>

                </div>

                <div className="pdf-card">

                    <h3 className="section-title">

                        Disclaimer

                    </h3>

                    <p className="paragraph">

                        This posture assessment report has been generated using
                        Artificial Intelligence and MediaPipe Pose technology.
                        The results are intended for posture screening,
                        educational purposes and wellness tracking only.

                    </p>

                    <p className="paragraph">

                        The findings in this report should not be considered a
                        medical diagnosis and should not replace professional
                        clinical evaluation.

                    </p>

                    <p className="paragraph">

                        If you experience pain, numbness, restricted movement,
                        dizziness or any musculoskeletal condition, please
                        consult a qualified physiotherapist or healthcare
                        professional.

                    </p>

                    <p className="paragraph">

                        Environmental conditions such as lighting, clothing,
                        camera position and body posture during the scan may
                        influence measurement accuracy.

                    </p>

                </div>

                <div className="pdf-card mt30">

                    <h3 className="section-title">

                        Report Information

                    </h3>

                    <table className="info-table">

                        <tbody>

                            <tr>

                                <td>Software</td>

                                <td>

                                    AI Posture Assessment System

                                </td>

                            </tr>

                            <tr>

                                <td>Version</td>

                                <td>

                                    1.0.0

                                </td>

                            </tr>

                            <tr>

                                <td>Technology</td>

                                <td>

                                    MediaPipe Pose + AI Analysis

                                </td>

                            </tr>

                            <tr>

                                <td>Generated On</td>

                                <td>

                                    {new Date().toLocaleString()}

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className="signature-section">

                    <div className="signature-box">

                        ______________________

                        <br />

                        Patient Signature

                    </div>

                    <div className="signature-box">

                        ______________________

                        <br />

                        Assessor Signature

                    </div>

                </div>

            </div>

            <ReportFooter />

        </div>

    );

};

export default DisclaimerPage;