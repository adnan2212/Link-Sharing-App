import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import useContent from "../../hooks/useContent";
import useInput from "../../hooks/useInput";
import axios from "../../api/axios";
import emailIcon from "../../assets/icons/icon-email.svg";
import passIcon from "../../assets/icons/icon-password.svg";

const LOGIN_URL = "/auth";

const LoginForm = () => {
  const { setAuth } = useContent();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();
  const passwordRef = useRef();
  const errorMessageRef = useRef();

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
    setLoading(true);

    if (errorMessageRef.current) {
      errorMessageRef.current.style.display = "none";
    }

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const loggedInUserID = response.data.userId;
      const accessToken = response?.data?.accessToken;
      console.log(email, response);
      setAuth({ email, accessToken, loggedInUserID });
      resetUser();
      setPassword("");
      navigate("/account", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (errorMessageRef.current) {
        errorMessageRef.current.style.display = "block";
      }

      if (err.response) {
        setErrMsg(err?.response?.data?.message);

        if (errRef.current) {
          errRef.current.focus();
        }

        if (err.response.status === 401) {
          setErrMsg("Email or password is incorrect");
        }
      } else if (err.request) {
        setErrMsg(
          "Network Error. Please check your internet connection and try again."
        );
      } else {
        setErrMsg("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
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
              ref={passwordRef}
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
        <button className="h-[46px] shrink-0 cursor-pointer rounded-lg bg-[#633CFF] font-semibold leading-[150%] text-[#fff] hover:bg-[#BEADFF] hover:shadow-lg hover:shadow-violet-500/50">
          {loading ? (
            <CircularProgress
              size={"2.0rem"}
              className="absolute bottom-0 left-0 right-0 top-0 m-auto"
            />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
