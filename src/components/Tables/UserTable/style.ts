import styled from "styled-components";

export const UserTableStyle = styled.div`
  overflow-x: auto;
  max-width: 480px;
  width: 100%;

  &::-webkit-scrollbar {
    height: 8px;
    background-color: var(--grey-3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 8px;
  }

  table {
    width: 100%;
    max-width: 727px;
    margin: 0 auto;
    thead {
      width: 100%;
      tr {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: var(--grey-2);
        padding: 3px 15px;
        th {
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          h4 {
            font-size: 18px;
            @media (min-width: 768px) {
              font-size: 24px;
            }
          }
          button {
            display: flex;
            border: none;
            background-color: transparent;
            margin-left: 0.25rem;
          }
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        width: 100%;
        border-bottom: 1px solid var(--grey-4);
        padding-left: 15px;
        padding-right: 25px;

        display: flex;
        justify-content: space-between;
        td {
          margin-top: 10px;
          height: 25px;

          &:nth-child(2) {
            padding-right: 30px;
          }
        }

        p {
          font-weight: 500;
          font-size: 12px;
          color: var(--grey-3);
          @media (min-width: 768px) {
            font-size: 14px;
          }
        }
        .somethingWrong {
          color: #fc0000;
        }
        .allRigth {
          color: #027a00;
        }
      }
    }
  }
`;
