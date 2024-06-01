import { useNavigate, useParams } from "react-router-dom";
import { useAuthProvider } from "../providers/AuthContext";
import { useAppProvider } from "../providers/AppContext";
import { ItemsType } from "../types/AppTypes";
import { useEffect, useState } from "react";
import { getItemsByStoreId } from "../api/items/api-items";

// const title: string = "Ready Set Go!";
const subTitle: string = "Store details!";

type CardProps = { item: ItemsType };
// const defaultStoreItems = [
//   {
//     id: 1,
//     name: "item 1",
//     userId: 1,
//     itemId: 1,
//     quantity: 10,
//     minQuantity: 5,
//     storeId: "1",
//     image:
//       "https://images.unsplash.com/photo-1598851418241-f52c34b6e4c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description: "this is a description",
//   },
// ];

const CollapseItem: React.FC<CardProps> = ({
  item: { id, name, image, description, quantity, minQuantity, storeId },
}) => {
  return (
    <>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='checkbox' className='peer' />
        <div className='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
          name: {name}
        </div>
        <div className='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
          <div className='avatar'>
            <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={image} />
            </div>
            {/* <div>image link:{image}</div> */}
          </div>
          <p>{description}</p>
          {/* <p>id: {id}</p> */}
          <p>quantity: {quantity}</p>
          <p>minimum quantity: {minQuantity} </p>
          <ItemsInterface />
        </div>
      </div>
    </>
  );
};

const ItemsInterface = () => {
  return (
    <>
      <div className='flex  gap-1 flex-col justify-center text-2xl mb-1'>
        <button className='btn  btn-warning btn-sm min-w-16 text-2xl items-center'>
          -
        </button>
        <button className='btn btn-info flex btn-sm min-w-16 text-2xl items-center'>
          +
        </button>
      </div>
      <div className='flex justify-around'>
        <button className='btn btn-error btn-sm min-w-16'>Delete </button>
        <button className='btn btn-success btn-sm min-w-16'>Fav</button>
      </div>
    </>
  );
};

export const Details = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuthProvider();
  const { stores } = useAppProvider();
  const { storeId } = useParams();
  const [storeItems, setStoreItems] = useState<ItemsType[]>();
  const storeName = stores?.find((store) => store.id === storeId)?.name;

  const fetchItems = async () => {
    const items = await getItemsByStoreId(storeId ?? "");
    setStoreItems(items);
  };

  useEffect(() => {
    fetchItems();
    console.log("store items:", storeItems);
    console.log("store name:", storeName);
  }, [stores]);

  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl m-auto'>
        <div className='container mx-auto p-10 bg-accent rounded-md'>
          <h2 className='text-lg'>{storeName}</h2>
          <h2 className='text-md'>{`${subTitle} for the store: ${storeId}`}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          {storeItems &&
            storeItems.map((item, i) => {
              return <CollapseItem key={i} item={item} />;
            })}
          {/* ******** */}
        </div>

        <div className='flex justify-between my-[10px]'>
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
            // onClick={() => navigate("/createstore")}
            // this should navigate to the create ITEM page
          >
            New
          </button>
        </div>
      </div>
    </>
  );
};
