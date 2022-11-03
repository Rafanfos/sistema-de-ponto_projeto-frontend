import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { StudentAttendance } from "../../components/StudentAttendance";
import { UserTable } from "../../components/UserTable";
import { DashboardStudentStyle } from "./style";

export const DashboardStudent = () => {
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
