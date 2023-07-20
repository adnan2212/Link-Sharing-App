const Input = ({ label, type, text, placeholder, icon, error }) => {
  const handleChange = () => {};
  const handleBlur = () => {};
  const handleInvalid = () => {};
  // const inputRef = useRef(null);
  return (
    <div>
      <fieldset className="flex w-full flex-col gap-1">
        <label className="text-xs leading-[150%] text-[#333] sm:text-xs">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            onInvalid={handleInvalid}
            placeholder={placeholder}
            className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-[48px] leading-[150%] focus:border focus:border-[#633CFF] focus:outline-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-10 focus:ring-offset-0 focus:ring-offset-transparent"
            // ref={inputRef}
            required
          />
          <img
            src={icon}
            width="0"
            height="0"
            alt=""
            className="absolute bottom-0 left-4 top-0 m-auto h-auto w-4 object-contain"
          />

          <span
            className="absolute bottom-0 right-4 top-0 m-auto hidden h-[18px] text-right text-xs leading-[150%] text-[#FF3939] "
            //   ref={errorMessageRef}
          >
            {error}
          </span>
          <span
            className="absolute bottom-0 right-4 top-0 m-auto hidden h-[18px] text-right text-xs leading-[150%] text-[#FF3939]"
            //   ref={emptyMessageRef}
          >
            Can't be empty
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default Input;
