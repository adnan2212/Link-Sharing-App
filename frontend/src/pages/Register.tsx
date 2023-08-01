import { Link } from "react-router-dom";
import CreateAccountForm from "../components/authorization/CreateAccountForm";
import devLinkLogo from "../assets/icons/logo-devlinks-large.svg";

const Register = () => {
  return (
    <div className="left-0 top-0 w-full items-start gap-16 bg-[#fafafa] p-8 sm:absolute sm:left-2/4 sm:top-2/4 sm:flex sm:-translate-x-2/4 sm:-translate-y-2/4 sm:flex-col sm:items-center sm:gap-[51px]">
      <section className="flex min-h-[618px] w-[476px] flex-col gap-2 rounded-xl bg-[#fff] p-10">
        <h1 className="text-[2rem] font-bold leading-[150%] text-[#333]">
          Create account
        </h1>
        <p className="mb-8 text-base font-normal leading-[150%] text-neutral-500">
          Let’s get you started sharing your links!
        </p>
        <CreateAccountForm />
        <p className="text-center text-base font-normal leading-[150%] text-[#737373]">
          Already have an account? &nbsp;
          <Link to="/login">
            <button className="text-center text-base font-normal leading-[150%] text-[#633CFF] hover:underline">
              Login
            </button>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
