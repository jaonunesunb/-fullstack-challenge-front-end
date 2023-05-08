import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  IContextProps,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IUser,
  IUserUpdate,
} from "../interfaces/users.interface";

export const UserContext = createContext({} as any);

export function UserProvider({ children }: IContextProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
    async function loadUser() {
      const token = localStorage.getItem("@acessToken");
      const userId = localStorage.getItem("@userID");
      if (token && userId) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get<IUser>(`users/${user?.id}`);
          setUser(data);
          navigate("/contacts/");
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, [navigate]);

  /* function userLogin(loginData: ILoginRequest) {
    api
      .post("/login/", loginData)
      .then((response) => {
        localStorage.setItem("@acessToken", response.data.token);
        localStorage.setItem("@userID", response.data.user.id);
        if (!response.data.token) {
          toast.error("Houve um erro...");
          return;
        }
        if (response.data.token) {
          toast.success("Bem vindo!", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setUser(response.data.user);

          navigate("/contacts/");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
 */
  async function userLogin(data: ILoginRequest) {
    try {
      const response = await api.post("/login/", {
        email: data.email,
        password: data.password,
      });
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
      localStorage.setItem("@acessToken", response.data.token);
      localStorage.setItem("@userID", response.data.user.id);

      const user = await api.get(`users/${response.data.user.id}/`);
      setUser(user.data);
      toast.success("Login confirmado", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/contacts/");
    } catch (error) {
      toast.error("Erro de login: Informações incorretas", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  }
  const getAllUsers = async () => {
    try {
      const users = await api.get("/users/");
      setAllUsers(users.data);
      return users.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (id: number) => {
    try {
      const response = await api.get<IUser>(`/users/${user?.id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) => {
    const requestBody: IRegisterRequest = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const response = await api.post("/users/register", requestBody);
      toast.success("Cadastro bem sucedido", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      toast.error("Erro ao cadastrar usuário", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("@acessToken");
    localStorage.removeItem("@userID");
    setUser(null);
    navigate("/");
  };

  function deleteUser() {
    api
      .delete(`users/${user!.id}/`)
      .then((response) => {
        toast.success("Usuário deletado", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  function updateUser(data: IUserUpdate) {
    api
      .patch(`users/${user!.id}/`, data)
      .then((response) => {
        toast.success("Usuário atualizado", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser({
          ...user!,
          ...data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        setUser,
        getAllUsers,
        registerUser,
        getUser,
        logout,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
