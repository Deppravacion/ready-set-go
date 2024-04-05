import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthProviderProps, AuthTypes } from "../types/AuthTypes";

export const AuthContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("he baugh!");
  };
  const handleSignUp = () => {
    console.log("he exists!");
  };
  const handleLogout = () => {
    console.log(" he goan!");
  };
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