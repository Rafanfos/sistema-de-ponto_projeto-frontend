import styled from "styled-components";

export const CheckinBoxStyle = styled.div`
  margin-top: 1rem;
  width: 100%;
  background-color: var(--grey-3);

  .checkinInfo {
    display: flex;
    text-align: center;
    justify-content: space-between;

    div {
      padding: 1rem 0 1rem 0;
      width: 40%;

      &:first-child {
        margin-left: 1.813rem;
      }

      &:last-child {
        margin-right: 1.813rem;
      }

      h3,
      p {
        font-weight: 500;
        font-size: 14px;
      }

      span {
        display: none;
      }
    }
  }

  .checkinButton {
    padding: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom: 5px solid var(--grey-3);

    div {
      width: 40%;

      button {
        height: 30px;
        width: 100%;
        border-radius: 8px;
        font-size: 10px;
        font-weight: 900;
        color: #ffffff;
        border: none;
        background-color: var(--color-primary);
        transition: 0.9s;

        &:hover {
          transition: 0.9s;
          background-color: var(--color-secondary);
        }

        &:disabled {
          background-color: var(--grey-3);
          color: var(--grey-2);
        }
      }

      &:first-child {
        margin-left: 1.813rem;
      }

      &:last-child {
        margin-right: 1.813rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 2.5rem;
    width: 80%;
    max-width: 1174px;

    .checkinInfo {
      display: flex;
      text-align: center;
      justify-content: space-between;

      div {
        padding: 0.375rem 0 0.375rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        h3,
        p {
          font-size: 18px;
          font-weight: 500;
          margin-right: 6px;
        }

        span {
          display: inline-block;
        }
      }
    }

    .checkinButton {
      height: 82px;
      border-bottom: 3px solid var(--grey-3);

      div {
        button {
          height: 39px;
          width: 100%;
          max-width: 436px;
          border-radius: 8px;
          font-size: 16px;
        }
      }
    }
  }
`;
