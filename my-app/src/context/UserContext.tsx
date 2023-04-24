import { ReactNode, createContext, useState } from "react";
import api from "../services/api";
import { error } from "console";
import { useNavigate } from "react-router-dom";
import { UUID } from "crypto";

interface IUser {
  id: UUID;
  name: string;
  email: string;
  password: string;
}

interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string
}

export interface ILoginRequest {
  token: string;
  user: IUser;
}

interface ILoginResponse {
  token: string;
  user: IUser;
}

interface IContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as any);

export function UserProvider({ children }: IContextProps) {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  function userLogin(data: any) {
    api
      .post<ILoginRequest>("/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token); 
        localStorage.setItem("id", response.data.user.id);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log("Login error ->", error);
      });
  }

  const getAllUsers = async () => {
    try {
      const users = await api.get("/users");
      setAllUsers(users.data);
      return users.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (id: number) => {
    try {
      const response = await api.get<IUser>(`/users/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    const requestBody: IRegisterRequest = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const response = await api.post("/users/register", requestBody);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("id", response.data.user.id);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
    console.log(err);
    }
    };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setUser({});
    navigate("/");
    };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        setUser,
        getAllUsers,
        registerUser,
        getUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
