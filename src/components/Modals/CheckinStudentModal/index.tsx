import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { CheckinStudentModalStyled } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IGetTrainerInfoResponse } from "../../../services/api/trainer/interfaces";
import { IData } from "../../CheckinBox";
import { getStudentInfo } from "../../../services/api/students/requests";

interface IModalCheckinProps {
  checkin: (info: IGetTrainerInfoResponse[], data: IData) => Promise<void>;
}

const formSchema = yup.object().shape({
  currentTask: yup.string().required("Campo obrigatório*"),
});

const CheckinStudentModal = ({ checkin }: IModalCheckinProps) => {
  const { setShowModal } = useContext(UserContext);
  const [isDisable, setIsDisable] = useState(true);
  const [impediment, setImpediment] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (dataInput: IData) => {
    const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));
    const studentInfo = await getStudentInfo(userId);
    dataInput = {
      ...dataInput,
      impediments: impediment === "yes" ? true : false,
    };

    checkin(studentInfo, dataInput);
  };

  useEffect(() => {
    impediment && setIsDisable(false);
  }, [impediment]);

  return (
    <CheckinStudentModalStyled>
      <div>
        <h1>Olá dev, hora do checkin!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="currentTask">
            Em qual atividade/entrega você está trabalhando?
          </label>
          <input
            className="input-activity input-default"
            placeholder="Digite a atividade ou entrega..."
            id="currentTask"
            {...register("currentTask")}
          />
          <p className="error">{errors.currentTask?.message}</p>
          <span>Há algo te impedindo de concluir a entrega?</span>
          <div className="radios">
            <div className="yes-group">
              <input
                type="radio"
                id="yes"
                name="impediment"
                value="yes"
                onChange={(e) => {
                  setImpediment(e.target.value);
                }}
              />
              <label htmlFor="yes">Sim</label>
            </div>
            <div className="no-group">
              <input
                type="radio"
                id="no"
                name="impediment"
                value="no"
                onChange={(e) => setImpediment(e.target.value)}
              />
              <label htmlFor="no">Não</label>
            </div>
          </div>
          <div className="buttons">
            <button
              disabled={isDisable}
              className="outline"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
            <button type="submit" disabled={isDisable} className="primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </CheckinStudentModalStyled>
  );
};

export default CheckinStudentModal;
