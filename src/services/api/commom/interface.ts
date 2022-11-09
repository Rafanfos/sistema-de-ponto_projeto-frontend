import { IGetStudentInfoResponse } from "../students/interfaces";

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: IGetStudentInfoResponse;
}

export interface IRegisterPointProps {
  name: string;
  day: number;
  month: number;
  year: number;
  status: string;
  userId: number;
}

export interface IGetCheckinPointsResponse extends IRegisterPointProps {
  id: number;
}
