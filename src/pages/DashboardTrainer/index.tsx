/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { StudentsTable } from "../../components/ StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api/api";
import { getTrainerInfo } from "../../services/api/trainer/requests";
import { DashboardTrainerStyle } from "./style";

export const DashboardTrainer = () => {
  const {
    checkinVerification,
    checkoutVerification,
    checkinSchedule,
    setCheckinSchedule,
    setUserInfo,
    setIsTrainer,
  } = useContext(UserContext);

  useEffect(() => {
    setCheckinSchedule({ start: "09:00", end: "18:00" });

    const trainerInfo = async () => {
      const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));
      const token = localStorage.getItem("@token:SistemaDePontos");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const info = await getTrainerInfo(userId);
      setUserInfo(info);
    };
    trainerInfo();
  }, []);

  useEffect(() => {
    setIsTrainer(true);

    const getDifference = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const time = date.getHours() * 60 + date.getMinutes();
      let difference = 0;
      if (checkinSchedule.start && checkinSchedule.end) {
        const { start, end } = checkinSchedule;
        const checkinHour = +start.slice(0, 2);
        const checkoutHour = +end.slice(0, 2);
        const checkinTime = checkinHour * 60;
        const checkoutTime = checkoutHour * 60;
        if (time >= checkinTime && time < checkoutTime) {
          difference = time - checkinTime;
          checkinVerification(difference);
        } else {
          difference = time - checkoutTime;
          checkoutVerification(day, month, year);
        }
      }
    };
    getDifference();
  }, [checkinSchedule]);

  return (
    <DashboardTrainerStyle>
      <AsideBar />
      <div className="containerMain">
        <HeaderDashboard />
        <CheckinBox />
        <div className="marginTable">
          <StudentsTable />
        </div>
      </div>
    </DashboardTrainerStyle>
  );
};
