import UploadImage from "./UploadImage";
import BasicDetails from "./BasicDetails";

const ProfileDetails = () => {
  return (
    <div className="w-[95%] justify-self-center rounded-xl bg-[#fff] pt-6 md:pt-10">
      <h1 className="px-6 text-2xl font-bold leading-[150%] text-[#333] md:mb-2 md:px-10 md:text-4xl ">
        Profile Details
      </h1>
      <p className="mb-10 px-6 leading-[150%] text-[#737373] md:px-10">
        Add your details to create a personal touch to your profile.
      </p>
      <UploadImage />
      <BasicDetails />
      <div
        className={
          "flex h-[94px] w-full items-center justify-end rounded-xl border-t border-solid border-t-[#D9D9D9] bg-[white] px-10 py-0 sm:h-[78px] sm:px-4"
        }
      >
        <button
          className={
            "flex h-[46px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#633CFF] text-base font-semibold not-italic leading-[150%] text-[white] hover:bg-[#BEADFF] md:w-[90px]"
          }
        >
          Save
          {/* {loading ? <CircularProgress size="30px" /> : "Save"} */}
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
