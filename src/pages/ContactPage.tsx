import React from "react";
import TextField from "@mui/material/TextField";
import Navbar from "../components/Navbar";


const ContactPage = () => {
  return (
    
      <div>
        <Navbar />
        <div className="bg-[#F9F9F9]  p-2 rounded-lg mt-[2%] mb-4 w-full px-[8px] sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="bg-white p-11 rounded-lg w-full mt-[2%] mb-[4%] ">
            <div className="flex justify-between  ">
              <div className="relative flex items-center ">
                <span className="text-lg text-black font-bold mr-[20px]">
                  Contact Us
                </span>
              </div>
              <div >
                <button
                  className={`bg-white text-[#642182] text-lg font-poppins border mr-2 py-1 px-8 rounded-full`}
                >
                  Cancel
                </button>
                <button
                  className={`bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full`}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="mt-[4%]">
              <input
                type="text"
                className="w-full text-black  h-10 mb-4  px-6 rounded-full focus:outline-none bg-[#F9F9F9]"
                placeholder="Subject"
              />
              <TextField
                multiline
                variant="filled"
                rows={8}
                className="w-full text-black  px-6 "
                placeholder="Description"
                InputProps={{
                  disableUnderline: true, 
                  sx: { borderRadius: 5 }
                }}
              />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default ContactPage;
