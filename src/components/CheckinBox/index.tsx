import { useContext, useState } from "react";
import { IUser, useAuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { checkInStudent } from "../../services/api/students/requests";
import { checkInTrainer } from "../../services/api/trainer/requests";
import CheckinStudentModal from "../Modals/CheckinStudentModal";
import { CheckinBoxStyle } from "./style";

export interface IData {
  impediments: boolean | null;
  currentTask: string | null;
}

export const CheckinBox = () => {
  const {
    isDisable,
    isTrainer,
    checkinSchedule,
    showModal,
    setShowModal,
  } = useContext(UserContext);

  const {user} = useAuthContext()
  
  const [statusCheckin, setStatusCheckin] = useState("");

  const { start, end } = checkinSchedule;

  const checkin = async (info: IUser, data: IData) => {
    const {userId, is_trainer, name} = user;
    const date = new Date();
    const day = Number(date.getDate() - 1);
    const month = Number(date.getMonth() + 1);
    const currentAge = Number(date.getFullYear());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let checkinHour = +start.slice(0, 2);
    let checkoutHour = +end.slice(0, 2);
    let toleranceMin = 15;

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
    } else if (
      Number(hours) === checkoutHour &&
      Number(minutes) < toleranceMin
    ) {
      setStatusCheckin("succeed");
    } else if (
      Number(hours) >= checkoutHour &&
      Number(minutes) > toleranceMin
    ) {
      setStatusCheckin("late");
    }

    const body = {
      name: name,
      schedule: completHour,
      day: day,
      month: month,
      year: currentAge,
      impediments: data.impediments,
      currentTask: data.currentTask,
      status: statusCheckin,
      userId: userId,
    };

    console.log(body);
    is_trainer ? checkInTrainer(body, userId) : checkInStudent(body, userId);
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
                ? checkin(user, { impediments: null, currentTask: null })
                : setShowModal(true);
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
                ? checkin(user, { impediments: null, currentTask: null })
                : setShowModal(true);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      {showModal && <CheckinStudentModal checkin={checkin} />}
    </CheckinBoxStyle>
  );
};
