import PhoneMockup from "../components/loading/PhoneMockup";
import AddLink from "../components/AddLinks";
import LoadingLinksScreen from "../components/loading/LoadingLinksScreen";

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
