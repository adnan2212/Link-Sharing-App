import { createContext, useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [displayProfile, setDisplayProfile] = useState({});
  const [openLoginMessage, setOpenLoginMessage] = useState(false);
  const [userLinks, setUserLinks] = useState([]);

  const value = {
    auth,
    setAuth,
    openLoginMessage,
    setOpenLoginMessage,
    userLinks,
    setUserLinks,
    displayProfile,
    setDisplayProfile,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContext;
