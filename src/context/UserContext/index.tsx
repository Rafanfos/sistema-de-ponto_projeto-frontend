import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IProvidersProps } from "../../providers";
import { IGetTrainerInfoResponse } from "../../services/api/trainer/interfaces";

export interface IUserContextData {
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
  checkinVerification: (difference: number) => void;
  checkoutVerification: (difference: number) => void;
  userInfo: IGetTrainerInfoResponse[];
  setUserInfo: Dispatch<SetStateAction<IGetTrainerInfoResponse[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface ICheckinData {
  start: string;
  end: string;
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

const UserProviders = ({ children }: IProvidersProps) => {
  const [checkinSchedule, setCheckinSchedule] = useState<ICheckinData>(
    {} as ICheckinData
  );
  const [isTrainer, setIsTrainer] = useState(false);
  const [isDisable, setIsDisable] = useState({
    checkin: true,
    checkout: true,
  });
  const [userInfo, setUserInfo] = useState<IGetTrainerInfoResponse[]>([]);
  const toleranceMin = 20;
  const [showModal, setShowModal] = useState(false);

  const checkinVerification = (difference: number) => {
    if (difference < toleranceMin) {
      setIsDisable({ ...isDisable, checkin: false });
    }
  };

  const checkoutVerification = (difference: number) => {
    if (difference < toleranceMin) {
      setIsDisable({ checkin: true, checkout: false });
    }
  };

  return (
    <UserContext.Provider
      value={{
        checkinSchedule,
        setCheckinSchedule,
        isTrainer,
        setIsTrainer,
        isDisable,
        setIsDisable,
        checkinVerification,
        checkoutVerification,
        userInfo,
        setUserInfo,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProviders;
