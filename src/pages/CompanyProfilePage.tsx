import RefreshIcon from "@/assets/RefreshIcon";
import EditIcon from "@/assets/EditIcon";
import { useAuth } from "../context/AuthContext";
import Vector from "@/assets/Vector";

import { useState } from "react";
import Document from "../assets/company.png";
import Navbar from "../components/Navbar";
import EditCompanyPage from "../components/EditCompanyPage";

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const getUsername = () => {
    return currentUser ? currentUser.firstName : "Unknown User";
  };
  const getemailUser = () => {
    return currentUser ? currentUser.email : "unknown Email";
  };
  const handleClose = () => {
    setShowEditModal(false);
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="bg-[#F9F9F9] p-2 rounded-lg mt-[2%] w-full px-[25px]">
          <div className="bg-white p-4 rounded-full w-full mt-[2%] ">
            <div className="flex justify-between items-center">
              <div className="relative flex items-center">
                <img
                  className="h-15 w-20 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{getUsername()}</span>
                  <span className="text-sm">{getemailUser()}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="relative flex items-center justify-end py-1 px-3 bg-[#30D5C8] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-white ml-[20px] "
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <div className="ml-1 mr-3">
                    <RefreshIcon />
                  </div>
                  <span className="text-lg text-white font-bold">
                    Under Review
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 mb-[4%] rounded-lg w-full mt-[2%] ">
            <div className="flex justify-between">
              <div className="relative flex items-center">
                <span className="text-lg font-bold text-[#642182]">
                  Company Infos
                  <hr className="border-t border-gray-200 my-4 w-[850%]" />
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="relative flex items-center justify-end py-1 px-3 bg-[#642182] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white  "
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setShowEditModal(true)}
              >
                <div className="ml-1 mr-3">
                  <EditIcon />
                </div>
                <span className="text-lg text-white ">Edit Profile</span>
              </button>
              <EditCompanyPage onClose={handleClose} visible={showEditModal} />
            </div>
            <div>
              <span className="text-lg  font-poppins text-black font-bold ">
                Account Informations
              </span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm gap-x-4 gap-y-2">
                <dl>
                  <div className="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Commercial Registration No:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Ahmed Ali
                    </dd>
                  </div>
                  <div className="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Trade Name:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Abdallah
                    </dd>
                  </div>
                  <div className="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Legal Form:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      (123) 456-7890
                    </dd>
                  </div>
                </dl>
                <dl>
                  <div className="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Phone Number:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      05/28/1985
                    </dd>
                  </div>
                  <div className="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Adress Mail Professional:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      JTL Cluster w, lotus tower , apt.1253
                    </dd>
                  </div>
                  <div className="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#C4D0E8]">
                      Adress:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Male
                    </dd>
                  </div>
                </dl>
                <div>
                  <div className=" w-full flex justify-between">
                    <span className="text-lg  font-poppins text-black font-bold ">
                      Document
                    </span>
                    <div className="flex flex-col items-center">
                      <div
                        className=" w-full md:w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2"
                        id="dropzone"
                      >
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 z-50"
                        />
                        <div className="text-center">
                          <h3 className="mt-2  font-medium text-gray-900">
                            <label
                              htmlFor="file-upload-2"
                              className="relative cursor-pointer flex items-center"
                            >
                              <div className="w-6 h-6 mr-2 mb-2">
                                <Vector />
                              </div>
                              <span className="text-[#C4D0E8] text-sm">
                                Modify your file here
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
                        <img
                          src=""
                          className="mt-4 mx-auto max-h-40 hidden"
                          id="preview"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" sm:grid">
                    <img
                      className="h-70 w-70 rounded-lg mr-2 mt-2"
                      src={Document}
                      alt="company"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
