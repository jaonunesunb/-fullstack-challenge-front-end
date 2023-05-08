import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Button from "../../components/button";
import { StyleRegisterPage, SpecialButton } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface IRegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegisterPage = () => {
  const { user, setUser, registerUser } = useContext(UserContext);
  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({ resolver: yupResolver(formSchema) });

  const {
    onChange: onChangeName,
    onBlur: onBlurName,
    name: name,
    ref: refName,
  } = register("name");

  const {
    onChange: onChangeEmail,
    onBlur: onBlurEmail,
    name: nameEmail,
    ref: refEmail,
  } = register("email");
  const {
    onChange: onChangePassword,
    onBlur: onBlurPassword,
    name: namePassword,
    ref: refPassword,
  } = register("password");
  const {
    onChange: onChangePasswordConfirm,
    onBlur: onBlurPasswordConfirm,
    name: namePasswordConfirm,
    ref: refPasswordConfirm,
  } = register("passwordConfirm");

  const submitHandler = async (data: IRegisterData) => {
    console.log("Registrando novo usuário...");
    const responseData = await registerUser(
      data.name,
      data.email,
      data.password,
      data.passwordConfirm
    );
    if (!responseData) {
      toast.error("Houve um erro ao tentar criar a conta...");
    }
    if (responseData) {
      navigate("/");
    }
  };
  return (
    <StyleRegisterPage>
      <header>
        <h1>Comece sua jornada...</h1>
      </header>
      <div className="containerRegister">
        <div className="divLogo">
          <img src="" alt="Logo da plataforma" />
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            onChange={onChangeName}
            onBlur={onBlurName}
            name={name}
            innerRef={refName}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Digite seu email"
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            name={nameEmail}
            innerRef={refEmail}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            name={namePassword}
            innerRef={refPassword}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite sua senha novamente"
            onChange={onChangePasswordConfirm}
            onBlur={onBlurPasswordConfirm}
            name={namePasswordConfirm}
            innerRef={refPasswordConfirm}
          />

          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

          <Button text="Cadastrar" />
        </form>
        <div className="login-container">
          <p>Já possui cadastro?</p>
          <Link to={"/"}>Clique aqui</Link>
        </div>
      </div>
    </StyleRegisterPage>
  );
};

export default RegisterPage;
