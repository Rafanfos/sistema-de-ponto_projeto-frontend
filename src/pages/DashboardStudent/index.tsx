import { useContext, useEffect } from "react";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { StudentAttendance } from "../../components/StudentAttendance";
import { UserTable } from "../../components/UserTable";
import { UserContext } from "../../context/UserContext";
import { DashboardStudentStyle } from "./style";

export const DashboardStudent = () => {
  const { checkinVerification, checkoutVerification } = useContext(UserContext);

  useEffect(() => {
    const date = new Date();
    const time = date.getHours();
    const difference = 0;

    if (time >= 9 && time < 14) {
      checkinVerification(difference);
    } else {
      checkoutVerification(difference);
    }
  });

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
