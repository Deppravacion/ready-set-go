import { useState } from "react";
import { useAppProvider } from "../providers/AppContext";
import { useAuthProvider } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const title: string = "Ready Set Go!";
const subTitle: string = " Create a Store!";

export const CreateStore = () => {
  const { handleLogout } = useAuthProvider();
  const navigate = useNavigate();
  const { handleAddStore } = useAppProvider();

  const [name, setName] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { name, userId }: { name: string; userId: string }
  ) => {
    e.preventDefault();
    await handleAddStore(name, userId).then(() => {
      setName(name);
      console.log("submitted");
    });
    navigate("/home");
  };

  const user = sessionStorage.getItem("user");
  const userId = user ? JSON.parse(user).id : "";

  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl m-auto'>
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          <form
            className='card-body'
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              handleSubmit(e, { name: name, userId: userId })
            }
          >
            <div className='form-control'>
              {/* Daisy avatar */}

              {/* Daisy avatar */}
              <label className='label '>
                {/* <span className='label-text'>Name</span> */}
                <input
                  type='text'
                  placeholder='name'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  required
                />
              </label>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Next</button>
              </div>
            </div>
          </form>
        </div>
        <div className='flex justify-around'>
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
          {/* <button className='btn btn-outline rounded-none btn-secondary'>
            Save
          </button> */}
        </div>
      </div>
    </>
  );
};
