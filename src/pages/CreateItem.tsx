import { useState } from "react";
import { useAppProvider } from "../providers/AppContext";
import { useAuthProvider } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { ItemsType } from "../types/AppTypes";

const title: string = "Ready Set Go!";
const subTitle: string = " Create a Store!";

const blankItem: ItemsType = {
  id: "",
  name: "",
  image: "",
  description: "",
  quantity: "",
  minQuantity: "",
  storeId: "",
};
//inprogress
export const CreateItem = () => {
  const navigate = useNavigate();
  const { handleCreateItem } = useAppProvider();
  const [item, setItem] = useState<ItemsType>(blankItem);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { item, storeId }: { item: ItemsType; storeId: string }
  ) => {
    e.preventDefault();
    await handleCreateItem(item, storeId).then(() => {
      setItem(item);
    });
    navigate("/home");
  };

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
              handleSubmit(e, { item, storeId })
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
        </div>
      </div>
    </>
  );
};
