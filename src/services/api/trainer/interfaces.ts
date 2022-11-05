import {
  ICheckInStudentProps,
  ICheckInStudentResponse,
  IEditStudentInfoProps,
  IGetStudentInfoResponse,
} from "../students/interfaces";

export interface ICheckInTrainerProps extends ICheckInStudentProps {}
export interface ICheckInTrainerResponse extends ICheckInStudentResponse {}

export interface IAddStudentProps {
  email: string;
  name: string;
  userId: number;
  studentId: number;
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
  course_module: string;
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
}

export interface IRegisterCheckInStudentsProps {
  name: string;
  id: number;
  studentId: number;
  lastRegister?: string;
  impediments?: boolean;
}

export interface IGetTrainerInfoResponse extends IGetStudentInfoResponse {}

export interface IEditTrainerInfoProps extends IEditStudentInfoProps {}
