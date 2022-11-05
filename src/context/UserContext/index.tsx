import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IProvidersProps } from "../../providers";

export interface IUserContextData {

checkinShedule: ICheckinData[];
  setCheckinShedule: Dispatch<SetStateAction<ICheckinData[]>>;
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

}

export interface ICheckinData {
    start: string;
    end: string;
}

export const UserContext = createContext<IUserContextData>(
    {} as IUserContextData
);

const UserProviders = ({ children }: IProvidersProps) => {

const [checkinShedule, setCheckinShedule] = useState<ICheckinData[]>([]);
  const [isTrainer, setIsTrainer] = useState(false);
  const [isDisable, setIsDisable] = useState({
    checkin: false,
    checkout: true,
  });

  const checkinVerification = (difference: number) => {
    if (difference > 30) {
      setIsDisable({ ...isDisable, checkin: true });
    }
  };

  const checkoutVerification = (difference: number) => {
    if (difference < 30) {
      setIsDisable({ checkin: true, checkout: false });
    } else {
      setIsDisable({ checkin: true, checkout: true });
    }
  };

  return (
    <UserContext.Provider
      value={{
        checkinShedule,
        setCheckinShedule,
        isTrainer,
        setIsTrainer,
        isDisable,
        setIsDisable,
        checkinVerification,
        checkoutVerification,
      }}
    >
      {children}
    </UserContext.Provider>
  );

};

export default UserProviders;
