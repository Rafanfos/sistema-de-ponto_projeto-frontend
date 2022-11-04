import api from "../api";
import { ILoginProps, ILoginResponse } from "./interface";

export const login = async (dataInput: ILoginProps) => {
  const { data } = await api.post<ILoginResponse>("login", dataInput);
  return data;
};
