import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import AssignmentPage from "./AssignmentPage";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<AboutPage />} />
        <Route path="" element={<AssignmentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;