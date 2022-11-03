import { iCheckInStudentResponse } from "../students/interfaces";

export interface iCheckInTrainerResponse extends iCheckInStudentResponse {}

export interface iAddStudentResponse {
    email: string;
    name: string;
    course_module: string;
    id: number;
    userId: number;
}

export interface iAddStudentProps {
    email: string;
    name: string;
    course_module: string;
}

export interface iGetStudentsResponse {
    email: string;
    name: string;
    course_module: string;
    id: number;
    userId: number;
}

export interface iGetTrainerInfoResponse {
    email: string;
    isTrainer: boolean;
    id: number;
    userId: number;
}

export interface iEditTrainerInfoProps {
    name: string;
    oldEmail: string;
    newEmail: string;
    confirmNewEmail: string;
    // photo: string
}
export interface iEditTrainerInfoResponse {
    email: string;
    name: string;
    // photo:string;
}
