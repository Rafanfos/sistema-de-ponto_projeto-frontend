import { toast } from "react-toastify";
import {
  IGetStudentsResponse,
  IRegisterCheckInStudentsProps,
} from "../../../services/api/trainer/interfaces";
import {
  deleteStudent,
  getStudents,
} from "../../../services/api/trainer/requests";
import { StyledModalAnimation } from "../animations/styled";
import { DeleteStudentModalStyle } from "./style";

interface IDeleStudentModalProps {
  setIsDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  studentDelete: null | IRegisterCheckInStudentsProps;
  setStudentsList: React.Dispatch<
    React.SetStateAction<[] | IGetStudentsResponse[]>
  >;
}
export const DeleteStudentModal = ({
  setIsDeleteModal,
  studentDelete,
  setStudentsList,
}: IDeleStudentModalProps) => {
  async function handleDeleteStudent(): Promise<void> {
    try {
      if (studentDelete) {
        await deleteStudent(studentDelete.id);

        toast.success("Aluno deletado com sucesso");

        const newStudents = await getStudents(2);
        setStudentsList(newStudents);
        setIsDeleteModal(false);
      }
    } catch (err) {
      toast.error("Não foi possível deletar o aluno");
    }
  }
  return (
    <DeleteStudentModalStyle>
      <StyledModalAnimation className="containerDeleModal">
        <h2>Deseja realmente excluir este aluno?</h2>

        <div>
          <button className="btnDelete" onClick={() => handleDeleteStudent()}>
            Excluir!
          </button>
          <button className="btnCancel" onClick={() => setIsDeleteModal(false)}>
            Cancelar
          </button>
        </div>
      </StyledModalAnimation>
    </DeleteStudentModalStyle>
  );
};
