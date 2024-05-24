// export type AppContextTypes = {
//   stores: StoresType[] | null;
//   setStores: (stores: StoresType[] | null) => void;
//   items: ItemsType[] | null;
//   setItems: (items: ItemsType[] | null) => void;
//   favorites: FavoritesType[] | null;
//   setFavorites: (favorites: FavoritesType[] | null) => void;
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
  // handleAddFavorite: (
  //   userId: string,
  //   itemId: string,
  //   storeId: string
  // ) => Promise<void>;
  // handleDeleteFavorite: (id: string) => Promise<void>;
  // handleDeleteItem: (id: string) => Promise<void>;
  // handleDeleteStore: (id: string) => Promise<void>;
};

export type StoresType = {
  id: string;
  name: string;
  userId: string;
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
  userId: string;
  itemId: string;
  storeId: string;
  id: string;
};
