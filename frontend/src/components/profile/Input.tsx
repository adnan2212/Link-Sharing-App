// import { useState, useRef, useEffect } from "react";

const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  // const [text, setText] = useState("");
  // const inputRef = useRef();
  // const errorMessage = useRef();

  // const handleChange = (e) => {
  //   // e.target.setCustomValidity("");
  //   setText(e.target.value);
  // };
  // const handleBlur = () => {};
  // const handleInvalid = () => {};

  return (
    <fieldset className="flex w-full flex-col items-start justify-between gap-4 px-5 text-[#737373] sm:p-0 md:flex-row">
      <label className={label} htmlFor={label}>
        {label}
      </label>
      <div className="relative w-full md:w-[70%]">
        <input
          type={type}
          value={value}
          onChange={onChange}
          // onBlur={handleBlur}
          // onInvalid={handleInvalid}
          className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-white p-4 leading-[150%] text-[#333333] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#633CFF]"
          placeholder={placeholder}
          id={label}
          // ref={inputRef}
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
