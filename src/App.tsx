import Navbar from "./components/Navbar";
import Index from "./pages/index";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";
  const isPreviewPage = location.pathname === "/preview";

  return (
    <>
      <div className="app">
        {!(isAuthPage || isPreviewPage) && <Navbar />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="">
        <Routes>
          <Route path="preview" element={<Preview />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
