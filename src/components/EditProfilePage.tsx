import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import InputEdit from "./InputEdit";
import Vector from "@/assets/Vector";

type FormProps={
    firstName:string,
    phoneNumber?:number,
    address:string,
    postalCode:string,
    city:string,
    dateOfBirth:string,
    password:string,
    lastName:string,
    nationality:string,
    gender:string,
    country:string,
    region:string,
    addressMail:string,
    confirmPassword:string
  }

interface EditProfilePageProps {
 visible: boolean;
 onClose: () => void;
}


const EditProfilePage: React.FC<EditProfilePageProps> = ({ visible, onClose }) => {
    const methods = useForm<FormProps>(
        {
            defaultValues:{
                firstName:"",
                phoneNumber:undefined,
                address:"",
                postalCode:"",
                city:"",
                dateOfBirth:"",
                password:"",
                lastName:"",
                nationality:"",
                gender:"",
                country:"",
                region:"",
                addressMail:"",
                confirmPassword:""
            }
        });
 const { currentUser } = useAuth();
 const {   register,
    handleSubmit,
    formState: { errors }}=methods

 const onSubmit = (data:FormProps) => {
    console.log(data);
  };

 if (!visible) return null;

 return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-100">
        <div className="flex justify-between ">
          <h1 className="font-roboto text-xl font-bold text-black mt-2 mb-4">
            Edit Personal Infos
          </h1>
          <button
            className={` bg-white text-[#642182] text-3XL `}
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <FormProvider {...methods} >
        <form
          className="flex flex-col md:flex-row justify-center md:ml-[20%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row mr-[30%]">
          <div className="flex flex-col">
              <label
                
                className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <InputEdit
                type="text"
                name="firstName"
                defaultValue={currentUser?.firstName}
                register={register}
                errors={errors}
              />
              <label
               
               className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <InputEdit
                type="text"
                name="phoneNumber"
                defaultValue={currentUser?.phoneNumber}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <InputEdit
                type="text"
                name="address"
                defaultValue={currentUser?.adress}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Postal Code
              </label>
              <InputEdit
                type="text"
                name="postalCode"
                defaultValue={currentUser?.postalCode}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                City
              </label>
              <InputEdit
                type="text"
                name="city"
                defaultValue={currentUser?.city}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Date O fBirth
              </label>
              <InputEdit
                type="text"
                name="dateOfBirth"
                defaultValue={currentUser?.dateOfBirth}
                register={register}
                errors={errors}
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <InputEdit
                type="text"
                name="lastName"
                defaultValue={currentUser?.lastName}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Nationality
              </label>
              <InputEdit
                type="text"
                name="nationality"
                defaultValue={currentUser?.nationality}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <InputEdit
                type="text"
                name="gender"
                defaultValue={currentUser?.gender}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Country
              </label>
              <InputEdit
                type="text"
                name="country"
                defaultValue={currentUser?.country}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Region
              </label>
              <InputEdit
                type="text"
                name="region"
                defaultValue={currentUser?.region}
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Address Mail
              </label>
              <InputEdit
                type="text"
                name="addressMail"
                defaultValue={currentUser?.email}
                register={register}
                rules={{
                  pattern: /^\S+@\S+$/i,
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg  font-poppins text-black font-bold ml-6 ">
                Edit Doccument
              </span>
              <div className="flex  items-center md:mt-6 md:mb-4 md:mr-1">
                <p className="font-roboto text-black text-llg mb-2 md:ml-6 md:mr-12">
                  Identity
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
                        <div className="w- h-4 mr-2 mb-3">
                        <Vector  />
                        </div>
                        <span className="text-black text-xs">
                          Modify Identity Card file
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
              <label
               
                className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expiry Date
              </label>
              <InputEdit
                type="text"
                name="region"
                defaultValue="12/12/2025"
                register={register}
                errors={errors}
              />
              <label className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white">
                Number
              </label>
              <InputEdit
                type="text"
                name="region"
                defaultValue="0000000000000000000"
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </form>
        </FormProvider>
        <div className="flex mt-4 ml-[40%] flex-row md:flex-column">
          <button
            className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
 );
};

export default EditProfilePage;