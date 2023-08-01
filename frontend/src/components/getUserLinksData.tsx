import useContent from "../hooks/useContent";
import axios from "../api/axios";
import IconLinkImg from "../assets/icons/icon-link.svg";
/* ICONS */
import githubIcon from "../assets/icons/select-icons/icon-github.svg";
import frontendMentorIcon from "../assets/icons/select-icons/icon-frontendmentor.svg";
import linkedInIcon from "../assets/icons/select-icons/icon-linkedin.svg";
import YouTubeIcon from "../assets/icons/select-icons/icon-youtube.svg";
import facebookIcon from "../assets/icons/select-icons/icon-facebook.svg";
import twitchIcon from "../assets/icons/select-icons/icon-twitch.svg";
import devToIcon from "../assets/icons/select-icons/icon-devto.svg";
import stackOverFlowIcon from "../assets/icons/select-icons/icon-stackoverflow.svg";
import codePenICon from "../assets/icons/select-icons/icon-codepen.svg";
import codeWarsIcon from "../assets/icons/select-icons/icon-codewars.svg";
import freeCodeCampIcon from "../assets/icons/select-icons/icon-freecodecamp.svg";
import gitlabIcon from "../assets/icons/select-icons/icon-gitlab.svg";
import hashNodeIcon from "../assets/icons/select-icons/icon-hashnode.svg";

const titleLogo = {
  Github: githubIcon,
  "Frontend Mentor": frontendMentorIcon,
  LinkedIn: linkedInIcon,
  YouTube: YouTubeIcon,
  Facebook: facebookIcon,
  Twitch: twitchIcon,
  "Dev.to": devToIcon,
  "Stack Overflow": stackOverFlowIcon,
  Codepen: codePenICon,
  Codewars: codeWarsIcon,
  freeCodeCamp: freeCodeCampIcon,
  GitLab: gitlabIcon,
  Hashnode: hashNodeIcon,
};

const LINK_URL = "/link";

const getUserLinksData = () => {
  const { userLinks, auth, setUserLinks } = useContent();
  const token = auth?.accessToken;

  const handleDelete = async (id) => {
    console.log("DELETE HANDLER CLICKED!");
    try {
      const res = await axios.delete(`${LINK_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    const updateLinks = userLinks.filter((link) => link._id !== id);
    setUserLinks(updateLinks);
  };

  return (
    <>
      {userLinks.map((item, index) => {
        const logoSrc = titleLogo[item.linkTitle] || "";
        return (
          <div
            key={item._id}
            className="relative flex h-60 w-full flex-col justify-center rounded-lg bg-[#e5e7eb] px-5"
          >
            <div className="flex justify-between pb-3">
              <h1 className="font-bold">= Link #{index + 1}</h1>
              <button
                className="leading-[150%] text-[#737373] hover:text-[#633CFF]"
                onClick={() => handleDelete(item._id)}
              >
                Remove
              </button>
            </div>
            {/* PLATFORM INPUT */}
            <fieldset className="mb-3 flex flex-col gap-1" name={"platform"}>
              <label className="text-xs leading-[150%] text-[#333]">
                Platform
              </label>
              <div className="relative flex h-[46px] w-full cursor-pointer items-center gap-3 rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-4 text-lg leading-[150%] text-[#333]">
                <img src={logoSrc} className="h-4 w-4" />
                {item.linkTitle}
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-1">
              <label className="text-xs leading-[150%] text-[#333]">Link</label>
              <div className="relative z-10">
                <img
                  src={IconLinkImg}
                  className="absolute inset-y-0 left-4 m-auto w-4 object-contain"
                />
                <div className="h-12 w-full items-center gap-3 rounded-lg border border-solid border-[#D9D9D9] bg-white pl-11 pr-4 pt-2 leading-[150%] text-[#333] hover:border hover:border-solid hover:border-[#633CFF] focus:border focus:border-solid focus:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)] focus:outline-none">
                  {item.url}
                </div>
              </div>
            </fieldset>
          </div>
        );
      })}
    </>
  );
};

export default getUserLinksData;
