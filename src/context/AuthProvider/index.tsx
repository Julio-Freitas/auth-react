import { IAuthProvider, IContext, IUser } from "./types";
import { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoadging] = useState(false);

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) setUser(user);
  }, []);

  async function authenticate(email: string, password: string) {
    try {
      setLoadging(true);
      const { token } = await loginRequest({ email, password });
      const payload = { token, email };
      setUser(payload);
      setUserLocalStorage(payload);
    } catch (error) {
    } finally {
      setLoadging(false);
    }
  }

  async function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
