import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Api from "../../services/api/api";
import { UserTableStyle } from "./style";

interface ICheckinList {
  day: number;
  id: number;
  impediments: boolean;
  month: number;
  schedule: string;
  status: string;
  userId: number;
  year: number;
}

export const UserTable = () => {
  const [checkinList, setCheckinList] = useState<ICheckinList[] | null>(null);

  useEffect(() => {
    async function checkinUser() {
      const userId = Number(localStorage.getItem("@userId:SistemaDePontos"));
      try {
        const { data } = await Api.get(`/checkin?userId=${userId}`);
        setCheckinList(data);
      } catch (err) {
        console.log(err);
      }
    }
    checkinUser();
  }, []);

  return (
    <UserTableStyle>
      <table>
        <thead>
          <tr>
            <th>
              <h4>Data</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>

            <th>
              <h4>Horário</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>

            <th>
              <h4>Status</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {checkinList &&
            checkinList.map((checkin) => (
              <tr key={checkin.id}>
                <td>
                  <p>
                    {checkin.day}/{checkin.month}/{checkin.year}
                  </p>
                </td>
                <td>
                  <p>{checkin.schedule}</p>
                </td>
                <td>
                  {checkin.status === "succeed" ? (
                    <p className="allRigth">Conforme</p>
                  ) : (
                    <p className="somethingWrong">Atrasado</p>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </UserTableStyle>
  );
};
