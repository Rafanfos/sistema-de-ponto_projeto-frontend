import {
  ICheckInStudentResponse,
  IEditStudentInfoProps,
} from "../students/interfaces";

export interface ICheckInTrainerProps {
  shedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
}
export interface ICheckInTrainerResponse extends ICheckInStudentResponse {}

export interface IAddStudentProps {
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
  course_module: string;
  id: number;
  userId: number;
}

export interface IGetTrainerInfoResponse extends IGetStudentsResponse {}

export interface IEditTrainerInfoProps extends IEditStudentInfoProps {}
