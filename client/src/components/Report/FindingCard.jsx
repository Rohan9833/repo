import React from "react";
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaTimesCircle,
    FaInfoCircle,
    FaUser,
    FaArrowsAltH,
    FaArrowsAltV,
    FaWalking,
    FaRulerVertical,
} from "react-icons/fa";

/* =========================================================
   STATUS CONFIG
========================================================= */

const STATUS = {
    EXCELLENT: {
        bg: "bg-emerald-100/70",
        border: "border-transparent",
        text: "text-emerald-700",
        icon: <FaCheckCircle />,
        dot: "bg-emerald-500",
    },
    GOOD: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        icon: <FaCheckCircle />,
        dot: "bg-blue-500",
    },
    MILD: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        icon: <FaInfoCircle />,
        dot: "bg-amber-500",
    },
    MODERATE: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
        icon: <FaExclamationTriangle />,
        dot: "bg-orange-500",
    },
    SEVERE: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
        icon: <FaTimesCircle />,
        dot: "bg-red-500",
    },
};

/* =========================================================
   FINDING THEME
========================================================= */

const getFindingTheme = (title = "") => {
    const value = title.toLowerCase();

    /* Body Lean -> green icon, blue measurement */
    if (
        value.includes("body lean") ||
        value.includes("trunk lean") ||
        value.includes("body alignment")
    ) {
        return {
            icon: <FaUser />,
            iconBg: "bg-emerald-100/70",
            iconColor: "text-emerald-600",
            measurementColor: "text-blue-700",
        };
    }

    /* Shoulder */
    if (value.includes("shoulder")) {
        return {
            icon: <FaArrowsAltH />,
            iconBg: "bg-blue-100/70",
            iconColor: "text-blue-600",
            measurementColor: "text-blue-700",
        };
    }

    /* Pelvis */
    if (
        value.includes("pelvic") ||
        value.includes("pelvis") ||
        value.includes("hip")
    ) {
        return {
            icon: <FaArrowsAltV />,
            iconBg: "bg-orange-100/70",
            iconColor: "text-orange-600",
            measurementColor: "text-orange-600",
        };
    }

    /* Head / Neck */
    if (
        value.includes("head") ||
        value.includes("neck") ||
        value.includes("cervical")
    ) {
        return {
            icon: <FaUser />,
            iconBg: "bg-violet-100/70",
            iconColor: "text-violet-600",
            measurementColor: "text-violet-600",
        };
    }

    /* Spine */
    if (
        value.includes("spine") ||
        value.includes("spinal") ||
        value.includes("lordosis") ||
        value.includes("kyphosis") ||
        value.includes("curve") ||
        value.includes("curvature")
    ) {
        return {
            icon: <FaRulerVertical />,
            iconBg: "bg-indigo-100/70",
            iconColor: "text-indigo-600",
            measurementColor: "text-indigo-600",
        };
    }

    /* Knee / Leg */
    if (
        value.includes("knee") ||
        value.includes("leg") ||
        value.includes("ankle") ||
        value.includes("stance")
    ) {
        return {
            icon: <FaWalking />,
            iconBg: "bg-rose-100/70",
            iconColor: "text-rose-600",
            measurementColor: "text-rose-600",
        };
    }

    /* Default */
    return {
        icon: <FaUser />,
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        measurementColor: "text-slate-700",
    };
};

/* =========================================================
   FINDING CARD
   NOTE: saare padding/margin pe ! laga hai kyunki global CSS
   reset (* { margin:0; padding:0 }) Tailwind ko override kar raha tha
========================================================= */

