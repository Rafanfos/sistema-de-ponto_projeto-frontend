import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Api from "../../services/api/api";
import { UserTableStyle } from "./style";

interface iCheckinList {
    day: number;
    id: number;
    impediments: boolean;
    month: number;
    shedule: string;
    status: string;
    userId: number;
    year: number;
}

export const UserTable = () => {
    const [checkinList, setCheckinList] = useState<iCheckinList[] | null>(null);

    useEffect(() => {
        async function checkinUser() {
            // const token = localStorage.getItem("token");
            //   const userId = localStorage.getItem("userId");

            try {
                Api.defaults.headers.common.authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhcnJvc29AbWFpbC5jb20iLCJpYXQiOjE2Njc0Mjc5NDIsImV4cCI6MTY2NzQzMTU0Miwic3ViIjoiMyJ9.LBXbIkvYTq-i7Pft0q2tow3rL8LViMxkDJcjxDdJpNg"}`;
                const { data } = await Api.get("/checkin?userId=3");
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
                                        {checkin.day}/{checkin.month}/
                                        {checkin.year}
                                    </p>
                                </td>
                                <td>
                                    <p>{checkin.shedule}</p>
                                </td>
                                <td>
                                    {checkin.status === "succeed" ? (
                                        <p className="allRigth">Conforme</p>
                                    ) : (
                                        <p className="somethingWrong">
                                            Faltante
                                        </p>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </UserTableStyle>
    );
};
