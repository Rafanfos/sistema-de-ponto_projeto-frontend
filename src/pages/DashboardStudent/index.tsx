/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { StudentAttendance } from "../../components/StudentAttendance";
import { UserTable } from "../../components/UserTable";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api/api";
import { getStudentInfo } from "../../services/api/students/requests";
import { DashboardStudentStyle } from "./style";

export const DashboardStudent = () => {
  const {
    checkinVerification,
    checkoutVerification,
    checkinSchedule,
    setCheckinSchedule,
    setUserInfo,
  } = useContext(UserContext);

  useEffect(() => {
    setCheckinSchedule({ start: "09:00", end: "18:00" });

    const studentInfo = async () => {
      const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));
      const token = localStorage.getItem("@token:SistemaDePontos");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const info = await getStudentInfo(userId);
      setUserInfo(info);
    };
   studentInfo();
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
          difference = time - checkoutTime;
          checkoutVerification(difference);
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
        <UserTable />
      </div>
    </DashboardStudentStyle>
  );
};
