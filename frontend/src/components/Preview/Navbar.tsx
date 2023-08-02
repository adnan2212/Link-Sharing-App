import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useContent from "../../hooks/useContent";
import axios from "../../api/axios";

const Navbar = () => {
  const { auth, setOpenCopiedToClipboardMessage } = useContent();
  const [link, setLink] = useState("");
  const token = auth?.accessToken;

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get("/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setLink(response.data.profileLink);
      };
      fetchUser();
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  const handleShare = () => {
    // const url = `http:localhost:5173/profile/`;
    const url = `http:localhost:5173/profile/${link}`;
    navigator.clipboard.writeText(url);
    console.log("link copied to clipboard");
    setOpenCopiedToClipboardMessage(true);
  };
  return (
    <nav className="m-auto flex h-20 w-full items-center justify-between rounded-xl bg-[#fff] px-6 lg:w-[95%]">
      <Link to="/account">
        <button className="h-[46px] w-[159px] cursor-pointer rounded-lg border border-solid border-[#633CFF] bg-[#fff] font-semibold leading-[150%] text-[#633CFF] hover:bg-[#633CFF] hover:text-[#fff] sm:w-[133px]">
          Back to Editor
        </button>
      </Link>
      <button
        className="h-[46px] w-[133px] cursor-pointer rounded-lg bg-[#633CFF] font-semibold text-[#fff] hover:border hover:border-solid hover:border-[#633CFF] hover:bg-[#fff] hover:text-[#633CFF]"
        onClick={handleShare}
      >
        Share Link
      </button>
    </nav>
  );
};

export default Navbar;
