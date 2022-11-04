import { useContext, useEffect } from "react";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { StudentAttendance } from "../../components/StudentAttendance";
import { UserTable } from "../../components/UserTable";
import { UserContext } from "../../context/UserContext";
import { DashboardStudentStyle } from "./style";

export const DashboardStudent = () => {
    const { checkinVerification } = useContext(UserContext);

    useEffect(() => {
        const date = new Date();
        const time = date.getMinutes();
        let difference = 0;
        const checkinTime = 9 * 60;
        const checkoutTime = 14 * 60;
        if (time >= checkinTime && time < checkoutTime) {
            difference = time - checkinTime;
        } else {
            difference = time - checkoutTime;
        }
        checkinVerification(difference);
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
