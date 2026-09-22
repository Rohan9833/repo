import React, { createContext, useContext, useState } from "react";

const ScanContext = createContext();

const initialState = {
  // Existing Scan Data
  source: null,
  frontImage: null,
  sideImage: null,
  frontLandmarks: [],
  sideLandmarks: [],
  frontPoseDetected: false,
  sidePoseDetected: false,
  processing: false,
  error: null,
  measurements: null,
  scores: null,
  assessment: null,
  report: null,

  // -----------------------------
  // User Information (NEW)
  // -----------------------------
  fullName: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  mobile: "",

  // Selected Scan Mode
  scanMode: "",
};

export const ScanProvider = ({ children }) => {
  const [scanData, setScanData] = useState(initialState);

  const updateScanData = (data) => {
    setScanData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const resetScanData = () => {
    setScanData(initialState);
  };

  return (
    <ScanContext.Provider
      value={{
        scanData,
        updateScanData,
        resetScanData,
      }}
    >
      {children}
    </ScanContext.Provider>
  );
};

export const useScan = () => useContext(ScanContext);