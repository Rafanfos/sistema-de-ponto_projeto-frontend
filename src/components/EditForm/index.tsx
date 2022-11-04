import { InputDefault } from "../InputDefault";
import { EditFormStyle } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iEditTrainerInfoProps } from "../../services/api/trainer/interfaces";

const nameEdit = yup.object().shape({
  name: yup.string(),
  email: yup.string().notRequired().email("Não é um e-mail válido"),
});

export const EditFormName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditTrainerInfoProps>({
    resolver: yupResolver(nameEdit),
    mode: "onChange",
  });

  const editInfoAccount = (data: iEditTrainerInfoProps) => {
    console.log(data);

    const { name, email } = data;

    const treatedObject = {
      name: name !== "" ? name : "",
      email: email !== "" ? email : "",
    };

    console.log(treatedObject);
  };

  console.log(errors);

  return (
    <EditFormStyle>
      <form onSubmit={handleSubmit(editInfoAccount)}>
        <div className="flexBox">
          <div>
            <h3>Nome</h3>
            <InputDefault
              placeholder="Digite aqui o seu novo nome ..."
              className="inputStyle"
              register={register("name")}
            />

            <h3>Email</h3>
            <label>Email antigo</label>
            <InputDefault
              placeholder="Digite aqui o seu email anterior."
              className="inputStyle"
              register={register("oldEmail")}
            />

            <label>Email novo</label>
            <InputDefault
              placeholder="Escreva aqui o seu email."
              className="inputStyle"
              register={register("email")}
            />
            <InputDefault
              placeholder="Escreva novamente o seu email."
              className="inputStyle"
              register={register("confirmNewEmail")}
            />
          </div>
          <div>
            <h3>Foto</h3>

            <InputDefault
              className="inputStyle"
              type="file"
              register={register("photo")}
            />
            <img src="" alt="Imagem do Kirby" />
          </div>
        </div>

        <button type="submit">Confirmar alteração</button>
      </form>
    </EditFormStyle>
  );
};
