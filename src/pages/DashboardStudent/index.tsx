/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { StudentAttendance } from "../../components/StudentAttendance";
import { UserTable } from "../../components/UserTable";
import { UserContext } from "../../context/UserContext";
import { DashboardStudentStyle } from "./style";

export const DashboardStudent = () => {
  const {
    checkinVerification,
    checkoutVerification,
    checkinSchedule,
    setCheckinSchedule,
    setIsTrainer,
  } = useContext(UserContext);
  const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));

  useEffect(() => {
    setCheckinSchedule({ start: "09:00", end: "14:00" });
  }, []);

  useEffect(() => {
    setIsTrainer(false);
    const getDifference = () => {
      setIsTrainer(false);

      const date = new Date();
      const day = date.getDay();
      const month = date.getMonth();
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
    <DashboardStudentStyle>
      <AsideBar />
      <div className="containerMain">
        <HeaderDashboard />
        <CheckinBox />
        <StudentAttendance />
        <UserTable userIdProps={userId} />
      </div>
    </DashboardStudentStyle>
  );
};
