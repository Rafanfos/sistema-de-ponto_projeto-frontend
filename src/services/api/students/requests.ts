import api from "../api";
import {
    iCheckInStudentProps,
    iCheckInStudentResponse,
    iEditStudentInfoProps,
    iEditStudentInfoResponse,
    iGetStudentInfoResponse,
} from "./interfaces";

export const getStudentInfo = async (userId: number) => {
    const { data } = await api.get<iGetStudentInfoResponse>(
        `/users?userId=${userId}`
    );
    return data;
};

export const getCheckInStudent = async (
    userId: number
): Promise<iCheckInStudentResponse> => {
    const { data } = await api.get<iCheckInStudentResponse>(
        `/checkin?userId=${userId}`
    );
    return data;
};

export const checkInStudent = async (
    dataInput: iCheckInStudentProps
): Promise<iCheckInStudentResponse> => {
    const { data } = await api.post<iCheckInStudentResponse>(
        "/checkin",
        dataInput
    );
    return data;
};

export const editStudentInfo = async (
    id: number,
    dataInput: iEditStudentInfoProps
): Promise<iEditStudentInfoResponse> => {
    const { data } = await api.patch<iEditStudentInfoResponse>(
        `users/${id}`,
        dataInput
    );
    return data;
};
