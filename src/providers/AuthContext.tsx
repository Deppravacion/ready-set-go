import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserType, AuthTypes } from "../types/AuthTypes";
import { createUser, getUsersFromDB } from "../api/users/api-users";

export const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      sessionStorage.setItem("authtoken", "true");
    }
    console.log("user from AUTHContenxt:", user);
  }, []);

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
      console.log(user, " Auth found a user");

      if (!user) {
        throw new Error("User not found");
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
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
        id: string;
        password: string;
      };

      const newUser: NewUserType = {
        email,
        name,
        id: (data.length + 1).toString(),
        password,
      };

      try {
        await createUser(newUser);
        setUser({
          email: newUser.email,
          name: newUser.name,
          id: newUser.id,
        });
        sessionStorage.setItem("user", JSON.stringify(newUser));
        sessionStorage.setItem("authtoken", "true");
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

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
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
