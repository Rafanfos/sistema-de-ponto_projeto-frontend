/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useCheckinContext } from "../../../context/CheckinContext";
import api from "../../../services/api/api";
import { UserTableStyle } from "./style";

interface IUserTableProps {
  userIdProps: number;
}
export interface IDates {
  day: number;
  month: number;
}

export interface IDatesStatus {
  status: string;
}
export const UserTable = ({ userIdProps }: IUserTableProps) => {
  const { myCheckins, setMyCheckins } = useCheckinContext();
  const [sortedCheckinsDate, setSortedCheckinsDate] = useState(true);
  const [sortedCheckinsStatus, setSortedCheckinsStatus] = useState(true);

  useEffect(() => {
    async function checkinUser() {
      try {
        const { data } = await api.get(`/checkin?userId=${userIdProps}`);
        setMyCheckins(data);
      } catch (err) {
        console.log(err);
      }
    }
    checkinUser();
  }, []);

  const sortCallbackDates = (a: IDates, b: IDates) => {
    if (sortedCheckinsDate) {
      setSortedCheckinsStatus(false);
      setSortedCheckinsDate(false);
      if (a.day > b.day && a.month >= b.month) {
        return -1;
      }
      if (a.day < b.day && a.month <= b.month) {
        return 1;
      }
      return 0;
    } else {
      setSortedCheckinsDate(true);
      setSortedCheckinsStatus(false);

      if (a.day < b.day && a.month <= b.month) {
        return -1;
      }
      if (a.day > b.day && a.month >= b.month) {
        return 1;
      }
      return 0;
    }
  };

  const sortingDates = () => {
    const sorting = myCheckins.sort(sortCallbackDates);
    setMyCheckins(sorting);
  };
  function sortCallbackStatus(a: IDatesStatus, b: IDatesStatus) {
    if (sortedCheckinsStatus) {
      setSortedCheckinsStatus(false);
      setSortedCheckinsDate(false);
      if (a.status > b.status) {
        return -1;
      }
      if (a.status < b.status) {
        return 1;
      }
      return 0;
    } else {
      setSortedCheckinsStatus(true);
      setSortedCheckinsDate(false);

      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
      return 0;
    }
  }
  const sortingStatus = () => {
    const sorting = myCheckins.sort(sortCallbackStatus);
    setMyCheckins(sorting);
  };

  return (
    <UserTableStyle>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortingDates()}>
              <h4>Data</h4>
              <button>
                {sortedCheckinsDate ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </button>
            </th>

            <th>
              <h4>Horário</h4>
            </th>

            <th onClick={() => sortingStatus()}>
              <h4>Status</h4>
              <button>
                {sortedCheckinsStatus ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {myCheckins &&
            myCheckins.map((checkin) => {
              const { id, day, month, year, schedule, status } = checkin;
              return (
                <tr key={id}>
                  <td>
                    <p>
                      {day}/{month}/{year}
                    </p>
                  </td>
                  <td>
                    <p>{schedule}</p>
                  </td>
                  <td>
                    {status === "succeed" ? (
                      <p className="allRigth">Conforme</p>
                    ) : (
                      <p className="somethingWrong">Atrasado</p>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </UserTableStyle>
  );
};
