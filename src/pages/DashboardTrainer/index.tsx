/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentsTable } from "../../components/ StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { IGetTrainerInfoResponse } from "../../services/api/trainer/interfaces";
import { getTrainerInfo } from "../../services/api/trainer/requests";
import { DashboardTrainerStyle } from "./style";

export const DashboardTrainer = () => {
    const userId = localStorage.getItem("@userId:SistemaDePontos") || "";
    const token = localStorage.getItem("@token:SistemaDePontos");
    const [trainerInfo, setTrainerInfo] = useState<IGetTrainerInfoResponse[]>(
        []
    );
    const navigate = useNavigate();
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                try {
                    const data = await getTrainerInfo(+userId);
                    setTrainerInfo(data);
                    navigate("/dashboard_instrutor", { replace: true });
                } catch (error) {}
            } else {
                navigate("/", { replace: true });
            }
        };
        getInfo();
    }, []);

    return (
        <DashboardTrainerStyle>
            <AsideBar />
            <div className="containerMain">
                {trainerInfo[0] ? (
                    <header>
                        <h1>{`Turma ${trainerInfo[0].class} - ${trainerInfo[0].course_module}`}</h1>
                        <div>
                            <h2>{`Bem Vindo ${trainerInfo[0].name}`}</h2>
                            <span className="idUser">{`ID: ${trainerInfo[0].id}`}</span>
                            <p>
                                {new Date().toLocaleString("pt-BR", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    </header>
                ) : (
                    <div className="loader"></div>
                )}

                <CheckinBox />
                <div className="marginTable">
                    <StudentsTable />
                </div>
            </div>
        </DashboardTrainerStyle>
    );
};
