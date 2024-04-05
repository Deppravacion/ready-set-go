import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Details } from "./pages/Details";
import { CreateStore } from "./pages/CreateStore";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { SignUp } from "./pages/SignUp";
// import SignIn  from "./pages/SignIn";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateRoutes />}>
            <Route path='/users' element={<JeepDashboard />} />
            <Route path='/events' element={<JeepDashboard />} />
            <Route path='/features' element={<JeepDashboard />} />
          </Route> */}
          <Route path='/home' element={<Home />} />
          <Route index path='/' element={<Navigate to={"/home"} />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
