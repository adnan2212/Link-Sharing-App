// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Preview from "./pages/Preview";
// import Layout from "./components/Layout";
// import Navbar from "./components/Navbar";
// import RequireAuth from "./components/RequireAuth";
// import UserProfile from "./components/preview/UserProfile";
// import "./App.css";

// const App = () => {
//   const location = useLocation();
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";
//   const isPreviewPage = location.pathname === "/preview";

//   return (
//     <>
//       {!(isAuthPage || isPreviewPage) && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route element={<RequireAuth />}>
//             <Route path="account" element={<Home />} />
//             <Route path="preview" element={<Preview />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>
//         </Route>
//         <Route path="/profile/:profileLink" element={<UserProfile />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import UserProfile from "./components/preview/UserProfile";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const isPreviewPage = location.pathname === "/preview";
  const isProfilePage = location.pathname.startsWith("/profile/");

  return (
    <>
      {!(isAuthPage || isPreviewPage || isProfilePage) && <Navbar />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="account" element={<Home />} />
            <Route path="preview" element={<Preview />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/profile/:profileLink" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
