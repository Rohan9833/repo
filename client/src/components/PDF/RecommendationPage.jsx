import React from "react";

import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

const RecommendationPage = ({ report }) => {

    const excellent =
        report.findings.filter(f => f.score >= 90);

    const warning =
        report.findings.filter(f => f.score < 90);

    return (

        <div
            id="pdf-recommendation"
            className="pdf-page"
        >

            <ReportHeader />

            <div className="pdf-body">

                <div className="page-heading">

                    <h2>

                        AI Assessment Summary

                    </h2>

                    <p>

                        Personalized posture analysis generated using Artificial Intelligence.

                    </p>

                </div>

                {/* Overall */}

                <div className="pdf-card mb30">

                    <h3 className="section-title">

                        Overall Assessment

                    </h3>

                    <div className="summary-grid">

                        <div>

                            <span className="summary-label">

                                Overall Score

                            </span>

                            <h2 className="summary-value">

                                {report.overallScore}/100

                            </h2>

                        </div>

                        <div>

                            <span className="summary-label">

                                Overall Status

                            </span>

                            <h2 className="summary-value">

                                {report.overallStatus}

                            </h2>

                        </div>

                    </div>

                </div>

                {/* Excellent */}

                <div className="pdf-card mb30">

                    <h3 className="section-title">

                        Strengths

                    </h3>

                    <ul className="recommend-list">

                        {

                            excellent.map(item => (

                                <li key={item.id}>

                                    ✔ {item.title}

                                </li>

                            ))

                        }

                    </ul>

                </div>

                {/* Attention */}

                <div className="pdf-card mb30">

                    <h3 className="section-title">

                        Areas Requiring Attention

                    </h3>

                    <ul className="recommend-list">

                        {

                            warning.map(item => (

                                <li key={item.id}>

                                    • {item.title}

                                    {" "}
                                    ({item.status})

                                </li>

                            ))

                        }

                    </ul>

                </div>

                {/* Recommendations */}

                <div className="pdf-card mb30">

                    <h3 className="section-title">

                        Recommendations

                    </h3>

                    <ul className="recommend-list">

                        <li>Maintain correct sitting posture.</li>

                        <li>Perform stretching exercises daily.</li>

                        <li>Avoid prolonged sitting.</li>

                        <li>Strengthen core muscles.</li>

                        <li>Repeat posture assessment every 30 days.</li>

                    </ul>

                </div>

                {/* Scan */}

                <div className="pdf-card">

                    <h3 className="section-title">

                        Scan Information

                    </h3>

                    <table className="info-table">

                        <tbody>

                            <tr>

                                <td>Landmarks Detected</td>

                                <td>33 / 33</td>

                            </tr>

                            <tr>

                                <td>Front View</td>

                                <td>Detected</td>

                            </tr>

                            <tr>

                                <td>Side View</td>

                                <td>Detected</td>

                            </tr>

                            <tr>

                                <td>AI Confidence</td>

                                <td>High</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            <ReportFooter />

        </div>

    );

};

export default RecommendationPage;