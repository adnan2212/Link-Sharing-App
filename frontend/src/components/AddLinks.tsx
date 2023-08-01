import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import LinkModal from "./links/LinkModal";
import useContent from "../hooks/useContent";
import axios from "../api/axios";
import GetUserLinksData from "./getUserLinksData";
import EmptyPage from "./EmptyUserDataPage";

const LINK_URL = "/link";

const AddLinks = () => {
  const { auth, userLinks, setUserLinks } = useContent();
  const token = auth?.accessToken;
  const [loading, setLoading] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkTitle, setLinkTitle] = useState("");
  const [url, setUrl] = useState("");
  const [fetchLinks, setFetchLinks] = useState(false);

  const handleCloseModal = () => {
    setShowLinkModal(false);
  };

  const addLink = () => {
    setShowLinkModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        LINK_URL,
        { linkTitle, url },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
      setUserLinks([...userLinks, response.data]);
      setLoading(false);
      setShowLinkModal(false);
      setFetchLinks(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(LINK_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        console.log("🔗 USER's Links: ", response.data[0].links);
        setUserLinks(response.data[0].links);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLinks();
  }, [token]);
  const isScrollable = userLinks.length > 0;
  return (
    <div className="h-min w-full rounded-xl bg-[#fff] pt-6 sm:justify-self-center">
      <div className="md:px-4 md:py-2">
        <h1 className="mb-2 px-6 text-2xl font-bold leading-[150%] text-[#333] md:text-3xl">
          Customize your links
        </h1>
        <p className="mb-10 px-6 py-0 text-[#737373]">
          Add/edit/remove links below and then share all your profiles with the
          world
        </p>
        <fieldset className="flex min-h-[540px] flex-col gap-6 px-10 pb-6 pt-0 sm:px-6 sm:pt-0 ">
          <button
            onClick={addLink}
            className="mx-auto my-0 block h-[46px] w-full cursor-pointer rounded-lg border border-solid border-[#633CFF] bg-transparent text-base font-semibold leading-[150%] text-[#633CFF] hover:bg-[#EFEBFF] disabled:cursor-not-allowed disabled:border disabled:border-solid disabled:border-transparent disabled:bg-[#cccccc] disabled:text-[#666666]"
          >
            + Add new link
          </button>
          <div
            className={
              isScrollable ? "max-h-[513px] space-y-8 overflow-y-auto p-5" : ""
            }
          >
            {showLinkModal && (
              <LinkModal
                handleCloseModal={handleCloseModal}
                setLinkTitle={setLinkTitle}
                setUrl={setUrl}
              />
            )}
            {userLinks.length > 0 ? <GetUserLinksData /> : <EmptyPage />}
          </div>
        </fieldset>
      </div>
      <section
        className={
          "flex h-[94px] w-full items-center justify-end border-t border-solid border-t-[#D9D9D9] bg-[white] px-10 py-0 sm:h-[78px] sm:px-4"
        }
      >
        <button
          onClick={handleSubmit}
          className={
            "flex h-[46px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#633CFF] text-base font-semibold not-italic leading-[150%] text-[white] hover:bg-[#BEADFF] md:w-[90px]"
          }
        >
          {loading ? <CircularProgress size="30px" /> : "Save"}
        </button>
      </section>
    </div>
  );
};

export default AddLinks;
