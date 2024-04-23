import React from "react";
import UploadFileCompany from "../components/UploadFileCompany";
import BasePage from "../components/BasePage";

const UploadCompanyPage = () => {
  return (
    <div className="flex w-full relative">
      <BasePage />
      <div className="absolute right-0 z-10" style={{width:"60vw"}}>
        <UploadFileCompany />
      </div>
    </div>
  );
};

export default UploadCompanyPage;
