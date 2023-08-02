import PhoneMockup from "../components/loading/PhoneMockup";
import ProfileDetails from "../components/profile/ProfileDetails";
import ChangedSavedDialog from "../components/ChangedSavedDialog";

const Profile = () => {
  return (
    <>
      <div className="grid lg:grid-flow-col lg:gap-5">
        <div className="hidden lg:block">
          <PhoneMockup />
        </div>
        <div>
          <ProfileDetails />
        </div>
      </div>
      <ChangedSavedDialog />
    </>
  );
};

export default Profile;
