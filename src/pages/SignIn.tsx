import { makeObservable, action, makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class UserStore {
  id = Math.random();
  name = "testing";
  password = "";

  constructor() {
    makeAutoObservable(this);
  }
  // setName(name: string) {
  //   this.name = name;
  // }
}

const userStore = new UserStore();

const SignIn = () => {
  return (
    <>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Welcome Back to READY-SET-GO! Please login to your account.
            </p>
            <h1>{userStore.name}</h1>
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
                    (userStore.name = e.target.value)
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
                  required
                />
                {/* <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className='form-control mt-6'>
                <button
                  className='btn btn-primary'
                  onClick={() => console.log("clicked")}
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

export default observer(SignIn);
