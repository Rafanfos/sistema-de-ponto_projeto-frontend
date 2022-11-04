import { InputDefault } from "../InputDefault";
import { EditFormStyle } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iEditTrainerInfoProps } from "../../services/api/trainer/interfaces";

const nameEdit = yup.object().shape({
  name: yup.string(),
  oldEmail: yup.string().email("Não é um e-mail válido"),
  email: yup.string().email("Não é um e-mail válido"),
  confirmNewEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Os e-mails devem ser correspondentes"),
});

export const EditFormName = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditTrainerInfoProps>({
    resolver: yupResolver(nameEdit),
    mode: "onChange",
  });

  const editButton = () => {
    const verifyInputPhoto = watch("photo");

    if (verifyInputPhoto?.length === 1) {
      return true;
    }
  };

  const editInfoAccount = (data: iEditTrainerInfoProps) => {
    const { name, email, photo } = data;

    try {
      const treatedObject = {
        name: name !== "" ? name : "vazio",
        email: email !== "" ? email : "vazio",
        photo: photo,
      };

    } catch (error) {
      console.error(error);
    }
  };

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
            <small>{errors.oldEmail?.message}</small>

            <label>Email novo</label>
            <InputDefault
              placeholder="Escreva aqui o seu email."
              className="inputStyle"
              register={register("email")}
            />
            <small>{errors.email?.message}</small>
            <InputDefault
              placeholder="Escreva novamente o seu email."
              className="inputStyle"
              register={register("confirmNewEmail")}
            />
            <small>{errors.confirmNewEmail?.message}</small>
          </div>
          <div>
            <h3>Foto</h3>

            <InputDefault
              className="inputStyle"
              type="file"
              register={register("photo")}
              disabled={editButton()}
            />
            <img
              src="https://pbs.twimg.com/media/ETr0ATXWsAAS1Uz.jpg"
              alt="Imagem do Kirby"
            />
          </div>
        </div>

        <button type="submit">Confirmar alteração</button>
      </form>
    </EditFormStyle>
  );
};
