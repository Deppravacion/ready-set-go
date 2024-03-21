import "./App.css";
import { CreateStore } from "./pages/CreateStore";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
        <SignUp />
        <SignIn />
        <HowItWorks />
        <Home />
        <CreateStore />
      </div>
    </>
  );
}

export default App;
