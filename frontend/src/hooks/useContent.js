import { useContext } from "react";
import StateContext from "../context/ContextProvider";

const useContent = () => {
  return useContext(StateContext);
};

export default useContent;
