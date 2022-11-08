import { useContext } from "react";
import { BsBoxSeam, BsGear } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AsideStyle } from "./style";

export const AsideBar = () => {
  const { userAvatar } = useContext(UserContext);

  return (
    <AsideStyle>
      <figure>
        <img src={userAvatar} alt="Avatar do Usuário" />
      </figure>

      <nav>
        <Link to="/dashboard_instrutor">
          <MdSignalCellularAlt />
        </Link>

        <Link to="/registro_pontos">
          <BsBoxSeam />
        </Link>

        <Link to="/configuracoes_conta">
          <BsGear />
        </Link>
      </nav>
    </AsideStyle>
  );
};
