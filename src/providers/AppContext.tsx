import { useContext, useState, createContext } from "react";
import {
  AppContextTypes,
  FavoritesType,
  ItemsType,
  StoresType,
} from "../types/StoreTypes";

export const AppContext = createContext({} as AppContextTypes);
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [stores, setStores] = useState<StoresType[] | null>(null);
  const [items, setItems] = useState<ItemsType[] | null>(null);
  const [favorites, setFavorites] = useState<FavoritesType[] | null>(null);

  return (
    <AppContext.Provider
      value={{
        stores,
        setStores,
        items,
        setItems,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppProvider = () => useContext(AppContext);
