import { useState } from "react";
import LoginForm from "../components/authorization/LoginForm";
import CreateAccountForm from "../components/authorization/CreateAccountForm";
import devLinkLogo from "../assets/icons/logo-devlinks-large.svg";

const Authorization = () => {
  const [loginOrCreateAccount, setLoginOrCreateAccount] = useState(true);
  const changePage = () => {
    setLoginOrCreateAccount(!loginOrCreateAccount);
  };

  return (
    <>
      {/* <main className="absolute left-1/2 top-1/2"> */}
      {/* <main className="sm:absolute sm:left-2/4 sm:top-2/4 sm:flex sm:-translate-x-2/4 sm:-translate-y-2/4 sm:flex-col sm:items-center sm:gap-[51px]"> */}
      <main className="left-0 top-0 w-full items-start gap-16 bg-[#fff] p-8 sm:absolute sm:left-2/4 sm:top-2/4 sm:flex sm:-translate-x-2/4 sm:-translate-y-2/4 sm:flex-col sm:items-center sm:gap-[51px]">
        {/* <img
          src={devLinkLogo}
          width="0"
          height="0"
          alt="dev links"
          className="h-auto w-[182.5px] object-contain"
        /> */}

        {loginOrCreateAccount ? (
          <>
            <img
              src={devLinkLogo}
              width="0"
              height="0"
              alt="dev links"
              className="h-auto w-[182.5px] object-contain"
            />
            <section className="flex min-h-[482px] w-[476px] flex-col gap-2 rounded-xl bg-[white] p-10">
              <h1 className="text-[2rem] font-bold not-italic leading-[150%] text-[#333]">
                Login
              </h1>
              <p className="mb-8 text-base font-normal not-italic leading-[150%] text-neutral-500">
                Add your details below to get back into the app
              </p>
              <LoginForm />
              <p className="text-center text-base font-normal not-italic leading-[150%] text-[#737373]">
                {/* <p className="text-center text-base font-normal not-italic leading-[150%] text-[#737373]"> */}
                Don't have an account? &nbsp;
                <button
                  onClick={changePage}
                  className="text-center text-base font-normal not-italic leading-[150%] text-[#633CFF] hover:underline"
                >
                  Create account
                </button>
              </p>
            </section>
          </>
        ) : (
          <section className="flex min-h-[618px] w-[476px] flex-col gap-2 rounded-xl bg-[white] p-10">
            <h1 className="text-[2rem] font-bold leading-[150%] text-[#333]">
              Create account
            </h1>
            <p className="mb-8 text-base font-normal leading-[150%] text-neutral-500">
              Let’s get you started sharing your links!
            </p>
            <CreateAccountForm />
            <p className="text-center text-base font-normal leading-[150%] text-[#737373]">
              Already have an account? &nbsp;
              <button
                onClick={changePage}
                className="text-center text-base font-normal leading-[150%] text-[#633CFF] hover:underline"
              >
                Login
              </button>
            </p>
          </section>
        )}
      </main>

      {/* <LoginMessageDialog /> */}
    </>
  );
};

export default Authorization;
