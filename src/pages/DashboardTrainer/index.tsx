import { StudentsTable } from "../../components/ StudentsTable";
import { AsideBar } from "../../components/AsideBarNavigation";
import { CheckinBox } from "../../components/CheckinBox";
import { DashboardTrainerStyle } from "./style";

export const DashboardTrainer = () => {
  return (
    <DashboardTrainerStyle>
      <AsideBar />
      <div className="containerMain">
        <header>
          <h1>Turma 13 - M3</h1>
          <div>
            <h2>Bem vindo Tsunode</h2>
            <p>
              <span>-</span> 31/10/2022
            </p>
          </div>
        </header>
        <CheckinBox />
        <div className="marginTable">
          <StudentsTable />
        </div>
      </div>
    </DashboardTrainerStyle>
  );
};
