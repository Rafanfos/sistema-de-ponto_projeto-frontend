import { IGetStudentInfoResponse } from "../students/interfaces";

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginResponse{
  accessToken: string;
  user: IGetStudentInfoResponse;
}
