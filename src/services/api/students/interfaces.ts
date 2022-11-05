export interface IGetStudentInfoResponse {

  email: string;
  name: string;
  is_trainer: boolean;
  course_module: "M3";
  class: "T13";
  id: number;
  userId: number;
}

export interface ICheckInStudentProps {
  schedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
  impediments: boolean;
  currentTask: string;
}
export interface ICheckInStudentResponse {
  schedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
  impediments: boolean;
  id: number;
  userId: number;
}

export interface IEditStudentInfoProps {
  email: string;
  name: string;
  avatar: string;

}
