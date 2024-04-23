import Navbar from "../components/Navbar";


const SettingPage = () => {
  return (
   
      <div>
        <Navbar />
        <div className="bg-[#F9F9F9] p-2 rounded-lg mt-[2%] sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="mb-6">
            <div className="flex justify-center mt-[1%] md:justify-end">
              <button className="bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full mt-4 md:mt-0">
                Save
              </button>
            </div>
            <div className="relative flex items-center">
              <span className="text-lg text-[#B58EC7]  mr-4 md:mr-8">
                Notification Settings
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <span className="ms-3 text-sm font-medium text-black">
                  Activate Notifications
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative ml-3 md:ml-6 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#642182]"></div>{" "}
              </label>
            </div>
          </div>
          <span className="text-lg text-[#B58EC7]  mr-4 md:mr-8">
            Change Password
          </span>
          <div className="flex flex-col  md:flex-row  mt-[2%] md:mt-6 mb-[4%]">
            <input
              type="password"
              className="w-full  text-black h-10 mb-4 md:mb-0  md:px-10 rounded-full focus:outline-none bg-white mr-0 md:mr-4"
              placeholder="Old Password"
            />
            <input
              type="password"
              className="w-full  text-black h-10 mb-4 md:mb-0  md:px-10 rounded-full focus:outline-none bg-white mr-0 md:mr-4"
              placeholder="New Password"
            />
            <input
              type="password"
              className="w-full  text-black h-10 mb-4 md:mb-0  md:px-10 rounded-full focus:outline-none bg-white"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
  
  );
};

export default SettingPage;
