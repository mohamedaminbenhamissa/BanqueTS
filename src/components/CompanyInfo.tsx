import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { FormProvider, useForm } from "react-hook-form";
import PreviousIcon from "../assets/PreviousIcon"
import Input from "./Input";

type FormProps={
    comRegistrationNo:string,
    legalForm:string,
    adress:string,
    tradeName:string,
    phoneNumber?:number,
    adressMail:string
}


const CompanyInfo = () => {
  const methods = useForm<FormProps>(
    { defaultValues:{
        comRegistrationNo:"",
        legalForm:"",
        adress:"",
        tradeName:"",
        phoneNumber:undefined,
        adressMail:""
    }
  
  })

  const {   register,
    handleSubmit,
    formState: { errors }}=methods

 const onSubmit = (data:FormProps) => {
        console.log(data);
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
      <h1 className="font-roboto text-xl md:text-2xl font-bold text-white ml-6 md:ml-44 mt-12 md:mt-18 mb-8 md:mb-16">
        Company Infos
      </h1>
      <FormProvider {...methods} >
      <form
        className="flex flex-col md:flex-row justify-end"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ml-6 md:ml-40">
          <Input
          type="text"
          name="comRegistrationNo"
          placeholder="Commercial Registration No"
          register={register}
          rules={{ required: "Commercial Registration is required" }}
          errors={errors}
            
          />
           <Input
            type="text"
            name="legalForm"
            placeholder="Legal Form"
            register={register}
            rules={{ required: "Legal Form is required" }}
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
        </div>
        <div className="flex flex-col ml-6 md:ml-4 items-center">
        <Input
            type="text"
            name="tradeName"
            placeholder="Trade Name"
            register={register}
            rules={{ required: "Trade Name is required" }}
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
            name="addressMail"
            placeholder="Address Mail"
            register={register}
            rules={{ required: "Address Mail is required" }}
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
            <div className="w-4 h-4 mr-4 mb-3"><PreviousIcon  /></div>
            
            Previous
          </button>
        </Link>
        <Link to="/auth/uploadCompany">
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

export default CompanyInfo;
