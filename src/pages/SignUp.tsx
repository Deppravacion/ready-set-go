import { useAuthProvider } from "../providers/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import profileImage from "../assets/girlprofile.jpg";

export const SignUp = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");
  const { handleSignUp } = useAuthProvider();
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign Up Now!</h1>
          <p className='py-6'>
            Welcome to READY-SET-GO! Please sign-up to create your account.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              {/* Daisy avatar */}
              <div className='avatar justify-center'>
                <div className='w-36 mask mask-squircle'>
                  <img src={profileImage} />
                </div>
              </div>
              {/* Daisy avatar */}
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
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
                required
              />
            </div>
            <div className='form-control mt-6 flex gap-1'>
              <button
                type='submit'
                className='btn btn-info'
                onClick={() => handleSignUp()}
              >
                Sign Up
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={() => goToSignIn()}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
