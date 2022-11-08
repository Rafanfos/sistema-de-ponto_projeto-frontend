import api from "../api";
import { ICheckInStudentResponse } from "../students/interfaces";
import {
  IAddStudentProps,
  IAddStudentResponse,
  ICheckInTrainerProps,
  ICheckInTrainerResponse,
  IEditTrainerInfoProps,
  IGetStudentsResponse,
  IGetTrainerInfoResponse,
  IRegisterCheckInStudentsProps,
} from "./interfaces";

export const checkInTrainer = async (
  dataCheckIn: ICheckInTrainerProps,
  userId: number
): Promise<ICheckInTrainerResponse> => {
  const { data } = await api.post<ICheckInTrainerResponse>("checkin", {
    ...dataCheckIn,
    userId: userId,
  });
  return data;
};

export const addStudent = async (
  dataInput: IAddStudentProps
): Promise<IAddStudentResponse> => {
  const { data } = await api.post<IAddStudentResponse>("students", dataInput);
  return data;
};

export const deleteStudent = async (id: number) => {
  await api.delete<void>(`students/${id}`);
};

export const getStudents = async (
  userId: number
): Promise<IGetStudentsResponse[]> => {
  const { data } = await api.get<IGetStudentsResponse[]>(
    `students?userId=${userId}`
  );
  return data;
};

export const getCheckInStudents = async (
  userId: number,
  day?: number,
  month?: number,
  year?: number
): Promise<ICheckInStudentResponse[]> => {
  const { data } = await api.get<ICheckInStudentResponse[]>(
    `checkin?userId=${userId}`,
    {
      params: { day: day, month: month, year: year },
    }
  );
  return data;
};

export const getTrainerInfo = async (
  userId: number
): Promise<IGetTrainerInfoResponse[]> => {
  const { data } = await api.get<IGetTrainerInfoResponse[]>(
    `users?userId=${userId}`
  );
  return data;
};

export const editTrainerInfo = async (
  id: number,
  dataInput: IEditTrainerInfoProps
): Promise<void> => {
  const { data } = await api.patch<void>(`users/${id}`, dataInput);
  return data;
};

export const registerStudentCheckIn = async (
  studentId: number,
  dataInput: IRegisterCheckInStudentsProps
) => {
  await api.patch(`/students/${studentId}`, dataInput);
};
