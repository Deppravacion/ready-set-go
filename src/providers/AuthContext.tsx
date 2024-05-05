import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthProviderProps, AuthTypes, appUser } from "../types/AuthTypes";
import { getUsersFromDB } from "../api/users/get-users";

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
    // const user = await getUsersFromDB({ email, password });
    const response = await fetch("http://localhost:3004/users");
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    const user = data.find(
      (user: appUser) => user.email === email && user.password === password
    );
    if (!user) {
      return false;
    } else {
      sessionStorage.setItem("user", JSON.stringify(user.name));
      return true;
    }
  };

  const handleSignUp = () => {
    console.log("he exists!");
    toast.success("he exists!");
  };
  const handleLogout = () => {
    console.log(" he gahn!");
    toast.success(" he gahn!");
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, []);

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
