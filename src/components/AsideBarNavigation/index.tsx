import { BsBoxSeam, BsGear } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useCheckinContext } from "../../context/CheckinContext";
import { AsideStyle } from "./style";
import { useAuthContext } from "../../context/AuthContext";
import defaultUser from "../../assets/defaultUser.svg";

export const AsideBar = () => {
  const { isTrainer } = useCheckinContext();
  const { newAvatar } = useAuthContext();
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AsideStyle>
      <figure>
        <img
          src={newAvatar ? newAvatar : defaultUser}
          alt="Avatar do Usuário"
        />
      </figure>

      <nav>
        <div>
          {isTrainer ? (
            <Link to="/dashboard_instrutor">
              <MdSignalCellularAlt />
            </Link>
          ) : (
            <Link to="/dashboard_aluno">
              <MdSignalCellularAlt />
            </Link>
          )}

          {isTrainer && (
            <Link to="/registro_pontos">
              <BsBoxSeam />
            </Link>
          )}

          <Link to="/configuracoes_conta">
            <BsGear />
          </Link>
        </div>

        <button onClick={() => logoutUser()}>
          <IoExitOutline />
        </button>
      </nav>
    </AsideStyle>
  );
};
