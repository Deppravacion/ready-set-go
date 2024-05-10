import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const auth = sessionStorage.getItem("user") ?? null;
  return auth ? <Outlet /> : <Navigate to='/signin' />;
};
