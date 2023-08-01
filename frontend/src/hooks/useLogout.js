import axios from "../api/axios";
import useContent from "./useContent";

const useLogout = () => {
  const { setAuth } = useContent();
  const logout = async () => {
    setAuth({});
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
