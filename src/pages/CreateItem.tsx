import { useState } from "react";
import { useAppProvider } from "../providers/AppContext";
import { useAuthProvider } from "../providers/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { ItemsType } from "../types/AppTypes";

const title: string = "Ready Set Go!";
const subTitle: string = " Create a New Item!";

const blankItem: ItemsType = {
  id: Math.random().toString(),
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
  const { handleCreateItem, userTheme } = useAppProvider();
  const { handleLogout } = useAuthProvider();
  const [item, setItem] = useState<ItemsType>(blankItem);
  const { storeId } = useParams();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { item, storeId }: { item: ItemsType; storeId: string }
  ) => {
    e.preventDefault();
    await handleCreateItem(item, storeId).then(() => {
      setItem({ ...item });
    });
    navigate("/home");
  };

  return (
    <>
      <div
        data-theme={userTheme}
        className='card w-96 bg-base-100 shadow-xl m-auto'
      >
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          <form
            className='card-body'
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              handleSubmit(e, { item, storeId: storeId ?? "" })
            }
          >
            <div className='form-control'>
              {/* Daisy avatar */}

              {/* Daisy avatar */}
              <label className='label '>
                <input
                  type='text'
                  placeholder='name'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem({ ...item, name: e.target.value })
                  }
                  required
                />
              </label>
              <label className='label '>
                <input
                  type='text'
                  placeholder='image'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem({ ...item, image: e.target.value })
                  }
                  required
                />
              </label>
              <label className='label '>
                <input
                  type='text'
                  placeholder='description'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem({ ...item, description: e.target.value })
                  }
                  required
                />
              </label>
              <label className='label '>
                <input
                  type='text'
                  placeholder='quantity'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem({ ...item, quantity: e.target.value })
                  }
                  required
                />
              </label>
              <label className='label '>
                <input
                  type='text'
                  placeholder='minQuantity'
                  className='input input-bordered max-w-full'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem({ ...item, minQuantity: e.target.value })
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
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};