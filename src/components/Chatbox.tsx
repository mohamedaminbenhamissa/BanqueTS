import React from "react";
import logo from "../assets/bgIcon.png";
import { useState } from "react";
const Chatbox = ({ visible, onClose }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleCloseModal = () => {
    setShowDialog(false);
  };
  if (!visible) return null;

  return (
    <div className="w-80 h-130 flex flex-col  shadow-lg bg-white  fixed top-[35%] left-90 right-4">
      <div className="flex items-center justify-between border-b p-2">
        <div className="flex items-center">
          <img className="rounded-full w-10 h-10" src={logo} />
          <div className="pl-2">
            <div className="font-semibold">
              <a className="hover:underline" href="#">
                Ask Support
              </a>
            </div>
          </div>
        </div>

        <div>
          <button
            className="inline-flex hover:bg-[#30D5C8] rounded-full p-2"
            type="button"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <div className="flex items-center mb-4">
          <div className="flex-1 bg-[#F9F9F9] text-white p-2 rounded-lg border-black  mb-2 relative">
            <div>
              <h1 className="text-xl text-black">
                Welcome to Qatar Development Bank{" "}
              </h1>
              <h2 className="text-lg text-black">
                ! We're here to assist you 24/7. Whether you have questions
                about your account, need help with business, or just seeking
                financial advice, type your query below and we'll get right on
                it. How can we serve you today?
              </h2>
            </div>

            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center border-t p-2">
        

        <div className="w-full mx-2">
          <input
            className="w-full rounded-full border border-gray-200 text-lg px-3"
            type="text"
            defaultValue=""
            placeholder="Aa"
          />
        </div>

        <div>
          <button
            className="inline-flex hover:bg-[#30D5C8] rounded-full p-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chatbox;
