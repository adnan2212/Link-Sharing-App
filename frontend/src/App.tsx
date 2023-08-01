import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const isPreviewPage = location.pathname === "/preview";

  return (
    <>
      {!(isAuthPage || isPreviewPage) && <Navbar />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="account" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="preview" element={<Preview />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
