import { useState, useEffect } from "react";
import useContent from "../../hooks/useContent";
import axios from "../../api/axios";
import { Scrollbars } from "react-custom-scrollbars"; // Import the CustomScrollbars component

import githubIcon from "../../assets/icons/icon-link-boxes/icon-github-link-box.svg";
import frontendMentorIcon from "../../assets/icons/icon-link-boxes/icon-frontendmentor-link-box.svg";
import linkedInIcon from "../../assets/icons/icon-link-boxes/icon-linkedin-link-box.svg";
import YouTubeIcon from "../../assets/icons/icon-link-boxes/icon-youtube-link-box.svg";
import facebookIcon from "../../assets/icons/icon-link-boxes/icon-facebook-link-box.svg";
import twitchIcon from "../../assets/icons/icon-link-boxes/icon-twitch-link-box.svg";
import devToIcon from "../../assets/icons/icon-link-boxes/icon-devto-link-box.svg";
import stackOverFlowIcon from "../../assets/icons/icon-link-boxes/icon-stackoverflow-link-box.svg";
import codePenIcon from "../../assets/icons/icon-link-boxes/icon-codepen-link-box.svg";
import codeWarsIcon from "../../assets/icons/icon-link-boxes/icon-codewars-link-box.svg";
import freeCodeCampIcon from "../../assets/icons/icon-link-boxes/icon-freecodecamp-link-box.svg";
import gitlabIcon from "../../assets/icons/icon-link-boxes/icon-gitlab-link-box.svg";
import hashNodeIcon from "../../assets/icons/icon-link-boxes/icon-hashnode-link-box.svg";

/* ICONS */

import arrowRight from "../../assets/icons/icon-arrow-right.svg";
import arrowRightDark from "../../assets/icons/icon-arrow-right-dark.svg";

const PhoneMockup = () => {
  const platformData = [
    {
      name: "Github",
      color: "#1A1A1A",
      titleLogo: githubIcon
    },
    {
      name: "Frontend Mentor",
      color: "#fafafa",
      titleLogo: frontendMentorIcon
    },
    {
      name: "LinkedIn",
      color: "#2D68FF",
      titleLogo: linkedInIcon
    },
    {
      name: "YouTube",
      color: "#EE3939",
      titleLogo: YouTubeIcon
    },
    {
      name: "Facebook",
      color: "#2442AC",
      titleLogo: facebookIcon
    },
    {
      name: "Twitch",
      color: "#9146ff",
      titleLogo: twitchIcon
    },
    {
      name: "Dev.to",
      color: "#333",
      titleLogo: devToIcon
    },
    {
      name: "Stack Overflow",
      color: "#EC7100",
      titleLogo: stackOverFlowIcon
    },
    {
      name: "Codepen",
      color: "#000",
      titleLogo: codePenIcon
    },
    {
      name: "Codewars",
      color: "#8A1A50",
      titleLogo: codeWarsIcon
    },
    {
      name: "freeCodeCamp",
      color: "#302267",
      titleLogo: freeCodeCampIcon
    },
    {
      name: "GitLab",
      color: "#EB4925",
      titleLogo: gitlabIcon
    },
    {
      name: "Hashnode",
      color: "#0330D1",
      titleLogo: hashNodeIcon
    }
  ];
  const { userLinks, auth, displayProfile, setDisplayProfile } = useContent();
  const [isNameAvialable, setIsNameAvialable] = useState(false);
  const token = auth.accessToken;

  console.log("🔗 USER's Mockup Data: ", userLinks);
  const getUserPlatformData = (platformName) => {
    return platformData.find((platform) => platform.name === platformName);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });
        setIsNameAvialable(true);
        if (!response) return;
        setDisplayProfile(response.data);
      } catch (error) {
        setIsNameAvialable(false);
        console.log(error);
      }
    };
    fetchUserData();
  }, [token]);

  const isDarkColor = (color) => {
    // Convert color to RGB values
    const hex = color.slice(1); // Remove '#' from the color string
    const [r, g, b] = hex.match(/.{1,2}/g).map((val) => parseInt(val, 16));

    // Calculate the relative luminance (brightness) of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // If the luminance is less than or equal to 0.5, it's a dark color
    return luminance <= 0.5;
  };

  const { firstName, lastName, email, profileImage } = displayProfile;

  return (
    <div className="flex items-center justify-center rounded-xl bg-white p-[4.25rem]">
      <div className="h-[632px] w-[308px] overflow-hidden bg-phoneMockup bg-center bg-no-repeat pb-8 pt-16 relative">
        <div className="flex flex-col items-center">
          <img
            src={`http://localhost:3000/uploads/${profileImage}`}
            className="mb-6 h-[104px] w-[104px] cursor-pointer rounded-full border-4 border-solid border-[#633CFF]"
          />
          <h1 className="mb-2 text-3xl font-bold leading-[150%] text-[#333]">
            {isNameAvialable ? `${firstName} ${lastName}` : "Your Name"}
          </h1>
          <h2 className="mb-8 leading-[150%] text-[#737373]">
            {isNameAvialable ? email : "Your Email"}
          </h2>
        </div>
        {/* Use Scrollbars to wrap your content */}
        <div className="absolute top-[48%] left-0 bottom-0 right-0 overflow-auto pb-11 ">
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            renderThumbVertical={() => <div style={{ display: "none" }} />}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Your userLinks content */}
              {userLinks.map((link) => {
                const platform = getUserPlatformData(link.linkTitle);
                if (platform) {
                  const dynamicStyles = {
                    backgroundColor: platform.color,
                    color: isDarkColor(platform.color) ? "white" : "black"
                  };

                  return (
                    <div
                      key={platform.name}
                      className="flex h-[44px] w-[237px]  justify-between rounded-xl p-1 text-center"
                      style={dynamicStyles}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          className="ml-2 inline-block w-[40%]"
                          src={platform.titleLogo}
                          alt={platform.name}
                        />
                        <h1 className="whitespace-nowrap">{platform.name}</h1>
                      </div>
                      {isDarkColor ? (
                        <img
                          className="mr-2 inline-block w-[10%]"
                          src={arrowRightDark}
                          alt="Arrow"
                        />
                      ) : (
                        <img
                          className="mr-2 inline-block w-[10%]"
                          src={arrowRight}
                          alt="Arrow"
                        />
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
