import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddStudentModalStyle } from "./style";
import { IRegisterCheckInStudentsProps } from "../../services/api/trainer/interfaces";
import { addStudent } from "../../services/api/trainer/requests";
import { toast } from "react-toastify";

interface IAddStudentModal {
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setStudentsList: React.Dispatch<
    React.SetStateAction<[] | IRegisterCheckInStudentsProps[]>
  >;
}
interface IAddStudent {
  email: string;
  name: string;
  userId: number;
  studentId: number;
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
  } = useForm<IAddStudent>({
    resolver: yupResolver(schemaAddStudent),
  });

  async function handleSubmitFunction(data: IAddStudent) {
    // const id = localStorage.getItem("@userId")
    const newData = { ...data, userId: 2 };
    try {
      await addStudent(newData);
      toast.success("Aluno adicionado com sucesso", {
        theme: "dark",
      });
      setStudentsList([]);
      setIsAddModal(false);
    } catch (err) {
      toast.error("Não foi possível adicionar o aluno", {
        theme: "dark",
      });
      console.log(err);
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
