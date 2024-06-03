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
  const { stores, userTheme } = useAppProvider();
  const navigate = useNavigate();

  useEffect(() => {
    getItemsByStoreId(store.id).then((storeItems: ItemsType[]) => {
      // console.log(storeItems);
      setItems(storeItems);
    });
  }, [stores]);

  return (
    <div className='card shadow-sm bg-neutral '>
      <div className='container mx-auto p-1 bg-base-300 rounded-none'>
        <h2 className='text-lg'>{store.name}</h2>
      </div>
      <div className='card-body bg-base-200'>
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
      <button
        className='btn rounded-none bg-info text-info-conent'
        onClick={() => navigate(`/details/${store.id}`)}
        // onClick={() => navigate(`/testroute/${store.id}`)}
      >
        {/* <button className='btn rounded-none' onClick={() => navigate("/details")}> */}
        expand
      </button>
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
  const { handleGetUserStores, userTheme } = useAppProvider();
  const { stores } = useAppProvider();
  const name = user?.name;
  const subTitle: string = `Welcome ${name} to your home page!`;
  const title: string = "Ready Set Go!";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // console.log(user.id);
      handleGetUserStores(user.id);
    }
  }, [user]);

  return (
    <>
      <div
        // data-theme={userTheme}
        className='card w-96 bg-base-100 shadow-xl m-auto'
      >
        <div className='container mx-auto p-10 bg-base-300 rounded-md mb-2'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body max-h-[500px] overflow-y-auto'>
          {stores ? (
            stores.map((store) => <StoreCard store={store} key={store.id} />)
          ) : (
            <StoreCard store={defaultStoreCardData.store} />
          )}
        </div>
        <div className='flex justify-between my-[10px]'>
          <button
            className='btn btn-outline rounded-none btn-error px-2'
            onClick={() => {
              handleLogout();
              navigate("/signin");
            }}
          >
            Logout
          </button>
          <button
            className='btn btn-outline rounded-none btn-primary'
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className='btn btn-outline rounded-none btn-secondary'
            onClick={() => navigate("/createstore")}
          >
            New
          </button>
        </div>
      </div>
    </>
  );
};
