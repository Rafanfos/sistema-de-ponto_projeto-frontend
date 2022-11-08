
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { HeaderDashboardStyle } from "./style";

export const HeaderDashboard = () => {

  const { user } = useContext(AuthContext);


  return (
    <HeaderDashboardStyle>
     
      <div key={user.id}>
        <h1>
          Turma {user.class} - {user.course_module}
        </h1>
        <h2>Bem vindo {user.name}</h2>
        <p>31/10/2022</p>
      </div>
    </HeaderDashboardStyle>
  );
};
