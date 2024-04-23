import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterIcon from "@/assets/FilterIcon";
import RefreshIcon from "@/assets/RefreshIcon";


import { FaSearch } from "react-icons/fa";
import { DashboardCards } from "../components/DashboardCards";
import supportImage from "../assets/support.png";

import Chatbox from "../components/Chatbox";

const DashboardPage: React.FC = () => {

 console.log("local storage", localStorage.getItem("currentUser"));
 const [showDialog, setShowDialog] = useState<boolean>(false);
  
 const handleClose = () => {
    setShowDialog(false);
 };

 return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] w-full px-[8px]">
        <div className="flex justify-end items-center mr-[2%] mt-[2%]">
          <span className="text-lg text-[#C4D0E8] font-bold">
            Request Application Status:
          </span>
          <button
            type="button"
            className="relative flex items-center justify-end px-4 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white ml-[20px] "
            aria-expanded="false"
            aria-haspopup="true"
          >
            <div className="ml-1 mr-2">
              <RefreshIcon />
            </div>
            <span className="text-lg text-[#30D5C8] font-bold">
              Under Review
            </span>
          </button>
        </div>
        <div className="flex items-center ml-[2%] mt-4">
          <span className="font-poppins text-lg text-black font-bold">
            Task Compliance:
          </span>
        </div>

        <div className="bg-white p-8 rounded-lg w-[96%] ml-[2%] mt-[2%] mb-[4%]">
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <input
                type="text"
                className="bg-[#F9F9F9] h-10 outline-none px-10 w-[99%] rounded-full placeholder:text-[14px] font-normal"
                placeholder="Search"
              />
              <FaSearch className="absolute left-3 top-[10px] text-gray-400" />
            </div>
            <button
              type="button"
              className="relative flex items-center bg-[#F9F9F9] rounded-full text-xl py-1 px-5 focus:outline-none focus:ring-2 focus:ring-white ml-4"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <FilterIcon />
              <span className="text-lg text-[#C4D0E8] ">Filters</span>
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr)",
              gap: "15px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
              <DashboardCards
                key={x}
                title="Missing Data"
                date="Jul 13, 2023 at 1:45 pm"
                content="We would like to bring to your attention that some crucial data appears to be missing from our records. In order to ensure the completeness and accuracy of our records, we kindly request your assistance in locating the missing data."
              />
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center fixed top-[75%] left-100 right-0"
              onClick={() => setShowDialog(true)}
            >
              <img src={supportImage} alt="Support" className="w-13 h-13" />
            </button>
            <Chatbox onClose={handleClose} visible={showDialog} />
          </div>
        </div>
      </div>
    </div>
 );
};

export default DashboardPage;