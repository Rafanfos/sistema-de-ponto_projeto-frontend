import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { LoadingPage } from "../../pages/LoadingPage";


export const ProtectedRoutes = () => {
  const token = localStorage.getItem('@token:SistemaDePontos');
  const userId = localStorage.getItem('@userId:SistemaDePontos');

  const {loading} = useAuthContext()

  if (loading) {
    return <LoadingPage/>;
  }
  if (token && userId) {
    return <Outlet/>
  } else {
    toast.error('Sessão Expirada, faça o login novamente', {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <Navigate to={'/'}/>
  }
}