import API from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  firstName: string;
  lastName?: string;
  email?: string;
  telegramId?: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  coin: number;
} | null;

const AuthContext = createContext<User>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    API.get('/user/me').then((res) => {
      setUser(res.data);
    }).catch(_err => { });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };