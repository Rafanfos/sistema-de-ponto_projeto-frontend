import { useContext, useEffect } from "react";
import { StudentsTable } from "../../components/ StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { UserContext } from "../../context/UserContext";
import { DashboardTrainerStyle } from "./style";

export const DashboardTrainer = () => {
  const { checkinVerification, checkoutVerification } = useContext(UserContext);

  useEffect(() => {
    const date = new Date();
    const time = date.getHours() * 60 + date.getMinutes();
    let difference = 0;
    const checkinTime = 9 * 60;
    const checkoutTime = 18 * 60;
    if (time >= checkinTime && time < checkoutTime) {
      difference = time - checkinTime;
      checkinVerification(difference);
    } else {
      difference = time - checkoutTime;
      checkoutVerification(difference);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardTrainerStyle>
      <AsideBar />
      <div className="containerMain">
        <header>
          <h1>Turma 13 - M3</h1>
          <div>
            <h2>Bem vindo Tsunode</h2>
            <p>
              <span>-</span> 31/10/2022
            </p>
          </div>
        </header>
        <CheckinBox />
        <div className="marginTable">
          <StudentsTable />
        </div>
      </div>
    </DashboardTrainerStyle>
  );
};
