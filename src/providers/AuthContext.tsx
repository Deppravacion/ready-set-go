import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import {
  UserType,
  AuthTypes,
  StoresType,
  ItemsType,
  FavoritesType,
} from "../types/AuthTypes";
import { createUser, getUsersFromDB } from "../api/users/api-users";

export const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userStores, setUserStores] = useState<StoresType[] | null>(null);
  const [userItems, setUserItems] = useState<ItemsType[] | null>(null);
  const [userFavorites, setUserFavorites] = useState<FavoritesType[] | null>(
    null
  );

  //  note to self: set session storage for user object

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch("http://localhost:3004/users");
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      const data = await response.json();
      const user = data.find(
        (user: UserType) => user.email === email && user.password === password
      );
      console.log(user);

      if (!user) {
        throw new Error("User not found");
      } else {
        sessionStorage.setItem("authtoken", true.toString());
        return;
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Error logging in");
    }
  };

  const handleSignUp = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const data = await getUsersFromDB();
      if (data.find((user: UserType) => user.email === email)) {
        toast.error("User already exists");
        throw new Error("User already exists");
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        throw new Error("Passwords do not match");
      }

      type NewUserType = {
        email: string;
        name: string;
        password: string;
        id: string;
      };

      const newUser: NewUserType = {
        email,
        name,
        password,
        id: (data.length + 1).toString(),
      };

      try {
        await createUser(newUser);
        setUser({
          email: newUser.email,
          name: newUser.name,
          id: newUser.id,
          password: newUser.password,
          // token: "token",
        });
        sessionStorage.setItem("user", JSON.stringify(newUser));
        sessionStorage.setItem("authtoken", true.toString());
        toast.success("User created successfully");
      } catch (error: unknown) {
        console.error(error);
        toast.error("Error creating user");
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Error signing up");
    }
  };

  const handleLogout = () => {
    console.log("logging out");
    setUser(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("authtoken");
    if (!user) {
      toast.success("Logged out!");
      return true;
    } else {
      console.log(user);
    }
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      sessionStorage.setItem("authtoken", true.toString());
    }
    console.log("user:", user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userStores,
        setUserStores,
        userItems,
        setUserItems,
        userFavorites,
        setUserFavorites,
        handleLogin,
        handleSignUp,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthProvider = () => useContext(AuthContext);
