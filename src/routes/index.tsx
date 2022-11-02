import { Routes, Route } from "react-router-dom";
import { DashboardTrainer } from "../pages/DashboardTrainer";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardTrainer />}/>
      <Route />
      <Route />
    </Routes>
  );
};

export default RoutesMain;
