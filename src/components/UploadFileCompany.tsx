
import { Link } from "react-router-dom";
import bgImage from "../assets/UploadFile.png";
import PreviousIcon from "../assets/PreviousIcon";
import Vector from "../assets/Vector";

const UploadFileCompany = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "0px",
      }}
    >
      <h1 className="font-roboto text-xl md:text-2xl font-bold text-white ml-6 md:ml-16 mt-6 md:mt-16 mb-6 md:mb-16">
        Upload Files
      </h1>

      <div className="flex  items-center  md:mb-20 md:mr-12">
        <p className="font-roboto text-white text-lg  md:ml-14 md:mr-12">
          Company CR
        </p>
        <div className="w-full md:w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
          />
          <div className="text-center">
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              <label
                htmlFor="file-upload-1"
                className="relative cursor-pointer flex items-center"
              >
                <div className="w-2 h-2 mr-4 mb-6" >  <Vector /> </div>
              
                <span className="text-white text-xs">
                  Add file or drop files here
                </span>
                <input
                  id="file-upload-1"
                  name="file-upload-1"
                  type="file"
                  className="sr-only"
                />
              </label>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex  items-center md:mt-6 md:mb-0 md:mr-1">
        <p className="font-roboto text-white text-lg mb-2 md:ml-6 md:mr-12">
          Company File
        </p>
        <div className="w-full md:w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
          />
          <div className="text-center">
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              <label
                htmlFor="file-upload-2"
                className="relative cursor-pointer flex items-center"
              >
                <div className="w-2 h-2 mr-4 mb-6">   <Vector /> </div>
              
                <span className="text-white text-xs">
                  Add file or drop files here
                </span>
                <input
                  id="file-upload-2"
                  name="file-upload-2"
                  type="file"
                  className="sr-only"
                />
              </label>
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-6 md:mt-20">
        <Link to="/auth/company">
          <button className="bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-6 md:px-12 rounded-full flex items-center">
            <div className="w-4 h-4 mr-4 mb-3"><PreviousIcon /> </div>
            
            Previous
          </button>
        </Link>
        <Link to="/auth">
          <button className="bg-[#642182] text-white font-poppins text-lg py-1 px-8 md:px-16 rounded-full">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadFileCompany;
