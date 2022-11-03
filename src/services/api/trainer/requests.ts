import api from "../api";
import {
    iAddStudentProps,
    iAddStudentResponse,
    iCheckInTrainerProps,
    iCheckInTrainerResponse,
    iEditTrainerInfoProps,
    iEditTrainerInfoResponse,
    iGetStudentsResponse,
    iGetTrainerInfoResponse,
} from "./interfaces";

export const checkInTrainer = async (
    dataCheckIn: iCheckInTrainerProps,
    userId: number
): Promise<iCheckInTrainerResponse> => {
    const { data } = await api.post<iCheckInTrainerResponse>("/checkin", {
        ...dataCheckIn,
        userId: userId,
    });
    return data;
};

export const addStudent = async (
    dataInput: iAddStudentProps
): Promise<iAddStudentResponse> => {
    const { data } = await api.post<iAddStudentResponse>(
        "/students",
        dataInput
    );
    return data;
};

export const deleteStudent = async (id: number) => {
    await api.delete<void>(`/students/${id}`);
};

export const getStudents = async (
    userId: number
): Promise<iGetStudentsResponse[]> => {
    const { data } = await api.get<iGetStudentsResponse[]>(
        `/students?${userId}`
    );
    return data;
};

export const getTrainerInfo = async (
    userId: number
): Promise<iGetTrainerInfoResponse> => {
    const { data } = await api.get<iGetTrainerInfoResponse>(
        `/users?userId=${userId}`
    );
    return data;
};

export const editTrainerInfo = async (
    id: number,
    dataInput: iEditTrainerInfoProps
): Promise<iEditTrainerInfoResponse> => {
    const { data } = await api.patch<iEditTrainerInfoResponse>(
        `/users/${id}`,
        dataInput
    );
    return data;
};
