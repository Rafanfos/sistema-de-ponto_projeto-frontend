import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CheckinBoxStyle } from "./style";

export const CheckinBox = () => {
  const { isDisable } = useContext(UserContext);

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
          <button disabled={isDisable.checkin}>Checkin</button>
        </div>
        <div>
          <button disabled={isDisable.checkout}>Checkout</button>
        </div>
      </div>
    </CheckinBoxStyle>
  );
};
