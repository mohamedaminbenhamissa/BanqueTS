import React from "react";


const PinkGuard = () => {

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-start bg-regal-blue p-4 md:p-14 pt-20">
      <div>
        <h1 className="font-roboto text-3xl md:text-3xl text-white  mt-[15%]">
        A few clicks away from creating your account ...
        </h1>
        <hr className="border border-white my-2 md:my-4 w-10 md:w-16" />
        <p className=" text-lg text-white font-light ">
        Choose the type of user
        </p>
      </div>
    </div>
  );
};

export default PinkGuard;
