import styled from "styled-components";

export const CheckinStudentModalStyled = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  > div {
    width: 70%;
    max-width: 809px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    background-color: #ffffff;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    padding: 10px 10px 10px 0;
    border-bottom: solid var(--grey-3);
  }

  label,
  span {
    font-size: 24px;
    font-weight: 400;
  }

  .input-activity {
    width: 60%;
  }

  .error {
    font-size: 16px;
    color: darkred;
  }

  .radios {
    display: flex;
    flex-direction: column;
    border-bottom: solid var(--grey-3);
    padding: 10px 10px 10px 0;
  }

  .yes-group,
  .no-group {
    display: flex;
    gap: 5px;

    label {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .buttons {
    display: flex;
    justify-content: end;
    gap: 20px;
  }

  button {
    padding: 10px;
    width: 120px;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.9s;
  }

  button:disabled {
    background-color: var(--grey-3);
    color: var(--grey-2);
  }

  .outline {
    background-color: #ffffff;
    border: solid var(--grey-1);
    color: var(--grey-1);
  }

  .outline:hover {
    background-color: #f4faff;
    border: solid var(--color-primary);
    color: var(--color-primary);
    transition: 0.9s;
  }

  .primary {
    background-color: var(--color-primary);
    border: none;
    color: #ffffff;
  }

  .primary:hover {
    background-color: var(--color-secondary);
  }

  @media (min-width: 768px) {
    > div {
      width: 40%;
    }
  }
`;
