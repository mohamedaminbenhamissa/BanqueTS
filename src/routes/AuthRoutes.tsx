
import { Route, Routes } from "react-router-dom";
import IndividualPage from "../pages/IndividualPage";
import UploadPage from "../pages/UploadPage"
import CompanyPage from "@/pages/CompanyPage";
import UploadCompanyPage from "@/pages/UploadCompanyPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../ProtectedRoutes";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="individual" element={<IndividualPage />} />
        <Route path="upload" element={<UploadPage/>}/>
        <Route path="company/*" element={<CompanyPage />} />
        <Route path="uploadCompany" element={<UploadCompanyPage />} />
        <Route index element={<LoginPage />} />
        </Route>
    </Routes>
  );
};

export default AuthRoutes;
