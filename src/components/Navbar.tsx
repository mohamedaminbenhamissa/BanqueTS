
import {  useLocation } from "react-router-dom";
import DownIcon from "@/assets/DownIcon";
import NotificationIcon from "@/assets/NotificationIcon";

import { Popover } from "@headlessui/react";
import { useAuth } from "../context/AuthContext";
import {useNavigate } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate(); 
  const getUsername = () => {
    return currentUser ? currentUser.firstName : "Unknown User";
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/main":
        return "Dashboard";
      case "/main/profile":
        return "Profile";
      case "/main/contact":
        return "Contact Us";
      case "/main/settings":
        return "Settings";
      default:
        return "Dashboard"; 
    }
  };

  const handleLogout = () => {
    logout(); 
    navigate("/auth"); 
    
  };

  return (
    <div className="flex mt-[2%] justify-between">
      <div className="flex items-center">
        <h3 className="font-poppins text-lg font-bold">{getTitle()}</h3>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <NotificationIcon />
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className="flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                id="user-menu-button"
              >
                <img
                  className="h-10 w-10 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                />
                <span className="text-sm">{getUsername()}</span>
                <div className="ml-2">

                <DownIcon />
                </div>
              </Popover.Button>

              <Popover.Panel className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
