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
import { deleteItem } from "../api/items/api-items";

export const AppContext = createContext({} as AppContextTypes);
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [stores, setStores] = useState<StoresType[] | null>();
  const [userTheme, setUserTheme] = useState("business");
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

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteItem(id);
    } catch (error) {
      console.error(error);
      toast.error("Error deleting item");
    }
  };

  const handleGetUserStores = async (userId: string) => {
    try {
      await getStoresByUserId(userId).then((userStores) => {
        setStores(userStores);
      });
    } catch (error) {
      console.error(error);
      toast.error("Error fetching stores");
    }
  };

  useEffect(() => {
    if (user) {
      handleGetUserStores(user.id);
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        stores,
        setStores,
        handleAddStore,
        handleGetUserStores,
        handleAddItem,
        handleDeleteItem,
        userTheme,
        setUserTheme,
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
