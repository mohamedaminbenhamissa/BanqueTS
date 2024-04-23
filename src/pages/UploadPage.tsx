import UploadFile from "../components/UploadFile";
import BasePage from "../components/BasePage";

const UploadPage = () => {
  return (
    <div className="flex w-full relative">
    <BasePage />
    <div className="absolute right-0 z-10" style={{width:"60vw"}}>
      <UploadFile />
    </div>
  </div>
  );
};

export default UploadPage;
