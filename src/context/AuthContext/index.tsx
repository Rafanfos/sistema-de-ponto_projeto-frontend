import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api/api";

export const AuthContext = createContext<IAuthProviderExports>(
  {} as IAuthProviderExports
);

interface IAuthProviderExports {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login_onSubmit: (data: IUser) => void;
  newAvatar: string | undefined;
  setNewAvatar: Dispatch<SetStateAction<string | undefined>>;
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  passwordConfirm?: string;
  avatar?: string;
  is_trainer?: boolean;
  course_module?: string;
  class?: string;
  userId: number;
  id: string | number;
}
interface ILoginPost {
  user: IUser;
  accessToken: string;
}

export const AuthProviders = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [newAvatar, setNewAvatar] = useState<string | undefined>("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@token:SistemaDePontos");
      const userId = localStorage.getItem("@userId:SistemaDePontos");
      if (token && userId) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get<IUser[]>(`users?id=${userId}`);
          setUser(data[0]);
          setNewAvatar(data[0].avatar);
          if (data[0].is_trainer) {
            navigate("/dashboard_instrutor");
          } else {
            navigate("/dashboard_aluno");
          }
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login_onSubmit = async (data: IUser) => {
    try {
      setLoading(true);
      const response = await api.post<ILoginPost>("login", data);
      setLoading(false);
      localStorage.setItem("@token:SistemaDePontos", response.data.accessToken);
      localStorage.setItem(
        "@userId:SistemaDePontos",
        JSON.stringify(response.data.user.id)
      );

      api.defaults.headers.authorization = `Bearer ${response.data.accessToken}`;
      setUser(response.data.user);
      setNewAvatar(response.data.user.avatar);
      toast.success("Login confirmado", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (response.data.user.is_trainer) {
        navigate("dashboard_instrutor");
      } else {
        navigate("dashboard_aluno");
      }
    } catch (error) {
      toast.error("Erro de login: Informações incorretas", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login_onSubmit,
        newAvatar,
        setNewAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
