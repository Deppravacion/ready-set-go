// import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  // const [auth, setAuth] = useState<string | null>(null);
  // console.log("token:", auth);
  // useEffect(() => {
  //   const key = sessionStorage.getItem("user") ?? null;
  //   setAuth(key);
  //   console.log("key:", key);
  //   console.log(sessionStorage.getItem("user"));
  // }, []);
  const auth = sessionStorage.getItem("user") ?? null;
  return auth ? <Outlet /> : <Navigate to='/signin' />;
};
