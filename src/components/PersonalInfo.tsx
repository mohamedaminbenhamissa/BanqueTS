
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import PreviousIcon from "../assets/PreviousIcon"

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


const PersonalInfo = () => {
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
    }
  );

const {   register,
  handleSubmit,
  formState: { errors }}=methods

  const onSubmit = (data:FormProps) => {
    console.log(data);
  };

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
      <h1 className="font-roboto text-xl font-bold text-white mt-10 mb-8 md:ml-44">
        Personal Infos
      </h1>
      <FormProvider {...methods} >
      <form
        className="flex flex-col md:flex-row justify-center md:ml-[20%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            register={register}
            rules={{ required: "First name is required" }}
            errors={errors}
            
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            register={register}
            rules={{ required: "Phone Number is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            register={register}
            rules={{ required: "Address is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            register={register}
            rules={{ required: "Postal Code is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            register={register}
            rules={{ required: "City is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            register={register}
            rules={{ required: "Date Of Birth is required" }}
            errors={errors}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            register={register}
            rules={{ required: "Password is required" }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            register={register}
            rules={{ required: "Last Name is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="nationality"
            placeholder="Nationality"
            register={register}
            rules={{ required: "Nationality is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="gender"
            placeholder="Gender"
            register={register}
            rules={{ required: "Gender is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="country"
            placeholder="Country"
            register={register}
            rules={{ required: "Country is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="region"
            placeholder="Region"
            register={register}
            rules={{ required: "Region is required" }}
            errors={errors}
          />
          <Input
            type="text"
            name="addressMail"
            placeholder="Address Mail"
            register={register}
            rules={{ required: "Address Mail is required" }}
            errors={errors}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            register={register}
            rules={{ required: "Confirm your Password Please" }}
            errors={errors}
          />
        </div>
      </form>
      </FormProvider>
      <div className="flex mt-4 ml-[20%] flex-row md:flex-column">
        <Link to="/">
          <button
            className={`bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-12 rounded-full flex items-center`}
          >
            <PreviousIcon  />
            Previous
          </button>
        </Link>
        <Link to="/auth/upload">
          <button
            className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
          >
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
