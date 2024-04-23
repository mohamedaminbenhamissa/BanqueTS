
import { Link } from "react-router-dom";
import bgImage from "../assets/UploadFile.png";
import PreviousIcon from "../assets/PreviousIcon";
import Vector from "../assets/Vector";


const UploadFile = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "0px",
      }}
    >
      <h1 className="font-roboto text-xl md:text-2xl font-bold text-white mt-12 mb-8 md:mb-16">
        Upload Files
      </h1>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="flex flex-col items-center md:mr-12">
          <p className="font-roboto text-white text-lg">Identity Card</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-full md:w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-4 md:p-6"
            id="dropzone"
          >
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
                <div  className="w-2 h-2 mr-4 mb-6"> <Vector /></div>
                
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
            <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-20 ml-4 md:ml-16 flex">
        <Link to="/auth/individual">
          <button
            className={`bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-12 rounded-full flex items-center`}
          >
            <div className="w-4 h-4 mr-4 mb-3"> <PreviousIcon  /></div>
            
            Previous
          </button>
        </Link>
        <Link to="/auth">
          <button
            className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadFile;
