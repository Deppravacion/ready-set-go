import { FavoritesType, ItemsType, StoresType } from "../types/AppTypes";
import { useAuthProvider } from "../providers/AuthContext";
import { useAppProvider } from "../providers/AppContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsByStoreId } from "../api/items/api-items";

type StoreCardProps = {
  store: StoresType;
};

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const [items, setItems] = useState<ItemsType[] | null>(null);

  useEffect(() => {
    getItemsByStoreId(store.id).then((storeItems: ItemsType[]) => {
      setItems(storeItems);
    });
  }, []);

  return (
    <div className='card shadow-sm bg-slate-200'>
      <div className='container mx-auto p-1 bg-slate-400 rounded-none'>
        <h2 className='text-lg'>{store.name}</h2>
      </div>
      <div className='card-body bg-slate-50'>
        {items &&
          items.map((item, i) => {
            return (
              <div key={i} className='text-center'>
                {item.name}
              </div>
            );
          })}
      </div>

      {/* <h2>hello world</h2> */}
      <button className='btn rounded-none'>expand</button>
    </div>
  );
};

const defaultStoreCardData = {
  store: {
    id: "nan",
    name: "Create a New Store",
    userId: "nan",
  },
};

export const Home = () => {
  const { handleLogout, user } = useAuthProvider();
  const { handleGetUserStores } = useAppProvider();
  console.log(user, "here lies the user in the HOME component");
  const { stores } = useAppProvider();
  console.log(stores);
  const name = user?.name;
  const subTitle: string = `Welcome ${name} to your home page!`;
  const title: string = "Ready Set Go!";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(user.id);
      handleGetUserStores(user.id);
    }
  }, [stores, user]);

  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl m-auto'>
        <div className='container mx-auto p-10 bg-accent rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {stores ? (
            stores.map((store) => <StoreCard store={store} key={store.id} />)
          ) : (
            <StoreCard store={defaultStoreCardData.store} />
          )}
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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className='btn btn-outline rounded-none btn-info'
            onClick={() => navigate("/createstore")}
          >
            New
          </button>
          <dialog id='my_modal_2' className='modal'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>Hello!</h3>
              <p className='py-4'>Press ESC key or click outside to close</p>
            </div>
            <form method='dialog' className='modal-backdrop'>
              <button className='btn'>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
};
