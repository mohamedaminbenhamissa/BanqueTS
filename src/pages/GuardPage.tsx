import PinkGuard from "../components/PinkGuard";
import WhiteGuard from "../components/WhiteGuard";

const GuardPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <PinkGuard />
      </div>
      <div className="md:w-3/5">
        <WhiteGuard />
      </div>
    </div>
  );
};

export default GuardPage;
