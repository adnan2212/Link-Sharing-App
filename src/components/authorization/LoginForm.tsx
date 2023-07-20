// import CircularProgress from "@mui/material/CircularProgress";
import Input from "./Input";
import emailIcon from "../../assets/icons/icon-email.svg";
import passIcon from "../../assets/icons/icon-password.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // const email = useRef(null);
  // const password = useRef(null);
  // const errorMessageRef = useRef(null);
  // const emptyMessageRef = useRef(null);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("handleSubmit clicked!");
  };

  return (
    <>
      <form className="mb-6 flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          label="Email address"
          type="email"
          icon={emailIcon}
          error="Not valid email"
          placeholder="e.g. alex@email.com"
          // ref={email}
        />
        <Input
          label="Password"
          type="password"
          icon={passIcon}
          error="Please check again"
          placeholder="Enter your password"
          // ref={password}
        />
        <button className="h-[46px] shrink-0 cursor-pointer rounded-lg bg-[#633CFF] font-semibold leading-[150%] text-[#fff] hover:bg-[#BEADFF] hover:shadow-lg hover:shadow-violet-500/50">
          Login
          {/* {loading ? <CircularProgress /> : "Login"} */}
        </button>
        <p
          className="hidden text-xs leading-[150%] text-[#FF3939]"
          // ref={errorMessageRef}
        >
          Email or password is incorrect
        </p>
      </form>
      <Link to="/account">
        <span className="flex justify-end text-[#633CFF] hover:underline">
          skip
        </span>
      </Link>
    </>
  );
};

export default LoginForm;
