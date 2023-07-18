import ProfileDetails from "../components/profile/ProfileDetails";
import PhoneMockup from "../components/PhoneMockup";

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
