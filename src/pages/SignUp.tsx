import { useAuthProvider } from "../providers/AuthContext";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/girlprofile.jpg";
import { useAppProvider } from "../providers/AppContext";
import { ThemeToggler } from "../theme/ThemeToggler";
import { HowItWorks } from "./HowItWorks";

export const SignUp = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");
  const { handleSignUp } = useAuthProvider();
  const { userTheme } = useAppProvider();
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
    await handleSignUp(
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput
    );
    navigate("/home");
  };

  return (
    <div data-theme={userTheme} className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign Up Now!</h1>
          <p className='py-6'>
            Welcome to READY-SET-GO! Please sign-up to create your account.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-control'>
              {/* Daisy avatar */}
              <div className='avatar justify-center'>
                <div className='w-36 mask mask-squircle'>
                  <img src={profileImage} />
                </div>
              </div>
              {/* Daisy avatar */}
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                className='input input-bordered'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNameInput(e.target.value)
                }
                required
              />
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPasswordInput(e.target.value)
                }
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='password'
                placeholder='confirm password'
                className='input input-bordered'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setConfirmPasswordInput(e.target.value)
                }
                required
              />
            </div>
            <div className='form-control mt-6 flex gap-1'>
              <button type='submit' className='btn btn-info'>
                Sign Up
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => goToSignIn()}
              >
                Sign In
              </button>
            </div>
            <button
              className='btn my-2'
              onClick={() =>
                (
                  document.getElementById("my_modal_1") as HTMLDialogElement
                )?.showModal()
              }
            >
              how it works
            </button>
            <dialog id='my_modal_1' className='modal'>
              <div className='modal-box'>
                <h3 className='font-bold text-lg'>Hello!</h3>
                <p className='py-4'>
                  <HowItWorks />
                </p>
                <div className='modal-action'>
                  <form method='dialog'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn'>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <ThemeToggler />
          </form>
        </div>
      </div>
    </div>
  );
};
