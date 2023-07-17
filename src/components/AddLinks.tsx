// import { useState } from "react";
// import { CircularProgress } from "@mui/material";
import emptyImg from "../assets/images/illustration-empty.svg";

const AddLinks = () => {
  //  const [loading, setLoading] = useState(false);

  return (
    <form className="h-full w-full rounded-xl bg-[#fff] pt-6 sm:justify-self-center ">
      <div className="md:px-4 md:py-2">
        <h1 className="mb-2 px-6 text-2xl font-bold leading-[150%] text-[#333] md:text-3xl">
          Customize your links
        </h1>
        <p className="mb-10 px-6 py-0 text-[#737373]">
          Add/edit/remove links below and then share all your profiles with the
          world
        </p>
        <fieldset className="flex min-h-[540px] flex-col gap-6 px-10 pb-6 pt-0 sm:px-6 sm:pt-0 ">
          <button className="mx-auto my-0 block h-[46px] w-full cursor-pointer rounded-lg border border-solid border-[#633CFF] bg-transparent text-base font-semibold leading-[150%] text-[#633CFF] hover:bg-[#EFEBFF] disabled:cursor-not-allowed disabled:border disabled:border-solid disabled:border-transparent disabled:bg-[#cccccc] disabled:text-[#666666]">
            + Add new link
          </button>
          <div
            className={
              "flex h-[460px] w-full flex-col items-center justify-center gap-6 rounded-xl bg-[#fafafa] lg:h-[400px]"
            }
          >
            <img
              src={emptyImg}
              className={"mb-4 w-[124px] object-contain md:w-[249px]"}
            />
            <h1
              className={
                "text-center text-2xl font-bold not-italic leading-[150%] text-[#333] md:text-3xl"
              }
            >
              Let's get you started
            </h1>
            <p
              className={
                "text-center text-base font-normal not-italic leading-[150%] text-neutral-500 lg:w-[488px]"
              }
            >
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </fieldset>
      </div>
      <section
        className={
          "flex h-[94px] w-full items-center justify-end border-t border-solid border-t-[#D9D9D9] bg-[white] px-10 py-0 sm:h-[78px] sm:px-4"
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
      </section>
    </form>
  );
};

export default AddLinks;
