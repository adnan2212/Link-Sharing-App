import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import smDevlink from "../assets/icons/logo-devlinks-small.svg";
import lgDevlink from "../assets/icons/logo-devlinks-large.svg";
import smLink from "../assets/icons/icon-links-header.svg";
import userIcon from "../assets/icons/icon-profile-details-header.svg";
import smPreview from "../assets/icons/icon-preview-header.svg"; // lg:PREVIEW

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let logo = windowWidth < 768 ? smDevlink : lgDevlink;
  let link = windowWidth < 768 ? "" : "Links";
  let profile = windowWidth < 768 ? "" : "Profile Details";
  let preview =
    windowWidth < 768 ? (
      <img src={smPreview} alt="preview" />
    ) : (
      <li className="px-2 font-semibold text-[#633cff]">Preview</li>
    );

  return (
    <nav className="mb-5 flex h-16 w-full list-none items-center justify-between rounded-xl bg-[#fff] px-6 py-10">
      <li className="cursor-pointer">
        <img src={logo} alt="dev-link" className="lg:w-36" />
      </li>
      <ul className="flex gap-x-10">
        <NavLink to="/">
          <li className="cursor-pointer rounded-lg p-2 py-3 opacity-100 hover:bg-[#EFEBFF] active:bg-[#EFEBFF] md:flex md:gap-x-2 md:px-6">
            <img src={smLink} alt="link" />
            <span className="font-semibold text-purple-900">{link}</span>
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li className="cursor-pointer rounded-lg p-2 py-3 opacity-100 transition duration-300 hover:bg-[#EFEBFF] active:bg-[#EFEBFF] md:flex md:gap-x-2 md:px-6">
            <img src={userIcon} alt="link" />
            <span className="font-semibold">{profile}</span>
          </li>
        </NavLink>
      </ul>
      <Link
        to="/preview"
        className="cursor-pointer rounded-lg border border-[#633cff] p-2 px-4 hover:bg-[#EFEBFF] active:bg-[#EFEBFF]"
      >
        {preview}
      </Link>
    </nav>
  );
};

export default Navbar;
