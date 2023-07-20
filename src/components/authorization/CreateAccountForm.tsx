// import CircularProgress from "@mui/material/CircularProgress";
import Input from "./Input";
import emailIcon from "../../assets/icons/icon-email.svg";
import passIcon from "../../assets/icons/icon-password.svg";

const CreateAccountForm = () => {
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("hidden");
  // const [requirement, setRequirement] = useState("hidden");
  // const email = useRef(null);
  // const password = useRef(null);
  // const confirmPassword = useRef(null);
  // const passwordsDontMatch = useRef(null);
  // const emailAlreadyExists = useRef(null);
  // const notEightCharactersMessage = useRef(null);

  const handleSubmit = () => {};

  return (
    <form className="mb-6 flex flex-col gap-6" onSubmit={handleSubmit}>
      <Input
        label="Email address"
        type="email"
        icon={emailIcon}
        error="Not valid email"
        placeholder="e.g. email@example.com"
        // ref={email}
      />
      <Input
        label="Create password"
        type="password"
        icon={passIcon}
        error="Please check again"
        placeholder="At least 8 characters"
        // ref={password}
      />
      <Input
        label="Confirm password"
        type="password"
        icon={passIcon}
        error="Please check again"
        placeholder="At least 8 characters"
        // ref={confirmPassword}
      />
      <p
        className="text-xs leading-[150%] text-[#737373]"
        // ref={notEightCharactersMessage}
      >
        Password must contain at least 8 characters
      </p>
      <p
        className="hidden text-[1.05rem] leading-[150%] text-[#FF3939]"
        // ref={passwordsDontMatch}
      >
        Passwords do not match
      </p>
      <p
        className="hidden text-[1.05rem] leading-[150%] text-[#FF3939]"
        // ref={emailAlreadyExists}
      >
        Email already exists
      </p>
      <button className="hover:shadow-[0px_0px_32px_0px_rgba(99, 60, 255, 0.25)] relative h-[46px] gap-2 rounded-lg border-none bg-[#633CFF] px-7 py-3 font-semibold leading-[150%] text-[#FFFFFF] hover:bg-[#BEADFF]">
        Create new account
        {/*  {loading ? (
          <CircularProgress size={"2.0rem"} className="absolute top-0 bottom-0 left-0 right-0 m-auto" />
        ) : (
          "Create new account"
        )} */}
      </button>
    </form>
  );
};

export default CreateAccountForm;
