import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthProviderProps, AuthTypes, AppUser } from "../types/AuthTypes";
import { createUser, getUsersFromDB } from "../api/users/api-users";

export const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
    stores: {
      id: "",
      name: "",
      userId: "",
      itemId: "",
    },
    items: [
      {
        id: "",
        name: "",
        image: "",
        description: "",
        quantity: "",
        minQuantity: "",
        storeId: "",
      },
    ],
    favorites: [
      {
        userId: "",
        itemId: "",
        storeId: "",
        id: "",
      },
    ],
  });

  // const [user, setUser] = useState<string | null>(null);
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  //  note to self: todo list. 1. try/catch 2.user object in auth 3.navigation in auth functions

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await fetch("http://localhost:3004/users");
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    const user = data.find(
      (user: AppUser) => user.email === email && user.password === password
    );
    console.log(user);

    if (!user) {
      return false;
    } else {
      sessionStorage.setItem("user", JSON.stringify(user.name));
      return true;
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
      if (data.find((user: AppUser) => user.email === email)) {
        toast.error("User already exists");
        throw new Error("User already exists");
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        throw new Error("Passwords do not match");
      }

      const newUser = {
        email,
        name,
        password,
        id: data.length + 1,
      };

      await createUser(newUser);
      sessionStorage.setItem("user", JSON.stringify(newUser.name));
      setUser(newUser.name);
      toast.success("User created successfully");
    } catch (error: unknown) {
      console.error(error);
      toast.error("Error creating user");
    }
  };
  const handleLogout = () => {
    console.log("logging out");
    setUser(null);
    sessionStorage.removeItem("user");
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
      setUser(user);
    }
    console.log("user:", user);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
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
