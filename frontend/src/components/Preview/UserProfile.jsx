import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

/* ICONS */
import arrowRight from "../../assets/icons/icon-arrow-right.svg";
import githubIcon from "../../assets/icons/icon-link-boxes/icon-github-link-box.svg";
import frontendMentorIcon from "../../assets/icons/icon-link-boxes/icon-frontendmentor-link-box.svg";
import linkedInIcon from "../../assets/icons/icon-link-boxes/icon-linkedin-link-box.svg";
import YouTubeIcon from "../../assets/icons/icon-link-boxes/icon-youtube-link-box.svg";
import facebookIcon from "../../assets/icons/icon-link-boxes/icon-facebook-link-box.svg";
import twitchIcon from "../../assets/icons/icon-link-boxes/icon-twitch-link-box.svg";
import devToIcon from "../../assets/icons/icon-link-boxes/icon-devto-link-box.svg";
import stackOverFlowIcon from "../../assets/icons/icon-link-boxes/icon-stackoverflow-link-box.svg";
import codePenICon from "../../assets/icons/icon-link-boxes/icon-codepen-link-box.svg";
import codeWarsIcon from "../../assets/icons/icon-link-boxes/icon-codewars-link-box.svg";
import freeCodeCampIcon from "../../assets/icons/icon-link-boxes/icon-freecodecamp-link-box.svg";
import gitlabIcon from "../../assets/icons/icon-link-boxes/icon-gitlab-link-box.svg";
import hashNodeIcon from "../../assets/icons/icon-link-boxes/icon-hashnode-link-box.svg";

const getIconAndColor = [
  { name: "Github", icon: githubIcon, color: "#1A1A1A" },
  { name: "Frontend Mentor", icon: frontendMentorIcon, color: "#FFF" },
  { name: "LinkedIn", icon: linkedInIcon, color: "#43B7E9" },
  { name: "YouTube", icon: YouTubeIcon, color: "#EE3939" },
  { name: "Facebook", icon: facebookIcon, color: "#2D68FF" },
  { name: "Twitch", icon: twitchIcon, color: "#9146ff" },
  { name: "Dev.to", icon: devToIcon, color: "#333" },
  { name: "Stack Overflow", icon: stackOverFlowIcon, color: "#EC7100" },
  { name: "Codepen", icon: codePenICon, color: "#8A1A50" },
  { name: "Codewars", icon: codeWarsIcon, color: "#8A1A50" },
  { name: "freeCodeCamp", icon: freeCodeCampIcon, color: "#302267" },
  { name: "GitLab", icon: gitlabIcon, color: "#EB4925" },
  { name: "Hashnode", icon: hashNodeIcon, color: "#0330D1" },
];

const UserProfile = () => {
  const [userLinks, setUserLinks] = useState();
  const [loading, setLoading] = useState(true);
  const { profileLink } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/profile/${profileLink}`);
        console.log(response.data.user);
        setUser(response.data.user);
        setUserLinks(response.data.user.links[0].links);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <header className="h-[357px] w-full rounded-bl-[32px] rounded-br-[32px] bg-[#fff] pt-4 md:bg-[#633CFF] md:pt-6">
      <section className="absolute inset-x-0 top-[138px] flex w-full flex-col items-center rounded-none bg-[#fff] p-0 py-12 shadow-none md:left-0 md:right-0 md:top-[108px] md:m-auto md:min-h-[569px] md:w-[349px] md:rounded-3xl md:bg-[#fff]">
        {/* e5e7eb */}
        <img
          src={`http://localhost:3000/uploads/${user.profileImage}`}
          className="mb-6 h-[104px] w-[104px] cursor-pointer rounded-full border-4 border-solid border-[#633CFF]"
        />
        <h1 className="mb-2 text-3xl font-bold leading-[150%] text-[#333]">
          {`${user.firstName} ${user.lastName}`}
        </h1>
        <h2 className="mb-14 leading-[150%] text-[#737373]">{user.email}</h2>
        {userLinks.map((data, index) => {
          const iconObject = getIconAndColor.find(
            (item) => item.name === data.linkTitle
          );
          const textColor =
            data.linkTitle === "Frontend Mentor" ? "text-black" : "text-white";
          return (
            <a href={data.url} key={index} target="_blank">
              <div
                className={`m-1 flex h-auto w-[237px] cursor-pointer items-center justify-between gap-4 rounded-lg p-3 ${textColor}`}
                style={{ backgroundColor: iconObject.color }}
              >
                <div className="flex items-center gap-2">
                  <img className="" src={iconObject.icon} alt="Icon" />
                  <h1 className="text-[14px]">{data.linkTitle}</h1>
                </div>
                <img className="" src={arrowRight} alt="Arrow" />
              </div>
            </a>
          );
        })}
      </section>
    </header>
  );
};

export default UserProfile;
