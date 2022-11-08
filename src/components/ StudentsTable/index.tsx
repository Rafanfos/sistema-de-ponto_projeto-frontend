import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { FiTrash2 } from "react-icons/fi";
import { getStudents } from "../../services/api/trainer/requests";
import { ContainerStudentsStyle, StudentsTableStyle } from "./style";
import { DeleteStudentModal } from "../DeleteStudentModal";
import { AddStudentModal } from "../AddStudentModal";
import api from "../../services/api/api";
import { IRegisterCheckInStudentsProps } from "../../services/api/trainer/interfaces";

export const StudentsTable = () => {
  const [studentsList, setStudentsList] = useState<
    IRegisterCheckInStudentsProps[] | []
  >([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [studentDelete, setStudentDelete] =
    useState<IRegisterCheckInStudentsProps | null>(null);
  const [isAddModal, setIsAddModal] = useState(false);

  function handleClick(student: IRegisterCheckInStudentsProps) {
    setIsDeleteModal(true);
    setStudentDelete(student);
  }

  useEffect(() => {
    const listStudents = async () => {
      const token = localStorage.getItem("@token:SistemaDePontos");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const students = await getStudents(2);
      setStudentsList(students);
    };
    listStudents();
  }, []);

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

              <th>
                <h4>Status</h4>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsList &&
              studentsList.map((student) => (
                <tr key={student.id}>
                  <td>
                    <button onClick={() => handleClick(student)}>
                      <FiTrash2 />
                    </button>
                    <VscCircleLargeOutline />
                    <h3>{student.name}</h3>
                  </td>

                  <td>
                    <p>{student.lastRegister ? student.lastRegister : "N/A"}</p>
                  </td>

                  <td>
                    <p
                      className={
                        student.impediments ? "somethingWrong" : "allRigth"
                      }
                    >
                      {student.impediments
                        ? "Com impedimentos"
                        : "Sem Impedimentos"}
                    </p>
                  </td>

                  <td>
                    <p className="allRigth">100%</p>
                  </td>

                  <td>
                    <p className="allRigth">Conforme</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </StudentsTableStyle>
    </>
  );
};
