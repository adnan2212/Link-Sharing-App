import { useState } from "react";
/* ICONS */
import arrowIcon from "../../assets/icons/icon-chevron-down.svg";
import githubIcon from "../../assets/icons/select-icons/icon-github.svg";
import frontendMentorIcon from "../../assets/icons/select-icons/icon-frontendmentor.svg";
import linkedInIcon from "../../assets/icons/select-icons/icon-linkedin.svg";
import YouTubeIcon from "../../assets/icons/select-icons/icon-youtube.svg";
import facebookIcon from "../../assets/icons/select-icons/icon-facebook.svg";
import twitchIcon from "../../assets/icons/select-icons/icon-twitch.svg";
import devToIcon from "../../assets/icons/select-icons/icon-devto.svg";
import stackOverFlowIcon from "../../assets/icons/select-icons/icon-stackoverflow.svg";
import codePenICon from "../../assets/icons/select-icons/icon-codepen.svg";
import codeWarsIcon from "../../assets/icons/select-icons/icon-codewars.svg";
import freeCodeCampIcon from "../../assets/icons/select-icons/icon-freecodecamp.svg";
import gitlabIcon from "../../assets/icons/select-icons/icon-gitlab.svg";
import hashNodeIcon from "../../assets/icons/select-icons/icon-hashnode.svg";

const platforms = [
  { name: "Github", icon: githubIcon },
  { name: "Frontend Mentor", icon: frontendMentorIcon },
  { name: "LinkedIn", icon: linkedInIcon },
  { name: "YouTube", icon: YouTubeIcon },
  { name: "Facebook", icon: facebookIcon },
  { name: "Twitch", icon: twitchIcon },
  { name: "Dev.to", icon: devToIcon },
  { name: "Stack Overflow", icon: stackOverFlowIcon },
  { name: "Codepen", icon: codePenICon },
  { name: "Codewars", icon: codeWarsIcon },
  { name: "freeCodeCamp", icon: freeCodeCampIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "Hashnode", icon: hashNodeIcon },
];

const PlatformSelectBox = ({ setLinkTitle }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (platform) => {
    setSelectedPlatform(platform);
    setLinkTitle(platform);
    setIsDropdownOpen(false);
  };

  return (
    <fieldset className="mb-3 flex flex-col gap-1" name={"platform"}>
      <label className="text-xs leading-[150%] text-[#333]">Platform</label>
      <div
        className="relative flex h-[46px] w-full cursor-pointer items-center gap-3 rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-4 text-lg leading-[150%] text-[#333]"
        onClick={handleInputChange}
      >
        {selectedPlatform && (
          <img
            src={
              platforms.find((platform) => platform.name === selectedPlatform)
                .icon
            }
            className="h-4 w-4"
            alt={selectedPlatform}
          />
        )}
        {selectedPlatform ? selectedPlatform : "Select a platform"}
        <img
          src={arrowIcon}
          className={`absolute inset-y-0 bottom-0 right-4 top-0 m-auto w-4 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          } object-contain`}
          alt="dropdown-arrow"
        />
        {isDropdownOpen && (
          <div className="absolute left-0 top-full z-50 h-[345px] w-full scale-100 overflow-y-auto rounded-lg border border-solid border-[#D9D9D9] bg-[white] px-4 py-3 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex cursor-pointer items-center py-1"
                onClick={() => handleOptionClick(platform.name)}
              >
                <img
                  src={platform.icon}
                  className="h-4 w-4"
                  alt={platform.icon}
                />
                <span className="ml-3 text-[#737373]">{platform.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default PlatformSelectBox;
