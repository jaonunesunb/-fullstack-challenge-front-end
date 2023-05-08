import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { StyledLoginPage } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface ILoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { userLogin } = useContext(UserContext);

  let navigate = useNavigate();

  function navRegister() {
    navigate("/register");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(formSchema) });

  const submitHandler = async (data: ILoginData) => {
    await userLogin(data);
  };

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

  return (
    <StyledLoginPage>
      <div className="containerLogin">
        <div className="divLogo">
          <img src="" alt="Logo da plataforma" />
        </div>
        <form className="formLoginUser" onSubmit={handleSubmit(submitHandler)}>
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

          <Button text="Login" />
        </form>
        <p>Não possui cadastro?</p>
        <button className="buttonReplace" onClick={navRegister}>
          Clique aqui
        </button>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
