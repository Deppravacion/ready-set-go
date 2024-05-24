import { useContext, useState, createContext, useEffect } from "react";
import {
  AppContextTypes,
  // FavoritesType,
  // ItemsType,
  StoresType,
} from "../types/AppTypes";
import { toast } from "react-toastify";
import { createStore, getStoresByUserId } from "../api/stores/api-stores";

export const AppContext = createContext({} as AppContextTypes);
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [stores, setStores] = useState<StoresType[] | null>(null);
  // const [items, setItems] = useState<ItemsType[] | null>(null);
  // const [favorites, setFavorites] = useState<FavoritesType[] | null>(null);

  const handleAddStore = async (name: string, userId: string) => {
    // can add checks to see if the store name already exists.
    const newStore = {
      id: Math.random().toString(),
      name,
      userId,
    };
    try {
      createStore(newStore);
    } catch (error) {
      console.error(error);
      toast.error("Error creating store");
    }
  };

  const handleAddItem = async () => {};

  const handleGetUserStores = async (userId: string) => {
    try {
      // const response = await fetch(
      //   `http://localhost:3004/stores?userId=${userId}`
      // );
      // if (!response.ok) {
      //   throw new Error("Error fetching stores");
      // }
      // const data = await response.json();
      // const userStores = data.filter(
      //   (store: StoresType) => store.userId === userId
      // );
      // setStores(userStores);
      getStoresByUserId(userId);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching stores");
    }
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        // stores,
        // setStores,
        handleAddStore,
        handleGetUserStores,
        handleAddItem,
        // items,
        // setItems,
        // favorites,
        // setFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppProvider = () => useContext(AppContext);
