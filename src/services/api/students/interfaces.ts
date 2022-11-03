export interface iGetStudentInfoResponse {
    name: string;
    email: string;
    isTrainer: boolean;
    id: number;
    userId: number;
}

export interface iCheckInStudentProps {
    schedule: string;
    day: number;
    month: number;
    year: number;
    status: string;
    impediments: boolean;
    currentTask: string;
}
export interface iCheckInStudentResponse {
    schedule: string;
    day: number;
    month: number;
    year: number;
    status: string;
    impediments: boolean;
    id: number;
    userId: number;
}

export interface iEditStudentInfoProps {
    oldEmail: string;
    newEmail: string;
    confirmNewEmail: string;
    nome: string;
    // photo: string;
}
export interface iEditStudentInfoResponse {
    name: string;
    email: string;
}