const FindingCard = ({ finding }) => {
    const statusKey = String(finding?.status || "MODERATE").toUpperCase();
    const status = STATUS[statusKey] || STATUS.MODERATE;

    const theme = getFindingTheme(finding?.title || "");

    const severity = finding?.severity || "None";
    const severityLower = String(severity).toLowerCase();
    const isNormal = severityLower === "none" || severityLower === "normal";

    // degree symbol number ke saath same size me
    const isDegree = finding?.unit === "°" || finding?.unit === "deg";

    return (
        <article
            className="
                relative
                w-full
                bg-white
                rounded-3xl
                border
                border-slate-200
                !p-5
                shadow-[0_4px_20px_rgba(15,23,42,0.06)]
                hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]
                transition-shadow
                duration-200
                box-border
            "
        >
            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between gap-2">
                {/* Left: icon + title */}
                <div className="flex items-center gap-3 min-w-0">
                    {/* Round icon circle */}
                    <div
                        className={`
                            shrink-0
                            !w-12
                            !h-12
                            rounded-full
                            flex
                            items-center
                            justify-center
                            text-xl
                            ${theme.iconBg}
                            ${theme.iconColor}
                        `}
                    >
                        {theme.icon}
                    </div>

                    <div className="min-w-0">
                        <h3
                            className="!text-lg !font-extrabold !text-slate-900 !leading-tight !m-0 truncate"
                            title={finding?.title}
                        >
                            {finding?.title || "Posture Finding"}
                        </h3>

                        <p className="!text-xs !text-slate-400 !mt-1 !mb-0 truncate">
                            Posture Measurement
                        </p>
                    </div>
                </div>

                {/* Status pill */}
                <div
                    className={`
                        shrink-0
                        flex
                        items-center
                        gap-1.5
                        !px-3
                        !py-1.5
                        rounded-full
                        border
                        ${status.bg}
                        ${status.border}
                        ${status.text}
                        !text-[11px]
                        !font-extrabold
                        uppercase
                        tracking-wide
                        whitespace-nowrap
                    `}
                >
                    <span className="text-base">{status.icon}</span>
                    <span>{finding?.status || "MODERATE"}</span>
                </div>
            </div>

            {/* ================= METRICS ================= */}
            <div className="grid grid-cols-2 gap-3 !mt-4">
                {/* MEASUREMENT */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 !px-4 !py-3 min-w-0">
                    <p className="!text-[11px] !font-semibold uppercase tracking-wider text-slate-500 !m-0">
                        Measurement
                    </p>

                    <div className="flex items-baseline flex-wrap !mt-2 min-w-0">
                        <span
                            className={`
                                !text-3xl
                                !font-extrabold
                                !leading-none
                                tracking-tight
                                ${theme.measurementColor}
                            `}
                            title={String(finding?.measurement ?? "--")}
                        >
                            {finding?.measurement ?? "--"}
                        </span>

                        {finding?.unit && (
                            <span
                                className={`
                                    whitespace-nowrap
                                    ${
                                        isDegree
                                            ? `!text-3xl !font-extrabold !leading-none ${theme.measurementColor}`
                                            : "!text-xs !font-semibold text-slate-500 !ml-1"
                                    }
                                `}
                            >
                                {finding.unit}
                            </span>
                        )}
                    </div>
                </div>

                {/* SCORE */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 !px-4 !py-3 min-w-0">
                    <p className="!text-[11px] !font-semibold uppercase tracking-wider text-slate-500 !m-0">
                        Score
                    </p>

                    <div className="flex items-baseline gap-1.5 !mt-2">
                        <span className="!text-3xl !font-extrabold !leading-none tracking-tight !text-slate-900">
                            {finding?.score ?? "--"}
                        </span>

                        <span className="!text-sm !font-medium text-slate-400">
                            /100
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= SEVERITY ================= */}
            <div
                className={`
                    !mt-3
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    !px-4
                    !py-3
                    ${
                        isNormal
                            ? "bg-emerald-50/70 border-emerald-100"
                            : "bg-slate-50 border-slate-200"
                    }
                `}
            >
                <div className="min-w-0">
                    <p className="!text-[11px] !font-semibold uppercase tracking-wider text-slate-500 !m-0">
                        Severity
                    </p>

                    <p
                        className={`
                            !text-xl
                            !font-bold
                            !mt-1
                            !mb-0
                            truncate
                            ${isNormal ? "!text-emerald-700" : "!text-slate-800"}
                        `}
                    >
                        {severity}
                    </p>
                </div>

                {/* Severity dot */}
                <span
                    className={`
                        shrink-0
                        !w-3.5
                        !h-3.5
                        rounded-full
                        ${isNormal ? "bg-emerald-500" : status.dot}
                    `}
                />
            </div>
        </article>
    );
};

export default FindingCard;