import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoutes = () => {
  const auth = sessionStorage.getItem("authtoken") ?? null;
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state={{ from: location }} />
  );
};
