//after completing the logout functionality, the routing does not work as expected. the page remains on home while the session storge is cleared.

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { AuthProvider } from "./providers/AuthContext";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { CreateStore } from "./pages/CreateStore";
import { Details } from "./pages/Details";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/createstore' element={<CreateStore />} />
            <Route path='/details' element={<Details />} />
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route index path='/' element={<Navigate to={"/signin"} />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
