export type AuthTypes = {
  user: UserType | null;

  setUser: (user: UserType | null) => void;
  userStores: StoresType[] | null;
  setUserStores: (stores: StoresType[] | null) => void;
  userItems: ItemsType[] | null;
  setUserItems: (items: ItemsType[] | null) => void;
  userFavorites: FavoritesType[] | null;
  setUserFavorites: (favorites: FavoritesType[] | null) => void;
  handleLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  handleSignUp: (
    name: string,
    email: string,
    password: string,
    confrimPassword: string
  ) => Promise<void>;

  handleLogout: () => void;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string | null;
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
  userId?: string;
  itemId?: string;
  storeId?: string;
  id?: string;
};
