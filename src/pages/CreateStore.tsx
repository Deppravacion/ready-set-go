import { useAuthProvider } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const title: string = "Ready Set Go!";
const subTitle: string = " Create a Store!";

export const CreateStore = () => {
  const { handleLogout } = useAuthProvider();
  const navigate = useNavigate();
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          <form className='card-body'>
            <div className='form-control'>
              {/* Daisy avatar */}

              {/* Daisy avatar */}
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Add Item</span>
              </label>
              <input
                type='text'
                placeholder='add first item'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Next</button>
            </div>
          </form>
        </div>
        <div className='flex justify-between'>
          <button
            className='btn btn-outline rounded-none btn-warning px-2'
            onClick={() => {
              handleLogout();
              navigate("/signin");
            }}
          >
            Logout
          </button>
          <button
            className='btn btn-outline rounded-none btn-success'
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          <button className='btn btn-outline rounded-none btn-secondary'>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
