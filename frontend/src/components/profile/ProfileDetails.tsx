import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import UploadImage from "./UploadImage";
import BasicDetails from "./BasicDetails";
import axios from "../../api/axios";
import useContent from "../../hooks/useContent";

const PROFILE_URL = "/profile";

const ProfileDetails = () => {
  const { auth } = useContent();
  const token = auth.accessToken;
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleImageSelect = (selectedImage) => {
    setProfileImage(selectedImage);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("profileImage", profileImage);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      const response = await axios.post(PROFILE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        console.log("✨fetchUserData", response.data);
        const userData = response.data;
        if (userData) {
          setProfileImage(userData.profileImage || null);
          setFirstName(userData.firstName || "");
          setLastName(userData.lastName || "");
          setEmail(userData.email || "");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <form
      className="w-[95%] justify-self-center rounded-xl bg-[#fff] pt-6 md:pt-10"
      onSubmit={handleSubmit}
    >
      <h1 className="px-6 text-2xl font-bold leading-[150%] text-[#333] md:mb-2 md:px-10 md:text-4xl ">
        Profile Details
      </h1>
      <p className="mb-10 px-6 leading-[150%] text-[#737373] md:px-10">
        Add your details to create a personal touch to your profile.
      </p>
      <UploadImage onImageSelect={handleImageSelect} />
      <BasicDetails
        firstName={firstName}
        lastName={lastName}
        email={email}
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
        onEmailChange={handleEmailChange}
      />
      <div
        className={
          "flex h-[94px] w-full items-center justify-end border-t border-solid border-t-[#D9D9D9] bg-[white] px-10 py-0 sm:h-[78px] sm:px-4"
        }
      >
        <button
          className={
            "flex h-[46px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#633CFF] text-base font-semibold not-italic leading-[150%] text-[white] hover:bg-[#BEADFF] md:w-[90px]"
          }
        >
          {loading ? <CircularProgress size="30px" /> : "Save"}
        </button>
      </div>
    </form>
  );
};

export default ProfileDetails;
