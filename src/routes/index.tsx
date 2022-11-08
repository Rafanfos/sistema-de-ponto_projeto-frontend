import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { DashboardTrainer } from "../pages/DashboardTrainer";
import { DashboardStudent } from "../pages/DashboardStudent";
import { AccountSettings } from "../pages/AccountSettings";
import { RegistersTrainer } from "../pages/RegistersTrainer";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard_instrutor" element={<DashboardTrainer />} />
      <Route path="/dashboard_aluno" element={<DashboardStudent />} />
      <Route path="/configuracoes_conta" element={<AccountSettings />} />
      <Route path="/registro_pontos" element={<RegistersTrainer />} />
    </Routes>
  );
};

export default RoutesMain;
