import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { getStudentInfo } from "../../services/api/students/requests";
import { HeaderDashboardStyle } from "./style";

export const HeaderDashboard = () => {
  const { user, setUser } = useAuthContext();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getDate = () => {
      const date = new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      setCurrentDate(date);
    };
    const upgradeUserInfo = async () => {
      const userInfo = await getStudentInfo(+user.id);
      setUser(userInfo[0]);
    };
    getDate();
    upgradeUserInfo();
  });

  return (
    <HeaderDashboardStyle>
      {user && (
        <div key={user.id}>
          <h1>
            Turma {user.class} - {user.course_module}
          </h1>

          <h2>Bem vindo {user.name}</h2>
          <p>{currentDate}</p>
        </div>
      )}
    </HeaderDashboardStyle>
  );
};
