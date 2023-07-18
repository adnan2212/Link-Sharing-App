const Input = ({ type, label, name, placeholder, ...rest }) => {
  // const inputRef = useRef(null);
  const handleChange = () => {};
  const handleBlur = () => {};
  const handleInvalid = () => {};

  return (
    <fieldset className="flex w-full flex-col items-start justify-between gap-4">
      <label className={label} htmlFor={label}>
        {label}
      </label>
      <div className="relative w-[432px] md:w-full lg:w-[70%]">
        <input
          type={type}
          //   value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onInvalid={handleInvalid}
          className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-white p-4 leading-[150%] text-[#333333] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#633CFF]"
          placeholder={placeholder}
          id={label}
          //   ref={inputRef}
          name={name}
          {...rest}
        />
        <div
          className="hidden"
          //   ref={errorMessageRef}
        >
          Can't be empty
        </div>
      </div>
    </fieldset>
  );
};

export default Input;
