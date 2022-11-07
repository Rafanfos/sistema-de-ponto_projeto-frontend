import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { HeaderDashboardStyle } from "./style";

// interface iUserInfo {
//   class: string;
//   course_module: string;
//   email: string;
//   id: number;
//   isTrainer: boolean;
//   name: string;
//   password: string;
//   userId: number;
// }

export const HeaderDashboard = () => {
  // const [userInfo, setUserInfo] = useState<iUserInfo[] | null>(null);
  const { userInfo } = useContext(UserContext);
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

    getDate();
  });

  return (
    <HeaderDashboardStyle>
      {userInfo &&
        userInfo.map((user) => (
          <div key={user.id}>
            <h1>
              Turma {user.class} - {user.course_module}
            </h1>

            <h2>Bem vindo {user.name}</h2>
            <p>{currentDate}</p>
          </div>
        ))}
    </HeaderDashboardStyle>
  );
};
