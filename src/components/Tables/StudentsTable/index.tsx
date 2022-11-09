/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { getStudents } from "../../../services/api/trainer/requests";
import { ContainerStudentsStyle, StudentsTableStyle } from "./style";
import { DeleteStudentModal } from "../../Modals/DeleteStudentModal";
import { AddStudentModal } from "../../Modals/AddStudentModal";
import {
  IGetStudentsResponse,
  IRegisterCheckInStudentsProps,
} from "../../../services/api/trainer/interfaces";
import { useAuthContext } from "../../../context/AuthContext";
import defaultUser from "../../../assets/defaultUser.svg";

interface IImpediments {
  impediments: boolean;
}

export const StudentsTable = () => {
  const [studentsList, setStudentsList] = useState<IGetStudentsResponse[] | []>(
    []
  );
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [studentDelete, setStudentDelete] =
    useState<IRegisterCheckInStudentsProps | null>(null);
  const [isAddModal, setIsAddModal] = useState(false);
  const [sortedImpediments, setSortedImpediments] = useState(true);
  const [sortedsGrades, setSortedGrades] = useState(true);

  function handleClick(student: IRegisterCheckInStudentsProps) {
    setIsDeleteModal(true);
    setStudentDelete(student);
  }

  const { user } = useAuthContext();

  useEffect(() => {
    const listStudents = async () => {
      const students = await getStudents(user.userId);
      setStudentsList(students);
    };
    listStudents();
  }, []);

  const sortingImpediments = async () => {
    const students = await getStudents(user.userId);
    const studentsSorted = students.sort(sortCallbackImpediments);
    setStudentsList(studentsSorted)
  };

  const sortCallbackImpediments = (a: IImpediments, b: IImpediments) => {
    if (sortedImpediments) {
      setSortedImpediments(false);
      setSortedGrades(false);

      if (a.impediments > b.impediments && a.impediments >= b.impediments) {
        return -1;
      }
      if (a.impediments < b.impediments && a.impediments <= b.impediments) {
        return 1;
      }
      return 0;
    } else {
      setSortedImpediments(true);
      setSortedGrades(false);

      if (a.impediments < b.impediments && a.impediments <= b.impediments) {
        return -1;
      }
      if (a.impediments > b.impediments && a.impediments >= b.impediments) {
        return 1;
      }
      return 0;
    }
  };

  return (
    <>
      {isDeleteModal ? (
        <DeleteStudentModal
          setIsDeleteModal={setIsDeleteModal}
          studentDelete={studentDelete}
          setStudentsList={setStudentsList}
        />
      ) : null}
      {isAddModal ? (
        <AddStudentModal
          setIsAddModal={setIsAddModal}
          setStudentsList={setStudentsList}
        />
      ) : null}
      <StudentsTableStyle>
        <ContainerStudentsStyle>
          <h2>Alunos</h2>
          <button onClick={() => setIsAddModal(true)}>+</button>
        </ContainerStudentsStyle>
        <table>
          <thead>
            <tr>
              <th>
                <h4>Nome</h4>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </th>

              <th>
                <h4>Último Registro</h4>
                <button>
                  <MdKeyboardArrowUp />
                </button>
              </th>

              <th>
                <h4>Atividade atual</h4>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </th>

              <th>
                <h4>Impedimentos</h4>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </th>

              <th>
                <h4>Nota de Presença</h4>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsList &&
              studentsList.map((student) => {
                const {
                  id,
                  avatar,
                  name,
                  lastRegister,
                  currentTask,
                  impediments,
                  percentage,
                } = student;
                return (
                  <tr key={id}>
                    <td>
                      <button onClick={() => handleClick(student)}>
                        <FiTrash2 />
                      </button>
                      <img
                        src={avatar ? avatar : defaultUser}
                        alt="Foto de perfil"
                      />
                      <h3>{name}</h3>
                    </td>

                    <td>
                      <p>{lastRegister ? lastRegister : "N/A"}</p>
                    </td>

                    <td>{currentTask}</td>

                    <td>
                      <p
                        className={impediments ? "somethingWrong" : "allRigth"}
                      >
                        {impediments ? "Com impedimentos" : "Sem Impedimentos"}
                      </p>
                    </td>

                    <td>
                      <p
                        className={
                          +percentage >= 80 ? "allRigth" : "somethingWrong"
                        }
                      >
                        {percentage.replace(".", ",")}%
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </StudentsTableStyle>
    </>
  );
};
