import {
  IEditStudentInfoProps,
  IGetStudentInfoResponse,
} from "../students/interfaces";

export interface ICheckInTrainerProps {
  name: string;
  schedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
  impediments: boolean | null;
  currentTask: string | null;
}
export interface ICheckInTrainerResponse extends ICheckInTrainerProps {}

export interface IAddStudentProps {
  email: string;
  name: string;
  userId: number;
  studentId: number;
  lastRegister: string;
  impediments: boolean;
  currentTask: string;
  percentage: string;
}

export interface IAddStudentResponse {
  email: string;
  name: string;
  course_module: string;
  id: number;
  userId: number;
}

export interface IGetStudentsResponse {
  studentId: number;
  email: string;
  name: string;
  lastRegister: string;
  impediments: boolean;
  userId: number;
  id: number;
  avatar?: string;
  percentage: string;
  currentTask: string;
}

export interface IAddStudentResponse {
  email: string;
  name: string;
  course_module: string;
  id: number;
  userId: number;
}

export interface IGetStudentsResponse {
  email: string;
  name: string;
  id: number;
  studentId: number;
  userId: number;
  avatar?: string;
}

export interface IRegisterCheckInStudentsProps {
  name: string;
  id: number;
  studentId: number;
  lastRegister?: string;
  impediments?: boolean;
  avatar?: string;
}

export interface IGetTrainerInfoResponse extends IGetStudentInfoResponse {}

export interface IEditTrainerInfoProps extends IEditStudentInfoProps {}
