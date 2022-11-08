import api from "../api";
import {
  IGetCheckinPointsResponse,
  ILoginProps,
  ILoginResponse,
  IRegisterPointProps,
} from "./interface";

export const login = async (dataInput: ILoginProps) => {
  const { data } = await api.post<ILoginResponse>("login", dataInput);
  api.defaults.headers.authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const registerPoint = async (dataInput: IRegisterPointProps) => {
  await api.post("pointsCheckin", dataInput);
};

export const getCheckinPoints = async (userId: number) => {
  const { data } = await api.get<IGetCheckinPointsResponse[]>(
    `pointsCheckin/?userId=${userId}`
  );
  return data;
};
