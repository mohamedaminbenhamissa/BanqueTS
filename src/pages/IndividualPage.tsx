import PersonalInfo from "../components/PersonalInfo";
import BasePage from "../components/BasePage";
const IndividualPage = () => {
  return (
    <div className="flex w-full relative">
      <BasePage />
      <div className="absolute right-0 z-10" style={{width:"60vw"}}>
        <PersonalInfo />
      </div>
    </div>
  );
};

export default IndividualPage;
