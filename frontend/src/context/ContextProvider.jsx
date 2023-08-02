import { createContext, useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userLinks, setUserLinks] = useState([]);
  const [displayProfile, setDisplayProfile] = useState({});
  const [openLoginMessage, setOpenLoginMessage] = useState(false);
  const [openSaveChangesMessage, setOpenSaveChangesMessage] = useState(false);
  const [openCopiedToClipboardMessage, setOpenCopiedToClipboardMessage] =
    useState(false);

  const value = {
    auth,
    setAuth,
    userLinks,
    setUserLinks,
    displayProfile,
    setDisplayProfile,
    openLoginMessage,
    setOpenLoginMessage,
    openSaveChangesMessage,
    setOpenSaveChangesMessage,
    openCopiedToClipboardMessage,
    setOpenCopiedToClipboardMessage,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContext;
