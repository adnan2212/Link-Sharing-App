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
  const { setAuth, setOpenLoginMessage } = useContent();
  const [confirmPassword, setConfirmPassword] = useState("");
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

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setErrMsg("Password must be at least 8 characters long");
      return;
    }

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
      setOpenLoginMessage(true);
      console.log(response);
      const accessToken = response?.data?.accessToken;
      setAuth({ email, accessToken });
      resetUser();
      setPassword("");
      setConfirmPassword("");
      navigate("/account", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response) {
        if (err.response.status === 409) {
          setErrMsg("An account with this email already exists");
        } else {
          setErrMsg(err?.response?.data?.message);
        }
      } else if (err.request) {
        setErrMsg(
          "Network Error. Please check your internet connection and try again."
        );
      } else {
        setErrMsg("An error occurred. Please try again later.");
      }

      errRef.current.focus();
    }
  };

  return (
    <form className="mb-6 flex flex-col gap-6" onSubmit={handleSubmit}>
      {errMsg && (
        <div
          ref={errRef}
          className={`mb-2 rounded-md border border-red-500 bg-red-100 p-2 text-red-700 transition-opacity duration-300 ease-in-out`}
          role="alert"
          aria-live="assertive"
        >
          {errMsg}
        </div>
      )}
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

      <fieldset className="flex w-full flex-col gap-1">
        <label className="text-xs leading-[150%] text-[#333] sm:text-xs">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
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
