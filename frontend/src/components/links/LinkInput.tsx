import IconLinkImg from "../../assets/icons/icon-link.svg";

const LinkInput = ({ setUrl }) => {
  // const [url, setUrl] = useState("");

  return (
    <fieldset className="flex flex-col gap-1">
      <label className="text-xs leading-[150%] text-[#333]">Link</label>
      <div className="relative z-10">
        <img
          src={IconLinkImg}
          className="absolute inset-y-0 left-4 m-auto w-4 object-contain"
        />
        <input
          type="url"
          className="h-12 w-full gap-3 rounded-lg border border-solid border-[#D9D9D9] pl-11 pr-4 leading-[150%] text-[#333] hover:border hover:border-solid hover:border-[#633CFF] focus:border focus:border-solid focus:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)] focus:outline-none"
          name="url"
          // value={url}
          // onChange={handleChange}
          onChange={(e) => setUrl(e.target.value)}
          // onBlur={handleBlur}
          // onInvalid={handleInvalid}
          placeholder="e.g. https://www.github.com/yourusername"
          pattern="https://.*"
          autoComplete="off"
          // ref={inputRef}
          required
        />
        <p
          className="absolute bottom-0 right-4 top-0 m-auto hidden h-10 items-center justify-center bg-[white] text-xs leading-[150%] text-[#FF3939] md:-bottom-5 md:top-[initial] md:h-auto"
          // ref={"emptyMessageRef"}
        >
          Can't be empty
        </p>
        <p
          className="absolute bottom-0 right-4 top-0 m-auto hidden h-10 items-center justify-center bg-[white] text-xs leading-[150%] text-[#FF3939] md:-bottom-5 md:top-[initial] md:h-auto"
          // ref={invalidUrlMessageRef}
        >
          Please check the URL
        </p>
      </div>
    </fieldset>
  );
};

export default LinkInput;
