import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { checkInStudent } from "../../services/api/students/requests";
import { IGetTrainerInfoResponse } from "../../services/api/trainer/interfaces";
import { checkInTrainer } from "../../services/api/trainer/requests";
import { CheckinBoxStyle } from "./style";

interface IData {
  impediments: boolean | null;
  currentTask: string | null;
}

export const CheckinBox = () => {
  const { isDisable, isTrainer, checkinSchedule, userInfo } =
    useContext(UserContext);
  const [statusCheckin, setStatusCheckin] = useState("");

  const { start, end } = checkinSchedule;

  const checkin = async (info: IGetTrainerInfoResponse[], data: IData) => {
    const userId = Number(localStorage.getItem("@UserId"));
    const date = new Date();
    const day = Number(date.getDate() - 1);
    const month = Number(date.getMonth() + 1);
    const currentAge = Number(date.getFullYear());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let checkinHour = +start.slice(0, 2);
    let checkoutHour = +end.slice(0, 2);
    let toleranceMin = 15

    if (hours.length === 1) {
      hours = `0${hours}`;
    }
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }

    const completHour = `${hours}:${minutes}`;

    if (Number(hours) === checkinHour && Number(minutes) < toleranceMin) {
      setStatusCheckin("succeed");
    } else if (Number(hours) >= checkinHour && Number(minutes) > toleranceMin) {
      setStatusCheckin("late");
    } else if (Number(hours) === checkoutHour && Number(minutes) < toleranceMin) {
      setStatusCheckin("succeed");
    } else if (Number(hours) >= checkoutHour && Number(minutes) > toleranceMin) {
      setStatusCheckin("late");
    }

    const body = {
      name: info[0].name,
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
          <p>{start}</p>
        </div>

        <div>
          <h3>
            Checkin da Tarde <span>|</span>
          </h3>
          <p>{end}</p>
        </div>
      </div>

      <div className="checkinButton">
        <div>
          <button
            disabled={isDisable.checkin}
            onClick={() => {
              isTrainer
                ? checkin(userInfo, { impediments: null, currentTask: null })
                : console.log(userInfo);
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
                ? checkin(userInfo, { impediments: null, currentTask: null })
                : console.log(userInfo);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </CheckinBoxStyle>
  );
};
