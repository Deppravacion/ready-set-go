import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  // let auth = { token: sessionStorage.getItem("token") };
  // return auth.token ? <Outlet /> : <Navigate to='/home' />;
  //above used with token**************
  //below for ease of testing***********

  // let auth = true;
  let auth = { token: sessionStorage.getItem("name") };
  return auth ? <Outlet /> : <Navigate to='/signin' />;
};
