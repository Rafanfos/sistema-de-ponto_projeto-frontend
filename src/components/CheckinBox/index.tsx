import { useState } from "react";
import { IUser, useAuthContext } from "../../context/AuthContext";
import { useCheckinContext } from "../../context/CheckinContext";
import api from "../../services/api/api";
import { registerPoint } from "../../services/api/commom/requests";
import { checkInStudent } from "../../services/api/students/requests";
import {
  checkInTrainer,
  getCheckInStudents,
} from "../../services/api/trainer/requests";
import CheckinStudentModal from "../Modals/CheckinStudentModal";
import { CheckinBoxStyle } from "./style";

export interface IData {
  impediments: boolean | null;
  currentTask: string | null;
}

export const CheckinBox = () => {
  const {
    isDisable,
    setIsDisable,
    isTrainer,
    checkinSchedule,
    showModal,
    setShowModal,
  } = useCheckinContext();

  const { user } = useAuthContext();

  const [statusCheckin, setStatusCheckin] = useState("");

  const { start, end } = checkinSchedule;

  const checkin = async (info: IUser, data: IData) => {
    const { userId, name } = user;

    const date = new Date();
    const day = Number(date.getDate());
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

    try {
      isTrainer ? checkInTrainer(body, userId) : checkInStudent(body, userId);
      setIsDisable({ checkin: true, checkout: true });
    } catch {}
    +hours >= checkoutHour &&
      pointRegister(userId, day, month, currentAge, info.name);
  };
  const pointRegister = async (
    userId: number,
    day: number,
    month: number,
    year: number,
    name: string
  ) => {
    const userCheckins = await getCheckInStudents(userId, day, month, year);
    const token = localStorage.getItem("@token:SistemaDePontos");
    api.defaults.headers.authorization = `Bearer ${token}`;
    if (userCheckins.length > 1) {
      const data = {
        name: name,
        day: day,
        month: month,
        year: year,
        status: "attend",
        userId: userId,
      };
      await registerPoint(data);
    } else {
      const data = {
        name: name,
        day: day,
        month: month,
        year: year,
        status: "missing",
        userId: userId,
      };
      await registerPoint(data);
    }
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
