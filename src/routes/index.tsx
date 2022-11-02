import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { DashboardTrainer } from "../pages/DashboardTrainer";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard_instrutor" element={<DashboardTrainer />} />
        </Routes>
    );
};

export default RoutesMain;
