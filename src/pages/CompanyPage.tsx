import CompanyInfo from "../components/CompanyInfo";
import BasePage from "../components/BasePage";

const CompanyPage = () => {
  return (
    <div className="flex w-full relative">
    <BasePage />
    <div className="absolute right-0 z-10" style={{width:"60vw"}}>
      <CompanyInfo />
    </div>
  </div>
  );
};

export default CompanyPage;
