import { Link } from "react-router-dom";
import logo from "../assets/logo.png";



const WhiteGuard = () => {

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#F8F7FF]">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" />
        <div className="mt-10 flex flex-col md:flex-row">
          <Link to="/auth/individual">
            <button 
              className={`bg-white text-[#642182] text-lg font-poppins mb-2 md:mb-0 md:mr-4 py-1 px-8 rounded-full`}
            >
              Individual
            </button>
          </Link>
          <Link to="/auth/company">
            <button 
              className={`bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full`}
            >
              Company
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhiteGuard;
