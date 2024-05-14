export type AuthTypes = {
  user: string | null;

  setUser: (user: string | null) => void;
  // signIn: (user: string) => void;
  // signOut: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  // handleLogin: () => void;
  handleLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<boolean>;
  handleSignUp: (
    name: string,
    email: string,
    password: string,
    confrimPassword: string
  ) => Promise<void>;

  handleLogout: () => void;
};

export type AuthProviderProps = {
  children: JSX.Element;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  stores: StoresType[];
  items: ItemType[];
  favorites: FavoriteType[];
};

export type StoresType = {
  id: string;
  name: string;
  userId: string;
  itemId: string;
};

export type ItemType = {
  id: string;
  name: string;
  image: string;
  description: string;
  quantity: string;
  minQuantity: string;
  storeId: string;
};

export type FavoriteType = {
  userId: string;
  itemId: string;
  storeId: string;
  id: string;
};

export type AppUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};
