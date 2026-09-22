import { useScan } from "../context/ScanContext";

const useCapture = () => {
  const {
    scanData,
    updateScanData,
    resetScanData,
  } = useScan();

  const saveFrontImage = (image) => {
    updateScanData({
      frontImage: image,
    });
  };

  const saveSideImage = (image) => {
    updateScanData({
      sideImage: image,
    });
  };

  const setSource = (source) => {
    updateScanData({
      source,
    });
  };

  return {
    scanData,
    saveFrontImage,
    saveSideImage,
    setSource,
    resetScanData,
  };
};

export default useCapture;