import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import useContent from "../../hooks/useContent";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";
import emailIcon from "../../assets/icons/icon-email.svg";
import passIcon from "../../assets/icons/icon-password.svg";

const REGISTER_URL = "/register";

const CreateAccountForm = () => {
  const { setAuth } = useContent();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, resetUser, userAttributes] = useInput("email", "");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setLoading(true);
      console.log(response);
      const accessToken = response?.data?.accessToken;
      setAuth({ email, accessToken });
      resetUser();
      setPassword("");
      navigate("/account", { replace: true });
    } catch (err) {
      console.log(err);
      setErrMsg(err?.response?.data?.message);
      setLoading(false);
      errRef.current.focus();
    }
  };

  return (
    <form className="mb-6 flex flex-col gap-6" onSubmit={handleSubmit}>
      <p
        ref={errRef}
        className={
          errMsg
            ? "mb-2 rounded-lg bg-pink-400 p-2 font-bold text-red-600"
            : "absolute -left-full"
        }
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <fieldset className="flex w-full flex-col gap-1">
        <label className="text-xs leading-[150%] text-[#333] sm:text-xs">
          Email address
        </label>
        <div className="relative">
          <input
            type="email"
            ref={userRef}
            {...userAttributes}
            placeholder="e.g. email@example.com"
            className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-[48px] leading-[150%] focus:border focus:border-[#633CFF] focus:outline-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-10 focus:ring-offset-0 focus:ring-offset-transparent"
            required
          />
          <img
            src={emailIcon}
            width="0"
            height="0"
            alt=""
            className="absolute bottom-0 left-4 top-0 m-auto h-auto w-4 object-contain"
          />
        </div>
      </fieldset>
      <fieldset className="flex w-full flex-col gap-1">
        <label className="text-xs leading-[150%] text-[#333] sm:text-xs">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-[48px] leading-[150%] focus:border focus:border-[#633CFF] focus:outline-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-10 focus:ring-offset-0 focus:ring-offset-transparent"
            required
          />
          <img
            src={passIcon}
            width="0"
            height="0"
            alt=""
            className="absolute bottom-0 left-4 top-0 m-auto h-auto w-4 object-contain"
          />
        </div>
      </fieldset>

      {/* 3 */}
      {/* <fieldset className="flex w-full flex-col gap-1">
        <label className="text-xs leading-[150%] text-[#333] sm:text-xs">
          Email address
        </label>
        <div className="relative">
          <input
            type="email"
            error="Not valid email"
            placeholder="e.g. email@example.com"
            className="h-[48px] w-full rounded-lg border border-solid border-[#D9D9D9] bg-[#fff] px-[48px] leading-[150%] focus:border focus:border-[#633CFF] focus:outline-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-10 focus:ring-offset-0 focus:ring-offset-transparent"
          />
          <img
            src={passIcon}
            width="0"
            height="0"
            alt=""
            className="absolute bottom-0 left-4 top-0 m-auto h-auto w-4 object-contain"
          />
        </div>
      </fieldset> */}

      <button className="hover:shadow-[0px_0px_32px_0px_rgba(99, 60, 255, 0.25)] relative h-[46px] gap-2 rounded-lg border-none bg-[#633CFF] px-7 py-3 font-semibold leading-[150%] text-[#FFFFFF] hover:bg-[#BEADFF]">
        {loading ? (
          <CircularProgress
            size={"2.0rem"}
            className="absolute bottom-0 left-0 right-0 top-0 m-auto"
          />
        ) : (
          "Create new account"
        )}
      </button>
    </form>
  );
};

export default CreateAccountForm;
