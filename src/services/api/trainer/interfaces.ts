import { iCheckInStudentResponse } from "../students/interfaces";

export interface iCheckInTrainerProps {
    shedule: string;
    day: number;
    month: number;
    year: number;
    status: string;
}
export interface iCheckInTrainerResponse extends iCheckInStudentResponse {}

export interface iAddStudentProps {
    email: string;
    name: string;
    course_module: string;
}

export interface iAddStudentResponse {
    email: string;
    name: string;
    course_module: string;
    id: number;
    userId: number;
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
    photo: string;
}

export interface iEditTrainerInfoProps {
    name: string;
    oldEmail: string;
    email: string;
    confirmNewEmail: string;
    photo: string;
}

export interface iEditTrainerInfoResponse {
    email: string;
    name: string;
    // photo:string;
}
