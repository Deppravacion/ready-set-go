import { useState } from "react";
import { useAuthProvider } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/guyprofile.jpg";
import { useAppProvider } from "../providers/AppContext";

export const SignIn = () => {
  const { handleLogin } = useAuthProvider();
  const { userTheme } = useAppProvider();
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const navigate = useNavigate();

  const handleAuthRoute = async () => {
    await handleLogin({
      email: emailInput,
      password: passwordInput,
    });

    navigate("/home");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
    handleAuthRoute();
  };
  return (
    <>
      <div data-theme={userTheme} className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Welcome Back to READY-SET-GO! Please login to your account.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleSubmit}>
              <div className='form-control'>
                <div className='avatar justify-center'>
                  <div className='w-36 mask mask-squircle'>
                    <img src={profileImage} />
                  </div>
                </div>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailInput(e.target.value)
                  }
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordInput(e.target.value);
                  }}
                  required
                />
              </div>
              <div className='form-control mt-6 flex gap-1'>
                <button type='submit' className='btn btn-info'>
                  Login
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => goToSignUp()}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
