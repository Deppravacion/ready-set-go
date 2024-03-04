import "./App.css";
import { HowItWorks } from "./pages/HowItWorks";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <>
      <SignUp />
      <SignIn />
      <HowItWorks />
    </>
  );
}

export default App;
