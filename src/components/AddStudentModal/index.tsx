import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddStudentModalStyle } from "./style";
import {
  IAddStudentProps,
  IRegisterCheckInStudentsProps,
} from "../../services/api/trainer/interfaces";
import {
  addStudent,
  getCheckInStudents,
  getStudents,
} from "../../services/api/trainer/requests";
import { toast } from "react-toastify";

interface IAddStudentModal {
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setStudentsList: React.Dispatch<
    React.SetStateAction<[] | IRegisterCheckInStudentsProps[]>
  >;
}

const schemaAddStudent = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  studentId: yup.number().required("ID obrigatório"),
});

export const AddStudentModal = ({
  setIsAddModal,
  setStudentsList,
}: IAddStudentModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddStudentProps>({
    resolver: yupResolver(schemaAddStudent),
  });

  async function handleSubmitFunction(data: IAddStudentProps) {
    const listCheckIn = await getCheckInStudents(data.studentId);

    const lastRegister = listCheckIn[listCheckIn.length - 1];

    let newData = {
      ...data,
      lastRegister: "",
      impediments: false,
      userId: 2,
      id: data.studentId,
    };

    if (lastRegister) {
      const { day, month, year, schedule } = lastRegister;
      const lastRegisterDate = `${schedule} | ${day}/${month}/${year}`;

      const lastRegisterImp = lastRegister.impediments;

      newData = {
        ...data,
        lastRegister: lastRegisterDate,
        impediments: lastRegisterImp,
        userId: 2,
        id: data.studentId,
      };
    }

    try {
      await addStudent(newData);
      toast.success("Aluno adicionado com sucesso");
      setIsAddModal(false);
    } catch (err) {
      toast.error("Não foi possível adicionar o aluno");
    } finally {
      const students = await getStudents(2);
      setStudentsList(students);
    }
  }

  return (
    <AddStudentModalStyle>
      <div className="containerAddModal">
        <h2>Adicionando um novo aluno</h2>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Nome do aluno..."
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email do aluno..."
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </div>

          <div className="studentId">
            <label htmlFor="studentId">ID</label>
            <input
              type="number"
              id="studentId"
              placeholder="ID do aluno..."
              {...register("studentId")}
            />
            <span>{errors.email?.message}</span>
          </div>

          <div className="btns">
            <button type="submit" className="btnAdd">
              Adicionar
            </button>
            <button
              type="button"
              onClick={() => setIsAddModal(false)}
              className="btnCancel"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </AddStudentModalStyle>
  );
};
