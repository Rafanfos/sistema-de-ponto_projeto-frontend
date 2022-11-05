import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { checkInTrainer, getTrainerInfo } from "../../services/api/trainer/requests";
import { CheckinBoxStyle } from "./style";

export const CheckinBox = () => {
  const { isDisable } = useContext(UserContext);
  const [statusCheckin, setStatusCheckin] = useState("")
  
  const checkin = async () => {
    const date = new Date();
    const day = Number(date.getDate() - 1)
    const month = Number(date.getMonth() + 1)
    const currentAge = Number(date.getFullYear());
    let hours = String(date.getHours())
    let minutes = String(date.getMinutes())

    if(hours.length === 1){
      hours = `0${hours}`
    }
    if(minutes.length === 1){
      minutes = `0${minutes}`
    }

    const completHour = `${hours}:${minutes}`
    const userId = Number(localStorage.getItem("@UserId"))
    const infoTrainer = await getTrainerInfo(userId)

    if(Number(hours) === 9 && Number(minutes) < 15){
      setStatusCheckin('succeed')
    }else if(Number(hours) >= 9 && Number(minutes) > 15){
      setStatusCheckin("late")
    }else if(Number(hours) === 18 && Number(minutes) < 15){
      setStatusCheckin("succeed")
    }else if(Number(hours) >= 18 && Number(minutes) > 15){
      setStatusCheckin("late")
    }
    
    const body = {
      name: infoTrainer[0].name,
      shedule: completHour,
      day: day,
      month: month,
      year: currentAge,
      status: statusCheckin,
      userId: 2
    }

    checkInTrainer(body, userId)
  }

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
          <button disabled={isDisable.checkin} onClick={() => {
            checkin()
          }}>Checkin</button>
        </div>
        <div>
          <button disabled={isDisable.checkout} onClick={() => {
            checkin()
          }}>Checkout</button>
        </div>
      </div>
    </CheckinBoxStyle>
  );
};
