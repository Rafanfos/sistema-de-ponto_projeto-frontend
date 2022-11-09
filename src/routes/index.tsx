import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { DashboardTrainer } from "../pages/DashboardTrainer";
import { DashboardStudent } from "../pages/DashboardStudent";
import { AccountSettings } from "../pages/AccountSettings";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegistersTrainer } from "../pages/RegistersTrainer";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard_instrutor" element={<DashboardTrainer />} />
        <Route path="/dashboard_aluno" element={<DashboardStudent />} />
        <Route path="/configuracoes_conta" element={<AccountSettings />} />
        <Route path="/registro_pontos" element={<RegistersTrainer />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
