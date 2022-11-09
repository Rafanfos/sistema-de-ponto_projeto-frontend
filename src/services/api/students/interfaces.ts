export interface IGetStudentInfoResponse {
  email: string;
  name: string;
  is_trainer: boolean;
  course_module: "M3";
  class: "T13";
  id: number;
  userId: number;
  avatar?: any;
}

export interface ICheckInStudentProps {
  name: string;
  schedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
  impediments: boolean | null;
  currentTask: string | null;
}

export interface ICheckInStudentResponse {
  schedule: string;
  day: number;
  month: number;
  year: number;
  status: string;
  impediments: boolean;
  currentTask: string;
  id: number;
  userId: number;
}

export interface IEditStudentInfoProps {
  email: string;
  name: string;
  avatar?: any;
  oldEmail?: string;
  confirmNewEmail?: string;
}
