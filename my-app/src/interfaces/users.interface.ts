import { UUID } from "crypto";
import { ReactNode } from "react";

export interface IUser {
  id: UUID;
  name: string;
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IContextProps {
  children: ReactNode;
}
