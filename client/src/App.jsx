import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AssessmentSetup from "./pages/AssessmentSetup";
import CameraScan from "./pages/CameraScan";
import UploadScan from "./pages/UploadScan";
import Processing from "./pages/Processing";
import Result from "./pages/Result";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import "./components/Report/report.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* New Assessment Setup Page */}
      <Route
        path="/assessment"
        element={<AssessmentSetup />}
      />

      {/* Existing Pages */}
      <Route path="/camera" element={<CameraScan />} />
      <Route path="/upload" element={<UploadScan />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/result" element={<Result />} />
      <Route path="/report" element={<Report />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;