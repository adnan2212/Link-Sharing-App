import phoneMockup from "../assets/images/illustration-phone-mockup.svg";

const PhoneMockup = () => {
  return (
    <div className="flex h-[834px] w-full items-center justify-center rounded-xl bg-[#fff]">
      <img
        src={phoneMockup}
        alt="phone-mockup"
        className="w-[307px] object-contain"
      />
    </div>
  );
};

export default PhoneMockup;
