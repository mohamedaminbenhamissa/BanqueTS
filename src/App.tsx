import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoutes from "@/routes/AuthRoutes";
import GuardPage from "./pages/GuardPage";
import { AuthProvider } from "@/context";
import MainRoutes from "./routes/mainRoutes";

export default function App() {
  return (
    
      
        <BrowserRouter>
<AuthProvider>
          <Routes>
            <Route path="/" element={<GuardPage />} />
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="main/*" element={<MainRoutes />} />
          </Routes>
          </AuthProvider>
        </BrowserRouter>
   
  );
}