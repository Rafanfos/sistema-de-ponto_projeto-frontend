import styled from "styled-components";

export const EditFormStyle = styled.div`
  width: 100%;
  margin-top: 5.375rem;

  form {
    display: flex;
    flex-direction: column;

    .flexBox {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 47%;

        h3 {
          font-size: 28px;
          font-weight: 500;
          padding-bottom: 1.438rem;
          text-align: center;
        }

        .inputStyle {
          font-size: 18px;
          font-weight: 400;
          height: 57px;
          width: 100%;

          &:nth-child(2) {
            margin-bottom: 1.438rem;
          }

          &:nth-child(5) {
            margin-bottom: 0.75rem;
          }

          &:nth-child(7) {
            margin-bottom: 0.625rem;
          }

          &:nth-child(13) {
            padding-top: 0.625rem;
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
          font-size: 20px;
          font-weight: 500;
          align-self: start;
          padding-bottom: 0.25rem;
        }

        img {
          width: 185px;
          height: 185px;
          border-radius: 50%;
          border: 8px solid var(--grey-1);
          margin-top: 2.313rem;
          object-fit: cover;
        }
      }
    }

    button {
      margin: 0 auto;
      margin-top: 2.5rem;
      width: 60%;
      max-width: 378px;
      height: 50px;
      font-size: 22px;
      font-weight: 900;
      color: #ffffff;
      background-color: var(--color-primary);
      border: none;
      border-radius: 8px;
    }
  }
`;
