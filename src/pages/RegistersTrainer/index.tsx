import React, { useContext, useEffect, useState } from "react";
import { UserTable } from "../../components/UserTable";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api/api";
import { useForm } from "react-hook-form";

import {
  getCheckinsByDate,
  getCheckInStudents,
  getStudents,
  getTrainerInfo,
} from "../../services/api/trainer/requests";
import { RegistersTrainerStyle } from "./style";
import { HeaderDashboardStyle } from "../../components/HeaderDashboard/style";
import { IGetStudentsResponse } from "../../services/api/trainer/interfaces";
import CalendarWindow from "../../components/Calendar";
import { BiSearch } from "react-icons/bi";
import { AsideBar } from "../../components/AsideBarNavigation";
import { TrainerTable } from "../../components/TrainerTable";

interface IFormStudent {
  studentName: string;
}
export const RegistersTrainer = () => {
  const userLocalId = Number(localStorage.getItem("@userId:SistemaDePontos"));
  const token = localStorage.getItem("@token:SistemaDePontos");
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [dateToday] = useState<Date>(new Date());
  const [studentsInfo, setStudentsInfo] = useState<IGetStudentsResponse[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [studentFilterId, setStudentFilterId] = useState<number>(0);
  const [trainerInitialId, setTrainerInitialId] = useState<number>(
    +userLocalId
  );

  const { register, handleSubmit, reset } = useForm<IFormStudent>();
  const { setMyCheckins, setStudentsCheckin } = useContext(UserContext);

  useEffect(() => {
    const trainerInfo = async () => {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const info = await getTrainerInfo(userLocalId);
      setUserInfo(info);
      setTrainerInitialId(+userLocalId);
      return info;
    };

    const getAllStudents = async () => {
      const studentsData = await getStudents(userLocalId);
      setStudentsInfo(studentsData);
      return studentsData;
    };
    trainerInfo();
    getAllStudents();
  }, []);

  const calendarCallbackTrainer = async (date: string) => {
    const splitingDates = date.split(",");

    const startingDate = splitingDates[0];
    const monthStarting = +startingDate.slice(3, 5);
    const yearStarting = +startingDate.slice(6, 10);
    const dayStarting = +startingDate.slice(0, 2);

    const endDate = splitingDates[1];
    const dayEnd = +endDate.slice(0, 2);

    const checkinsData = await getCheckinsByDate(
      userLocalId,
      monthStarting,
      yearStarting
    );
    const filteringDates = checkinsData.filter(
      ({ day }) => day >= dayStarting && day <= dayEnd
    );

    setMyCheckins(filteringDates);
  };

  const calendarCallbackStudent = async (date: string) => {
    const splitingDates = date.split(",");

    const startingDate = splitingDates[0];
    const monthStarting = +startingDate.slice(3, 5);
    const yearStarting = +startingDate.slice(6, 10);
    const dayStarting = +startingDate.slice(0, 2);

    const endDate = splitingDates[1];
    const dayEnd = +endDate.slice(0, 2);

    const checkinsData = await getCheckinsByDate(
      studentFilterId,
      monthStarting,
      yearStarting
    );
    const filteringDates = checkinsData.filter(
      ({ day }) => day >= dayStarting && day <= dayEnd
    );

    setStudentsCheckin(filteringDates);
  };

  const getStudentsCheckin = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { options, selectedIndex, value } = e.target;
    await getCheckInStudents(+value);

    setSelectedStudent(options[selectedIndex].text);
    setStudentFilterId(+value);
  };

  const getStudentsByInput = (data: IFormStudent) => {
    const findingStudent = studentsInfo.find(({ name }) => {
      return name
        .toLowerCase()
        .trim()
        .includes(data.studentName.toLowerCase().trim());
    });

    if (findingStudent) {
      const { studentId, name } = findingStudent;
      setStudentFilterId(studentId);
      setSelectedStudent(name);
    }

    reset();
  };

  return (
    <>
      <AsideBar />
      <RegistersTrainerStyle>
        <HeaderDashboardStyle>
          <h1>Registro de pontos</h1>
          {userInfo &&
            userInfo.map((user) => {
              const { id, course_module } = user;
              return (
                <div className="header__info" key={id}>
                  <h2>
                    Turma {user.class} - {course_module}
                  </h2>
                  <p>
                    {dateToday.toLocaleString("pt-BR", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </p>
                </div>
              );
            })}
        </HeaderDashboardStyle>

        <div className="main__container">
          <section className="register__container">
            <h3>Meus Registros</h3>
            <CalendarWindow callback={calendarCallbackTrainer} />
            <UserTable userIdProps={userLocalId} />
          </section>

          <aside>
            {selectedStudent !== "Selecione" && selectedStudent ? (
              <h3>Registros de: "{selectedStudent}"</h3>
            ) : (
              <h3>Registros</h3>
            )}

            <div className="filter__students">
              <select onChange={getStudentsCheckin}>
                <option value="">Selecione</option>
                {studentsInfo.map((student) => {
                  const { name, studentId, id } = student;

                  return (
                    <option value={studentId} key={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <form
                className="input__container"
                onSubmit={handleSubmit(getStudentsByInput)}
              >
                <input
                  className="input-default"
                  id="studentName"
                  placeholder="Pesquisar aluno ..."
                  {...register("studentName")}
                />

                <button className="search__icon" type="submit">
                  <BiSearch />
                </button>
              </form>
              <CalendarWindow callback={calendarCallbackStudent} />
            </div>

            {studentFilterId ? (
              <TrainerTable userIdProps={studentFilterId} />
            ) : (
              <h3>*Selecione o aluno para mostrar registros*</h3>
            )}
          </aside>
        </div>
      </RegistersTrainerStyle>
    </>
  );
};
