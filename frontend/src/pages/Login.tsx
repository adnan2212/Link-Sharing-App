import { Link } from "react-router-dom";
import LoginForm from "../components/authorization/LoginForm";
import devLinkLogo from "../assets/icons/logo-devlinks-large.svg";
import LoginMessageDialog from "../components/authorization/LoginMessageDialog";

const Login = () => {
  return (
    <>
      <div className="left-0 top-0 w-full items-start gap-16 bg-[#fafafa] p-8 sm:absolute sm:left-2/4 sm:top-2/4 sm:flex sm:-translate-x-2/4 sm:-translate-y-2/4 sm:flex-col sm:items-center sm:gap-[51px]">
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
            Don't have an account? &nbsp;
            <Link to="/register">
              <button className="text-center text-base font-normal not-italic leading-[150%] text-[#633CFF] hover:underline">
                Create account
              </button>
            </Link>
          </p>
        </section>
      </div>
      <LoginMessageDialog />
    </>
  );
};

export default Login;
