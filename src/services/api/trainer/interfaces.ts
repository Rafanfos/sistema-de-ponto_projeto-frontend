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
  id: number;
  studentId: number;
  userId: number;
}

export interface IGetTrainerInfoResponse extends IGetStudentsResponse {}

export interface IEditTrainerInfoProps extends IEditStudentInfoProps {}

export interface IRegisterCheckInStudentsProps {
  name: string;
  id: number;
  studentId: number;
  lastRegister?: string;
  impediments?: boolean;
}
