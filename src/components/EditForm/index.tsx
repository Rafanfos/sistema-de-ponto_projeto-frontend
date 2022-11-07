import { InputDefault } from "../InputDefault";
import { EditFormStyle } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEditTrainerInfoProps } from "../../services/api/trainer/interfaces";

const schema = yup.object().shape({
  name: yup.string(),
  oldEmail: yup.string().email("Não é um e-mail válido"),
  email: yup.string().email("Não é um e-mail válido"),
  confirmNewEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Os e-mails devem ser correspondentes"),
});

export const EditForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditTrainerInfoProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const editButton = () => {
    const verifyInputPhoto = watch("avatar");

    if (verifyInputPhoto?.length === 1) {
      return true;
    }
  };

  const editInfoAccount = (data: IEditTrainerInfoProps) => {
    const { name, email, avatar } = data;

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const treatedObject = {
        name: name !== "" ? name : "vazio",
        email: email !== "" ? email : "vazio",
        avatar: avatar,
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
              {...register("name")}
            />

            <h3>Email</h3>
            <label>Email antigo</label>
            <InputDefault
              placeholder="Digite aqui o seu email anterior."
              className="inputStyle"
              {...register("oldEmail")}
            />
            <small>{errors.oldEmail?.message}</small>

            <label>Email novo</label>
            <InputDefault
              placeholder="Escreva aqui o seu email."
              className="inputStyle"
              {...register("email")}
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
              {...register("avatar")}
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
