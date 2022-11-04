import LoginImage from "../../components/LoginPageImage/image";
import PageLogin from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { CiMail } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { BsCheck, BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IGetStudentInfoResponse } from "../../services/api/students/interfaces";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api/commom/requests";
import { ILoginProps } from "../../services/api/commom/interface";

const schema = yup.object({
    email: yup
        .string()
        .email("Deve ser um e-mail válido")
        .required("E-mail é obrigatório"),
    password: yup.string().required("Insira sua senha"),
});

export interface IFormLogin {
    email: string;
    password: string;
}

export interface ILoginForm {
    accessToken: string;
    user: IGetStudentInfoResponse;
}

const Login = () => {
    const [viewPassword, setViewPassword] = useState(false);
    const [typeInputPassword, setTypeInputPassword] = useState("password");
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = async (dataInput: ILoginProps) => {
        try {
            const data = await login(dataInput);
            localStorage.setItem("@token:SistemaDePontos", data.accessToken);
            localStorage.setItem("@userId:SistemaDePontos", data.user.id + "");

            data.user.is_trainer
                ? navigate("/dashboard_instrutor", { replace: true })
                : navigate("/dashboard_aluno", { replace: true });
        } catch (error) {
            toast.error("Usuário ou senha inválidos");
        }
    };

    return (
        <PageLogin>
            <LoginImage />

            <section>
                <div>
                    <p>Bem vindo a</p>
                    <h1>Kenzie Academy</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="div_input">
                            <CiMail className="figure_input" />
                            <div>
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder="Insira seu e-mail"
                                    {...register("email")}
                                />
                                <span className="span_email">
                                    {errors.email
                                        ? `* ${errors.email.message}`
                                        : null}
                                </span>
                            </div>
                        </div>
                        <div className="div_input">
                            <FiKey className="figure_input" />
                            <div>
                                <label htmlFor="">Senha</label>
                                <input
                                    type={typeInputPassword}
                                    placeholder="Insira sua senha"
                                    {...register("password")}
                                />
                                <span>
                                    {errors.password
                                        ? `* ${errors.password.message}`
                                        : null}
                                </span>
                            </div>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (viewPassword === true) {
                                        setViewPassword(false);
                                        setTypeInputPassword("password");
                                    } else {
                                        setViewPassword(true);
                                        setTypeInputPassword("text");
                                    }
                                }}
                            >
                                {viewPassword === false ? (
                                    <BsEye className="figure_view" />
                                ) : (
                                    <BsEyeSlash className="figure_view" />
                                )}
                            </button>
                        </div>
                        <div className="div_keep_logged">
                            <div
                                onClick={() => {
                                    keepLoggedIn === true
                                        ? setKeepLoggedIn(false)
                                        : setKeepLoggedIn(true);
                                }}
                            >
                                {keepLoggedIn === true ? (
                                    <BsCheck className="figure_check" />
                                ) : null}
                            </div>
                            <p>Manter-me logado</p>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </PageLogin>
    );
};

export default Login;
