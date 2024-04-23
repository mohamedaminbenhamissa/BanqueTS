import React, { useState , ReactNode }  from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/bgIcon.png";
import ContactIcon from "@/assets/ContactIcon"
import ContactDark from "@/assets/ContactDark";
import DashboardIcon from "@/assets/DashboardIcon";
import DashboardIconDark from "@/assets/DashboardIconDark";
import SettingsIcon from "@/assets/SettingsIcon";
import SettingsIconDark from "@/assets/SettingsIconDark";
import ProfileIcon from "@/assets/ProfileIcon";
import ProfileIconDark from "@/assets/ProfileIconDark";

type AuthProviderProps = {
    children: ReactNode;
   }


const Sidebar : React.FC<AuthProviderProps> = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  const handleSelection = (path: string) => {
    setSelected(path);
  };

  return (
    <div className="flex min-h-dvh ">
      <div className="min-w-64 min-h-full">
        <img
          src={logo}
          alt="Logo"
          className="fixed top-10 left-16 transition-transform -translate-x-full sm:translate-x-0 w-42 h-20"
        />

        <aside
          id="default-sidebar"
          className="fixed top-48 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <span className="flex ml-20 text-[#B3BBCA]">DASHBOARD</span>
          <div className="h-full px-5 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/main"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF]  hover:text-[#642182] ${
                    location.pathname === "/main"
                      ? "text-[#642182] bg-[#F8F7FF] border-r-8 border-[#642182]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main")}
                >
                  {selected === "/main" ? (
                    <DashboardIcon />
                  ) : (
                    <DashboardIconDark />
                  )}
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/profile"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#642182] ${
                    location.pathname === "/main/profile"
                      ? "text-[#642182] bg-[#F8F7FF] border-r-8 border-[#642182]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/profile")}
                >
                  {selected === "/main/profile" ? (
                    <ProfileIconDark />
                  ) : (
                    <ProfileIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    My Account
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/contact"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#642182] ${
                    location.pathname === "/main/contact"
                      ? "text-[#642182] bg-[#F8F7FF] border-r-8 border-[#642182]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/contact")}
                >
                  {selected === "/main/contact" ? (
                    <ContactDark />
                  ) : (
                    <ContactIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/settings"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#642182] ${
                    location.pathname === "/main/settings"
                      ? "text-[#642182] bg-[#F8F7FF] border-r-8 border-[#642182]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/settings")}
                >
                  {selected === "/main/settings" ? (
                    <SettingsIconDark />
                  ) : (
                    <SettingsIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="flex-1 mx-3 ">{children}</div>
    </div>
  );
};

export default Sidebar;
