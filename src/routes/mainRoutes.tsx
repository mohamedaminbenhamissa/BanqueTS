import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "@/ProtectedRoutes";
import ProfilePage from "@/pages/ProfilePage";
import ContactPage from "@/pages/ContactPage";
import SettingPage from "@/pages/SettingPage";
import CompanyProfilePage from"@/pages/CompanyProfilePage"

const MainRoutes = () => {
  return (
    <Routes>
      <Route  element={<ProtectedRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="company" element={<CompanyProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;