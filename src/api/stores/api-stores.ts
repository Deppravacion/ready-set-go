import { toast } from "react-toastify";
import { StoresType } from "../../types/AppTypes";

export const getStoresFromDB = async () => {
  return await fetch(`http://localhost:3004/stores`).then((response) =>
    response.json()
  );
};

export const getStoresByUserId = async (userId: string) => {
  const stores = await getStoresFromDB();
  const userStores = stores.filter(
    (store: StoresType) => store.userId === userId
  );

  if (!userStores) {
    return false;
  }
  return userStores;
};

export const createStore = async (store: StoresType) => {
  const response = await fetch("http://localhost:3004/stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(store),
  });
  if (!response.ok) {
    toast.error("Error creating store");
    return false;
  }
  return true;
};

export const deleteStore = async (id: string) => {
  const response = await fetch(`http://localhost:3004/stores/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    toast.error("Error deleting store");
    return false;
  }
  return true;
};
