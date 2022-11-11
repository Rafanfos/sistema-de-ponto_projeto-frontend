import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { IProvidersProps } from "../../providers";
import api from "../../services/api/api";
import { ICheckInStudentResponse } from "../../services/api/students/interfaces";
import {
  getCheckInStudents,
  getTrainerInfo,
} from "../../services/api/trainer/requests";

export interface ICheckinContextData {
  checkinSchedule: ICheckinData;
  setCheckinSchedule: Dispatch<SetStateAction<ICheckinData>>;
  isTrainer: boolean;
  setIsTrainer: Dispatch<SetStateAction<boolean>>;
  isDisable: {
    checkin: boolean;
    checkout: boolean;
  };
  setIsDisable: Dispatch<
    SetStateAction<{
      checkin: boolean;
      checkout: boolean;
    }>
  >;
  checkinVerification: (day: number, month: number, year: number) => void;
  checkoutVerification: (day: number, month: number, year: number) => void;
  // userInfo: IGetTrainerInfoResponse[];
  // setUserInfo: Dispatch<SetStateAction<IGetTrainerInfoResponse[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  editUserInfo: (data: IEditTrainerInfoProps) => Promise<void>;
  userAvatar: string | undefined;
  setUserAvatar: Dispatch<SetStateAction<string | undefined>>;
  getUserInfo: () => Promise<void>;
  myCheckins: ICheckInStudentResponse[];
  setMyCheckins: Dispatch<SetStateAction<ICheckInStudentResponse[]>>;
  studentsCheckin: ICheckInStudentResponse[];
  setStudentsCheckin: Dispatch<SetStateAction<ICheckInStudentResponse[]>>;
}

export interface ICheckinData {
  start: string;
  end: string;
}

export interface IEditTrainerInfoProps {
  name?: string;
  oldEmail?: string;
  email?: string;
  confirmNewEmail?: string;
  avatar?: any;
}

export const CheckinContext = createContext<ICheckinContextData>(
  {} as ICheckinContextData
);

const CheckinProviders = ({ children }: IProvidersProps) => {
  const [checkinSchedule, setCheckinSchedule] = useState<ICheckinData>(
    {} as ICheckinData
  );
  const [isTrainer, setIsTrainer] = useState(false);
  const [isDisable, setIsDisable] = useState({
    checkin: true,
    checkout: true,
  });
  // const [userInfo, setUserInfo] = useState<IGetTrainerInfoResponse[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [userAvatar, setUserAvatar] = useState<string | undefined>(undefined);
  const [myCheckins, setMyCheckins] = useState<ICheckInStudentResponse[]>([]);
  const [studentsCheckin, setStudentsCheckin] = useState<
    ICheckInStudentResponse[]
  >([]);

  const checkinVerification = async (
    day: number,
    month: number,
    year: number
  ) => {
    const userId = localStorage.getItem("@userId:SistemaDePontos") || "";
    const token = localStorage.getItem("@token:SistemaDePontos");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const checkin = await getCheckInStudents(+userId, day, month, year);
    checkin.length
      ? setIsDisable({ checkin: true, checkout: true })
      : setIsDisable({ checkin: false, checkout: true });
  };

  const checkoutVerification = async (
    day: number,
    month: number,
    year: number
  ) => {
    const userId = localStorage.getItem("@userId:SistemaDePontos") || "";
    const token = localStorage.getItem("@token:SistemaDePontos");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const checkout = await getCheckInStudents(+userId, day, month, year);
    checkout.length > 1
      ? setIsDisable({ checkin: true, checkout: true })
      : setIsDisable({ checkin: true, checkout: false });
  };

  const getUserInfo = async () => {
    const token = localStorage.getItem("@token:SistemaDePontos");

    const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));
    api.defaults.headers.authorization = `Bearer ${token}`;

    if (userId) {
      const info = await getTrainerInfo(userId);
      setUserAvatar(info[0].avatar);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const editUserInfo = async (data: IEditTrainerInfoProps) => {
    try {
      const userId = localStorage.getItem("@userId:SistemaDePontos");
      api.patch(`/users/${userId}`, data);
      toast.success("Alteração feita com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CheckinContext.Provider
      value={{
        checkinSchedule,
        setCheckinSchedule,
        isTrainer,
        setIsTrainer,
        isDisable,
        setIsDisable,
        checkinVerification,
        checkoutVerification,
        showModal,
        setShowModal,
        editUserInfo,
        userAvatar,
        setUserAvatar,
        getUserInfo,
        myCheckins,
        setMyCheckins,
        studentsCheckin,
        setStudentsCheckin,
      }}
    >
      {children}
    </CheckinContext.Provider>
  );
};

export default CheckinProviders;

export const useCheckinContext = () => {
  const context = useContext(CheckinContext);

  return context;
};
