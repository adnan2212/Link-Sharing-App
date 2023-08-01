import PhoneMockup from "../components/loading/PhoneMockup";
import ProfileDetails from "../components/profile/ProfileDetails";

const Profile = () => {
  return (
    <div className="grid lg:grid-flow-col lg:gap-5">
      <div className="hidden lg:block">
        <PhoneMockup />
      </div>
      <div>
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Profile;
