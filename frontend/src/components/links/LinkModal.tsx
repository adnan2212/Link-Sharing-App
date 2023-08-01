import PlatformSelectBox from "./PlatformSelectBox";
import LinkInput from "./LinkInput";

const LinkModal = ({ setLinkTitle, setUrl, handleCloseModal }) => {
  return (
    <div className="relative flex h-60 w-full flex-col justify-center rounded-lg bg-[#c4c4c4] px-5">
      <div className="flex justify-between pb-3">
        <h1 className="font-bold">= Add Link</h1>
        <button
          className="font-semibold leading-[150%] text-[#737373] hover:text-[#633CFF]"
          onClick={handleCloseModal}
        >
          CLOSE
        </button>
      </div>
      <PlatformSelectBox setLinkTitle={setLinkTitle} />
      <LinkInput setUrl={setUrl} />
    </div>
  );
};

export default LinkModal;
