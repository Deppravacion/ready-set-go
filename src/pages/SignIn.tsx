import PortfolioPic from "../assets/girlprofile.jpg";

export const SignIn = () => {
  return (
    <>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            {/* Daisy avatar */}
            <div className="avatar justify-center">
              <div className="w-36 mask mask-squircle">
                <img src={PortfolioPic} />
                {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
              </div>
            </div>
            {/* Daisy avatar */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};
