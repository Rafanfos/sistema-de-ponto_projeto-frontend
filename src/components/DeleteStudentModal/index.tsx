import { toast } from "react-toastify";
import { IRegisterCheckInStudentsProps } from "../../services/api/trainer/interfaces";
import { deleteStudent } from "../../services/api/trainer/requests";
import { DeleteStudentModalStyle } from "./style";

interface IDeleStudentModalProps {
  setIsDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  studentDelete: null | IRegisterCheckInStudentsProps;
  studentsList: IRegisterCheckInStudentsProps[] | [];
  setStudentsList: React.Dispatch<
    React.SetStateAction<[] | IRegisterCheckInStudentsProps[]>
  >;
}
export const DeleteStudentModal = ({
  setIsDeleteModal,
  studentDelete,
  studentsList,
  setStudentsList,
}: IDeleStudentModalProps) => {
  async function handleDeleteStudent(): Promise<void> {
    try {
      if (studentDelete) {
        await deleteStudent(studentDelete.id);
        toast.success("Aluno deletado com sucesso");

        const filteredStudents = studentsList.filter(
          (student) => student.id !== studentDelete.id
        );
        setStudentsList(filteredStudents);
        setIsDeleteModal(false);
      }
    } catch (err) {
      toast.error("Não foi possível deletar o aluno");
    }
  }
  return (
    <DeleteStudentModalStyle>
      <div className="containerDeleModal">
        <h2>Deseja realmente excluir este aluno?</h2>

        <div>
          <button className="btnDelete" onClick={() => handleDeleteStudent()}>
            Excluir!
          </button>
          <button className="btnCancel" onClick={() => setIsDeleteModal(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </DeleteStudentModalStyle>
  );
};
