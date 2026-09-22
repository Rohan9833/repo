import React from "react";

const ReportFooter = () => {

    const year = new Date().getFullYear();

    return (

        <div className="pdf-footer">

            © {year} AI Posture Assessment System • Generated using MediaPipe Pose & AI Analysis

        </div>

    );

};

export default ReportFooter;