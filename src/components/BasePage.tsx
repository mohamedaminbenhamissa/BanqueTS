import React from "react";
import logo from "../assets/logo.png";

const BasePage = () => {
  return (
    <div className="min-w-full h-screen flex items-center justify-center bg-white">
      <div style={{ display: "flex", justifyContent: "start", flex: 1 }}>
        <div
          className="bg-[#f8f7ff] p-10 md:p-20 ml-5 md:ml-[5%] z-10 "
          style={{ maxWidth: "60vw", paddingRight: "20vw" }}
        >
          <img src={logo} alt="Logo" className="mb-4" />
          <h1 className="font-roboto text-2xl md:text-3xl font-bold text-[#1C2843] mb-4">
            We are happy to have you here
          </h1>
          <p className="font-roboto text-[#1C2843] text-lg md:text-lg">
            Please let us know ............
          </p>
          <p className="font-roboto text-[#1C2843] text-lg md:text-lg">
            When you have filled in all the details click on the purple button
            to continue your registration
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
