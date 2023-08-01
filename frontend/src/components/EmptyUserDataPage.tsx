import emptyImg from "../assets/images/illustration-empty.svg";

const EmptyUserDataPage = () => {
  return (
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
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyUserDataPage;
