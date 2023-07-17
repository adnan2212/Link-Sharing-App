import PhoneMockup from "../components/PhoneMockup";
import AddLink from "../components/AddLinks";

const Home = () => {
  return (
    <div className="grid lg:grid-flow-col lg:gap-5">
      <div className="hidden lg:block">
        <PhoneMockup />
      </div>
      <div>
        <AddLink />
      </div>
    </div>
  );
};

export default Home;
