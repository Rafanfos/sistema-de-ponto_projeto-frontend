import styled from "styled-components";

export const DeleteStudentModalStyle = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .containerDeleModal {
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
      font-size: 22px;
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
    div {
      display: flex;
      justify-content: center;
      gap: 22px;
      width: 100%;

      padding-bottom: 30px;

      @media (min-width: 768px) {
        gap: 32px;
        padding-bottom: 65px;
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
      .btnDelete {
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
`;
