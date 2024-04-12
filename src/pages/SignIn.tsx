import { useState } from "react";
import { useAuthProvider } from "../providers/AuthContext";

export const SignIn = () => {
  const { handleLogin } = useAuthProvider();
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleLogin({ email: emailInput });
  };
  return (
    <>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Welcome Back to READY-SET-GO! Please login to your account.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body'>
              <div className='form-control'>
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
              <div className='form-control mt-6'>
                <button
                  className='btn btn-primary'
                  onChange={() => handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
