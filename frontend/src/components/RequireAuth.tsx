import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import useContent from "../hooks/useContent";

const RequireAuth = () => {
  const { auth } = useContent();

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;

  // return decoded ? <Outlet /> : <Navigate to="/login" />;
  return auth?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
