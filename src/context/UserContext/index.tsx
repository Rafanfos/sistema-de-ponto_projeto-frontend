import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IProvidersProps } from "../../providers";

export interface IUserContextData {
    checkinShedule: ICheckinData[];
    setCheckinShedule: Dispatch<SetStateAction<ICheckinData[]>>;
    isTrainer: boolean;
    setIsTrainer: Dispatch<SetStateAction<boolean>>;
    isDisable: boolean;
    setIsDisable: Dispatch<SetStateAction<boolean>>;
    checkinVerification: (difference: number) => boolean;
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
    const [isDisable, setIsDisable] = useState(false);

    const checkinVerification = (difference: number) => {
        if (difference < 30) {
            return false;
        } else {
            return true;
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;
