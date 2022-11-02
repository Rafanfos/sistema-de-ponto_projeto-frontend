import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { HeaderDashboardStyle } from "./style";

interface iUserInfo {
  class: string;
  course_module: string;
  email: string;
  id: number;
  isTrainer: boolean;
  name: string;
  password: string;
  userId: number;
}

export const HeaderDashboard = () => {
  const [userInfo, setUserInfo] = useState<iUserInfo[] | null>(null);
  useEffect(() => {
    async function getInfo() {
      //   const token = localStorage.getItem("token");
      //   const userId = localStorage.getItem("userId");
      try {
        Api.defaults.headers.common.authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhcnJvc29AbWFpbC5jb20iLCJpYXQiOjE2Njc0Mjc5NDIsImV4cCI6MTY2NzQzMTU0Miwic3ViIjoiMyJ9.LBXbIkvYTq-i7Pft0q2tow3rL8LViMxkDJcjxDdJpNg"}`;
        const { data } = await Api.get("/users?id=3");
        setUserInfo(data);
      } catch (err) {
        console.log(err);
      }
    }
    getInfo();
  });

  return (
    <HeaderDashboardStyle>
      {userInfo &&
        userInfo.map((user) => (
          <div key={user.id}>
            <h1>
              Turma {user.class} - {user.course_module}
            </h1>

            <h2>Bem vindo {user.name}</h2>
            <p>31/10/2022</p>
          </div>
        ))}
    </HeaderDashboardStyle>
  );
};
