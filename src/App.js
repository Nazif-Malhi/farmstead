import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  AdvanceCrop,
  CropDetection,
  Fertilizer,
  PestDetection,
  SimpleCrop,
} from "./components";
import { Password } from "./layouts";
import {
  Loading,
  Mockup,
  Authentication,
  VerifyAccount,
  EmailSent,
} from "./pages";
import Admin from "./pages/Admin";
import ProtectedRoute from "./ProtectedGaurd/ProtectedRoute";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* MockUp */}
        <Route path="farmstead" element={<Mockup />} />
        {/* Models */}
        <Route path="farmstead/models/*">
          <Route path="simple-crop-recomendation" element={<SimpleCrop />} />
          <Route path="advance-crop-recomendation" element={<AdvanceCrop />} />
          <Route path="fertilizer-recomendation" element={<Fertilizer />} />
          <Route path="pest-detection" element={<PestDetection />} />
          <Route path="crop-disease-detection" element={<CropDetection />} />
        </Route>
        {/* Other */}
        <Route path="farmstead/authentication/*" element={<Authentication />} />
        <Route path="farmstead/verify-email" element={<VerifyAccount />} />
        <Route
          path="farmstead/request/reset-password"
          element={<EmailSent />}
        />
        <Route
          path="farmstead/change/reset-password/*"
          element={<Password />}
        />
        {/* admin */}
        <Route
          path="farmstead/admin/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
