import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.png";
import { useAuth } from "../context/AuthContext";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginInput = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setError("Email cannot be empty.");
      return;
    }

    if (!password) {
      setError("Password cannot be empty.");
      return;
    }

    const loggedIn = login(email, password);

    if (loggedIn) {
      navigate("/main"); 
    } else {
      setError("Email or password is incorrect.");
    }
  };
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
      <div className="w-3/5 ml-[7%]">
        <h1 className="font-roboto text-5xl font-bold text-white mt-[20%] ">
          Welcome
        </h1>
        <p className="font-roboto text-xs text-white mb-8">
          We are happy to have you here
        </p>
      </div>

      <div className=" w-3/5 flex flex-col ml-12 ">

        <input
          type="text"
          className=" w-full text-white py-2 p-4  mb-[4%]   rounded-full focus:outline-none bg-[#3B2E86]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-3/5 flex flex-col ml-12 relative ">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full text-white py-2 p-4 mb-[4%] rounded-full focus:outline-none bg-[#3B2E86]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="absolute mt-[2.5%]  right-4 text-white cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>


      <div className="w-3/5 ml-12">
        <button
          className={`bg-[#642182] text-white font-poppins text-lg  mt-[12%] py-1 w-full rounded-full`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="text-white w-3/5 ml-[8%]">
        New User?{" "}
        <Link to="/" className="text-[#8C43AC] underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginInput;
