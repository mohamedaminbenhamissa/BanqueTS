import logo from "../assets/logo.png";

const LoginLogo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-end bg-white">
      <img src={logo} alt="Logo" className="w-50 h-60 mb-6" />
    </div>
  );
};

export default LoginLogo;
