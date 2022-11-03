import { useEffect, useState } from "react";
import { PercentageDivStyle } from "./style";

export const StudentAttendance = () => {
  const [percentage, setPercentage] = useState<string>("100");

  useEffect(() => {
    setPercentage(Math.floor(Math.random() * 101).toString());
  }, []);

  return (
    <PercentageDivStyle widthDiv={percentage}>
      <h3>Nota de Presença</h3>
      <div className="container">
        <div className="total">
          <div className="current"></div>
        </div>
        <span>{`${percentage}%`}</span>
      </div>
    </PercentageDivStyle>
  );
};
