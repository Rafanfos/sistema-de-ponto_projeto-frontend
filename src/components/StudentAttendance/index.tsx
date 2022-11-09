import { useEffect, useState } from "react";
import { getCheckinPoints } from "../../services/api/commom/requests";
import { PercentageDivStyle } from "./style";

export const StudentAttendance = () => {
  const [percentage, setPercentage] = useState<string>("100");

  useEffect(() => {
    const updateGrade = async () => {
      const userId = localStorage.getItem("@userId:SistemaDePontos") || "";
      const checkinPoints = await getCheckinPoints(+userId);
      const attendCheckinPoints = checkinPoints.filter(
        ({ status }) => status === "attend"
      );
      setPercentage(
        `${(attendCheckinPoints.length / checkinPoints.length) * 100}`
      );
    };
    updateGrade();
  }, []);

  return (
    <PercentageDivStyle widthDiv={percentage}>
      <h3>Nota de Presença</h3>
      <div className="container">
        <div className="total">
          <div className="current"></div>
        </div>
        <span>{`${!isNaN(+percentage) ? percentage : 100}%`}</span>
      </div>
    </PercentageDivStyle>
  );
};
