/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { StudentsTable } from "../../components/StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { UserContext } from "../../context/UserContext";
import { DashboardTrainerStyle } from "./style";
import { useAuthContext } from "../../context/AuthContext";

export const DashboardTrainer = () => {
  const {
    checkinVerification,
    checkoutVerification,
    checkinSchedule,
    setCheckinSchedule,
  } = useContext(UserContext);

  const {isTrainer} = useAuthContext()

  useEffect(() => {
    setCheckinSchedule({ start: "09:00", end: "21:00" });
    isTrainer()
  }, []);

  useEffect(() => {
    const getDifference = () => {
      const date = new Date();
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
        <HeaderDashboard />
        <CheckinBox />
        <div className="marginTable">
          <StudentsTable />
        </div>
      </div>
    </DashboardTrainerStyle>
  );
};
