import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

const App = () => {
  const location = useLocation();

  const isPreviewPage = location.pathname === "/preview";
  return (
    <>
      <div className="app">
        {!isPreviewPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          {/* <Route path="preview" element={<Preview />}></Route> */}
        </Routes>
        <Routes></Routes>
      </div>
      <div className="px-0 py-0">
        <Routes>
          <Route path="preview" element={<Preview />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
