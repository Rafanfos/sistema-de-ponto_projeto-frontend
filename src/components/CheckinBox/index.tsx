import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { IGetStudentInfoResponse } from "../../services/api/students/interfaces";
import { checkInStudent } from "../../services/api/students/requests";
import { IGetTrainerInfoResponse } from "../../services/api/trainer/interfaces";
import { checkInTrainer } from "../../services/api/trainer/requests";
import { CheckinBoxStyle } from "./style";

interface ICheckinBoxProps {
  infoTrainer?: IGetTrainerInfoResponse[];
  infoStudent?: IGetStudentInfoResponse[];
}

interface IData {
  impediments: boolean | null;
  currentTask: string | null;
}

export const CheckinBox = ({ infoTrainer, infoStudent }: ICheckinBoxProps) => {
  const { isDisable, isTrainer } = useContext(UserContext);
  const [statusCheckin, setStatusCheckin] = useState("");

  const checkin = async (
    info: IGetTrainerInfoResponse[] | undefined,
    data: IData
  ) => {
    const userId = Number(localStorage.getItem("@UserId"));
    const date = new Date();
    const day = Number(date.getDate() - 1);
    const month = Number(date.getMonth() + 1);
    const currentAge = Number(date.getFullYear());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());

    if (hours.length === 1) {
      hours = `0${hours}`;
    }
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }

    const completHour = `${hours}:${minutes}`;

    if (Number(hours) === 9 && Number(minutes) < 15) {
      setStatusCheckin("succeed");
    } else if (Number(hours) >= 9 && Number(minutes) > 15) {
      setStatusCheckin("late");
    } else if (Number(hours) === 18 && Number(minutes) < 15) {
      setStatusCheckin("succeed");
    } else if (Number(hours) >= 18 && Number(minutes) > 15) {
      setStatusCheckin("late");
    }

    const body = {
      name: info? info[0].name : null,
      schedule: completHour,
      day: day,
      month: month,
      year: currentAge,
      impediments: data.impediments,
      currentTask: data.currentTask,
      status: statusCheckin,
      userId: userId,
    };

    isTrainer ? checkInTrainer(body, userId) : checkInStudent(body, userId);
  };

  return (
    <CheckinBoxStyle>
      <div className="checkinInfo">
        <div>
          <h3>
            Checkin da Manhã <span>|</span>
          </h3>
          <p>09:00</p>
        </div>

        <div>
          <h3>
            Checkin da Tarde <span>|</span>
          </h3>
          <p>14:00</p>
        </div>
      </div>

      <div className="checkinButton">
        <div>
          <button
            disabled={isDisable.checkin}
            onClick={() => {
              isTrainer
                ? checkin(infoTrainer, { impediments: null, currentTask: null })
                : console.log(infoStudent);
            }}
          >
            Checkin
          </button>
        </div>
        <div>
          <button
            disabled={isDisable.checkout}
            onClick={() => {
              isTrainer
                ? checkin(infoTrainer, { impediments: null, currentTask: null })
                : console.log(infoStudent);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </CheckinBoxStyle>
  );
};
