import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="m-auto flex h-20 w-full items-center justify-between rounded-xl bg-[#fff] px-6 lg:w-[95%]">
      <Link to="/">
        <button className="h-[46px] w-[159px] cursor-pointer rounded-lg border border-solid border-[#633CFF] bg-[#fff] font-semibold leading-[150%] text-[#633CFF] hover:bg-[#633CFF] hover:text-[#fff] sm:w-[133px]">
          Back to Editor
        </button>
      </Link>
      <button className="h-[46px] w-[133px] cursor-pointer rounded-lg bg-[#633CFF] font-semibold text-[#fff] hover:border hover:border-solid hover:border-[#633CFF] hover:bg-[#fff] hover:text-[#633CFF]">
        Share Link
      </button>
    </nav>
  );
};

export default Navbar;
