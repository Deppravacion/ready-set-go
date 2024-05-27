import { useContext, createContext, useState, useEffect } from "react";
import {
  AppContextTypes,
  StoresType,
  // FavoritesType,
  // ItemsType,
  // StoresType,
} from "../types/AppTypes";
import { toast } from "react-toastify";
import { createStore, getStoresByUserId } from "../api/stores/api-stores";
import { useAuthProvider } from "./AuthContext";

export const AppContext = createContext({} as AppContextTypes);
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [stores, setStores] = useState<StoresType[] | null>();
  const { user } = useAuthProvider();
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

  const handleGetUserStores = async (userId?: string) => {
    try {
      await getStoresByUserId(userId).then((userStores) => {
        console.log(userStores);
        setStores(userStores);
      });
    } catch (error) {
      console.error(error);
      toast.error("Error fetching stores");
    }
  };

  useEffect(() => {
    handleGetUserStores(user?.id);
    console.log(stores);
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        stores,
        setStores,
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
