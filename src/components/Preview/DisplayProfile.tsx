import Navbar from "./Navbar";
import userImg from "../../assets/images/placeholder-image.png";
import Github from "../../assets/icons/select-icons/icon-github.svg";

const DisplayProfile = () => {
  return (
    <header className="h-[357px] w-full rounded-bl-[32px] rounded-br-[32px] bg-[#fff] pt-4 md:bg-[#633CFF] md:pt-6">
      <Navbar />
      <section className="absolute inset-x-0 top-[138px] flex w-full flex-col items-center rounded-none p-0 py-12 shadow-none md:left-0 md:right-0 md:top-[208px] md:m-auto md:min-h-[569px] md:w-[349px] md:rounded-3xl md:bg-[#fff]">
        <img
          src={userImg}
          className="mb-6 h-[104px] w-[104px] cursor-pointer rounded-full border-4 border-solid border-[#633CFF]"
        />
        <h1 className="mb-2 text-3xl font-bold leading-[150%] text-[#333]">
          John Doe
        </h1>
        <h2 className="mb-14 leading-[150%] text-[#737373]">
          john@example.com
        </h2>
        <a href="https://github.com">
          <div className="flex h-auto w-[237px] cursor-pointer items-center justify-center gap-3 bg-black p-3 text-white">
            <h1>Github</h1>
            <img src={Github} />
          </div>
        </a>
      </section>
    </header>
  );
};

export default DisplayProfile;
