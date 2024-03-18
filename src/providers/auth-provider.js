import { createContext, useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
import { getMe } from "@/services/user";

const AuthContext = createContext(null);

const useAuth = () => {
  const [header, setHeader] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  const getPermission = async () => {
    const { userData, error } = await getMe();
    if (error) {
      push("/");
      return;
    }
    setUser(userData);
    setLoading(false);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return { user, loading, header, setHeader };
};

const AuthProvider = ({ children }) => {
  const auth = useAuth();
  const loading = auth.loading;
  return (
    <AuthContext.Provider value={auth}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
