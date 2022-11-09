import styled from "styled-components";

export const AddStudentModalStyle = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .containerAddModal {
    width: 90%;
    max-width: 809px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-4);
    border-radius: 5px;
    

    h2 {
      width: 90%;

      color: var(--grey-1);
      font-weight: 700;
      font-size: 20px;
      text-align: start;

      padding-bottom: 17px;
      padding-top: 27px;
      margin-bottom: 20px;

      border-bottom: 3px solid var(--grey-3);
      @media (min-width: 768px) {
        font-size: 32px;
        padding-bottom: 27px;
        margin-bottom: 37px;
      }
    }
    form {
      width: 90%;
      margin: 0 auto;

      align-self: flex-start;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 45%;
        display: flex;
        flex-direction: column;
      }
      input,
      select {
        width: 100%;
        max-width: 351px;
        margin-bottom: 17px;

        border: none;
        background-color: var(--grey-3);
        border-radius: 8px;
        height: 35px;
        padding-left: 10px;

        font-size: 10px;

        &::placeholder {
          color: var(--grey-2);
          font-weight: 400;
          font-size: 10px;

          @media (min-width: 768px) {
            font-size: 18px;
          }
        }
        @media (min-width: 768px) {
          margin-bottom: 27px;
          border-radius: 15px;
          height: 70px;
          padding-left: 25px;

          font-size: 18px;
        }
      }

      label {
        color: var(--grey-1);
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 2px;

        @media (min-width: 768px) {
          font-size: 24px;
          margin-bottom: 4px;
        }
      }

      .btns {
        width: 100%;
        flex-direction: row;
        gap: 22px;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;

        @media (min-width: 768px) {
          gap: 32px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        button {
          max-width: 344px;
          width: 45%;
          border-radius: 8px;
          padding: 3px;
          font-weight: 900;
          font-size: 15px;

          @media (min-width: 768px) {
            font-size: 22px;
            padding: 7px;
          }
        }

        .btnAdd {
          background-color: var(--color-primary);
          border: none;

          color: var(--grey-4);

          &:hover {
            transition: 0.9s;
            background-color: var(--color-secondary);
          }
        }

        .btnCancel {
          background-color: var(--grey-4);
          border: 3px solid var(--grey-1);

          color: var(--grey-1);

          &:hover {
            transition: 0.9s;
            color: var(--color-primary);
            border: 3px solid var(--color-primary);
          }
        }
      }
    }
    
  }
`;
