export type AppContextTypes = {
  stores: StoresType[] | null | undefined;
  setStores: (stores: StoresType[] | null) => void;

  // ** add these methods next **
  handleAddStore: (name: string, userId: string) => Promise<void>;
  handleGetUserStores: (userId: string) => Promise<void>;

  handleAddItem: (
    id: string,
    name: string,
    image: string,
    description: string,
    quantity: string,
    minQuantity: string,
    storeId: string
  ) => Promise<void>;
  userTheme: string;
  setUserTheme: (theme: string) => void;
  handleDeleteItem: (id: string) => Promise<void>;
  // handleDeleteStore: (id: string) => Promise<void>;
};

export type StoresType = {
  id: string;
  name: string;
  userId: string;
  items?: ItemsType[];
  favorites?: FavoritesType[];
};

export type ItemsType = {
  id: string;
  name: string;
  image: string;
  description: string;
  quantity: string;
  minQuantity: string;
  storeId: string;
};

export type FavoritesType = {
  itemId: string;
  id: string;
};
