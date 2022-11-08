import { useContext } from "react";
import { BsBoxSeam, BsGear } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AsideStyle } from "./style";

export const AsideBar = () => {
  const { userAvatar, isTrainer } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AsideStyle>
      <figure>
        <img src={userAvatar} alt="Avatar do Usuário" />
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
