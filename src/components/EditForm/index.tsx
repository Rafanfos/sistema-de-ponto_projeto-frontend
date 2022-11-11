import { EditFormStyle } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEditTrainerInfoProps } from "../../services/api/trainer/interfaces";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useCheckinContext } from "../../context/CheckinContext";
import { AuthContext } from "../../context/AuthContext";
import defaultUser from "../../assets/defaultUser.svg";

const schema = yup.object().shape(
  {
    oldEmail: yup
      .string()
      .email("Não é um e-mail válido")
      .when("email", {
        is: yup.reach,
        then: yup.string().required("O campo é obrigatório"),
      }),

    email: yup
      .string()
      .email("Não é um e-mail válido")
      .when("oldEmail", {
        is: yup.reach,
        then: yup
          .string()
          .required("O campo é obrigatório")
          .notOneOf([yup.ref("oldEmail")], "Os e-mails devem ser diferentes"),
      }),

    confirmNewEmail: yup
      .string()
      .oneOf([yup.ref("email")], "Os e-mails devem ser correspondentes")
      .when("oldEmail", {
        is: yup.reach,
        then: yup.string().required("O campo é obrigatório"),
      }),
  },
  [["oldEmail", "email"]]
);

export const EditForm = () => {
  const { editUserInfo, userAvatar, setUserAvatar } = useCheckinContext();
  const { user, setNewAvatar } = useContext(AuthContext);

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditTrainerInfoProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      oldEmail: "",
      email: "",
      confirmNewEmail: "",
      avatar: [],
    },
  });

  const convertToBase64 = () => {
    if (watch("avatar")?.length === 1) {
      const readFile = new FileReader();

      readFile.readAsDataURL(watch("avatar")[0]);
      readFile.onload = () => {
        setUserAvatar(readFile.result?.toString());
      };
      return true;
    }
  };
  convertToBase64();

  const verifyInputs = () => {
    if (
      watch("name") !== "" ||
      watch("avatar").length === 1 ||
      (watch("oldEmail") !== "" &&
        watch("email") !== "" &&
        watch("confirmNewEmail") !== "")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const editInfoAccount = async (data: IEditTrainerInfoProps) => {
    const { name, email, oldEmail } = data;

    const treatedObject = {
      name: name !== "" ? name : user?.name,
      email: email !== "" ? email : user?.email,
      avatar: userAvatar ? userAvatar : user?.avatar,
    };

    if (oldEmail !== user?.email && oldEmail !== "") {
      toast.error("E-mail antigo incorreto");
    } else {
      await editUserInfo(treatedObject);
      // const userInfo = await getStudentInfo(+user.id);
      // setUser(userInfo[0]);
      setNewAvatar(userAvatar);
    }
    reset();
  };

  return (
    <EditFormStyle>
      <form onSubmit={handleSubmit(editInfoAccount)}>
        <div className="flexBox">
          <div>
            <h3>Nome</h3>
            <input
              placeholder="Digite aqui o seu novo nome..."
              className="inputStyle"
              {...register("name")}
            />

            <h3>Email</h3>
            <label>Email antigo</label>
            <input
              placeholder="Digite aqui o seu email anterior."
              className="inputStyle"
              {...register("oldEmail")}
            />
            <small>{errors.oldEmail?.message}</small>

            <label>Email novo</label>
            <input
              placeholder="Escreva aqui o seu email."
              className="inputStyle"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
            <input
              placeholder="Escreva novamente o seu email."
              className="inputStyle"
              {...register("confirmNewEmail")}
            />
            <small>{errors.confirmNewEmail?.message}</small>
          </div>
          <div>
            <h3>Foto</h3>

            <input
              className="inputStyle"
              type="file"
              {...register("avatar")}
              disabled={convertToBase64()}
            />
            <img
              src={userAvatar ? userAvatar : defaultUser}
              alt="Imagem do Kirby"
            />
          </div>
        </div>

        <button type="submit" disabled={!verifyInputs()}>
          Confirmar alteração
        </button>
      </form>
    </EditFormStyle>
  );
};
