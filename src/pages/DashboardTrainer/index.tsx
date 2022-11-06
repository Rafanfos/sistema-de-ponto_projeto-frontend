/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { StudentsTable } from "../../components/ StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { UserContext } from "../../context/UserContext";
import { getTrainerInfo } from "../../services/api/trainer/requests";
import { DashboardTrainerStyle } from "./style";

export const DashboardTrainer = () => {
  const {
    checkinVerification,
    checkoutVerification,
    checkinSchedule,
    setCheckinSchedule,
    setUserInfo,
  } = useContext(UserContext);

  useEffect(() => {
    setCheckinSchedule({ start: "09:00", end: "21:00" });

    const studentInfo = async () => {
      const userId = Number(localStorage.getItem("@UserId"));
      const info = await getTrainerInfo(userId);
      setUserInfo(info);
    };
    studentInfo();
  }, []);

  useEffect(() => {
    const getDifference = () => {
      const date = new Date();
      const time = date.getHours() * 60 + date.getMinutes();
      let difference = 0;
      if (checkinSchedule) {
        const { start, end } = checkinSchedule;
        const checkinHour = +start.slice(0, 2);
        const checkoutHour = +end.slice(0, 2);
        console.log(time);
        const checkinTime = checkinHour * 60;
        const checkoutTime = checkoutHour * 60;
        if (time >= checkinTime && time < checkoutTime) {
          difference = time - checkinTime;
          checkinVerification(difference);
        } else {
          console.log(difference);
          difference = time - checkoutTime;
          checkoutVerification(difference);
        }
      }
    };
    getDifference();
  }, [checkinSchedule]);

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
