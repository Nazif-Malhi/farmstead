import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
        <Route path="farmstead" element={<Mockup />} />
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
