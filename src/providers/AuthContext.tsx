import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthProviderProps, AuthTypes, appUser } from "../types/AuthTypes";

import { createUser, getUsersFromDB } from "../api/users/api-users";
export const AuthContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
      (user: appUser) => user.email === email && user.password === password
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
    const data = await getUsersFromDB();

    const isExistingUser = data.find((user: appUser) => user.email === email);
    if (isExistingUser) {
      toast.error("User already exists");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
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

    return true;
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
