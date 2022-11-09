import styled from "styled-components";

export const EditFormStyle = styled.div`
  width: 100%;
  margin-top: 1.188rem;

  form {
    display: flex;
    flex-direction: column;

    .flexBox {
      div {
        &:last-child {
          display: flex;
          flex-direction: column;

          input {
            background-color: transparent;
            align-self: center;
            width: 320px;
            height: 50px;
          }
        }
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 0.438rem;
        text-align: center;
      }

      .inputStyle {
        font-size: 14px;
        font-weight: 400;
        height: 35px;
        width: 100%;
        padding: 10px 15px;
        background-color: var(--grey-4);
        border: 1px solid transparent;
        border-radius: 8px;
        :focus {
          border: 1px solid var(--grey-1);
        }

        &:nth-child(2) {
          margin-bottom: 0.313rem;
        }

        &:nth-child(5) {
          margin-bottom: 0.438rem;
        }

        &:nth-child(8) {
          margin-bottom: 0.438rem;
        }

        &:nth-child(10) {
          margin-bottom: 0.625rem;
        }

        &::-webkit-file-upload-button {
          font-size: 12px;
          font-weight: 900;
          width: 138px;
          height: 29px;
          border-radius: 8px;
          cursor: pointer;
        }

        &:disabled {
          &::-webkit-file-upload-button {
            display: none;
          }
        }
      }

      label {
        font-size: 14px;
        font-weight: 500;
        align-self: start;
        padding-bottom: 0.25rem;
      }

      small {
        align-self: flex-start;
        display: block;
        color: #ff0000;
        padding-top: 0.325rem;
        font-size: 12px;

        &:nth-child(6) {
          margin-bottom: 0.438rem;
        }

        &:nth-child(9) {
          margin-bottom: 0.438rem;
        }

        &:nth-child(11) {
          margin-bottom: 0.625rem;
        }
      }

      img {
        width: 171px;
        height: 171px;
        border-radius: 50%;
        border: 8px solid var(--grey-1);
        align-self: center;
        margin-top: 2.313rem;
        object-fit: cover;
      }
    }

    button {
      margin: 0 auto;
      margin-top: 2.5rem;
      width: 90%;
      max-width: 457px;
      height: 39px;
      font-size: 18px;
      font-weight: 900;
      color: #ffffff;
      background-color: var(--color-primary);
      border: none;
      border-radius: 8px;
      transition: 0.8s;

      &:disabled {
        background-color: var(--color-light);
      }

      &:hover:enabled {
        background-color: var(--color-secondary);
        transition: 0.8s;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 5.375rem;

    form {
      .flexBox {
        display: flex;
        justify-content: space-between;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 47%;

          &:last-child {
            input {
              background-color: var(--grey-4);
              width: 100%;
              height: 57px;
            }
          }

          h3 {
            font-size: 28px;
          }

          .inputStyle {
            font-size: 18px;
            font-weight: 400;
            height: 57px;

            &:nth-child(2) {
              margin-bottom: 1.438rem;
            }
          }

          label {
            font-size: 20px;
            padding-bottom: 0.25rem;
          }

          small {
            &:nth-child(6) {
              margin-bottom: 0.75rem;
            }

            &:nth-child(9) {
              margin-bottom: 0.625rem;
            }

            &:nth-child(11) {
              margin-bottom: 0;
            }
          }

          label {
            font-size: 20px;
            padding-bottom: 0.25rem;
          }

          img {
            width: 185px;
            height: 185px;
            border-radius: 50%;
            border: 8px solid var(--grey-1);
            align-self: center;
            margin-top: 2.313rem;
            object-fit: cover;
          }
        }
      }
      button {
        width: 100%;
        max-width: 378px;
        height: 50px;
        font-size: 22px;
      }
    }
  }
`;
