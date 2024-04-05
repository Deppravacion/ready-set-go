export type AuthTypes = {
  user: string | null;
  setUser: (user: string | null) => void;
  // signIn: (user: string) => void;
  // signOut: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  // handleLogin: (email: string, password: string) => Promise<boolean>;
  handleSignUp: () => void;
  // handleSignUp: (email: string, password: string) => Promise<boolean>;
  handleLogout: () => void;
};

export type AuthProviderProps = {
  children: JSX.Element;
};