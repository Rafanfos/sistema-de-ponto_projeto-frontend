import styled from "styled-components";

export const StudentsTableStyle = styled.div`
  margin-top: 1.875rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
    background-color: var(--grey-3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 8px;
  }

  table {
    thead {
      tr {
        display: flex;

        th {
          height: 31px;
          background-color: #d9d9d9;
          display: flex;
          align-items: center;
          justify-content: center;

          &:nth-child(1) {
            width: 115px;
          }

          &:nth-child(2) {
            width: 212px;
          }

          &:nth-child(3) {
            width: 170px;
          }

          &:nth-child(4) {
            width: 140px;
          }

          &:nth-child(5) {
            width: 130px;
          }

          h4 {
            font-size: 14px;
            font-weight: 500;
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
      tr {
        display: flex;

        td {
          border-bottom: 1px solid #d9d9d9;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            color: var(--grey-2);
          }

          h3,
          p {
            color: var(--grey-2);
            font-size: 10px;
            font-weight: 400;
          }

          &:nth-child(1) {
            width: 115px;
            display: flex;

            h3 {
              margin-left: 0.313rem;
              width: 90px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }

          &:nth-child(2) {
            width: 212px;
          }

          &:nth-child(3) {
            width: 170px;
          }

          &:nth-child(4) {
            width: 140px;
          }

          &:nth-child(5) {
            width: 130px;
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

  @media (min-width: 768px) {
    width: 80%;
    max-width: 1174px;
    margin-left: unset;
    margin: 0 auto;
    margin-top: 1.875rem;

    table {
      thead {
        tr {
          th {
            height: 53px;

            &:nth-child(1) {
              width: 220px;
            }

            &:nth-child(2) {
              width: 260px;
            }

            &:nth-child(3) {
              width: 230px;
            }

            &:nth-child(4) {
              width: 250px;
            }

            &:nth-child(5) {
              width: 210px;
            }

            h4 {
              font-size: 16px;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            font-size: 14px;
            height: 73px;

            p {
              font-size: 15px;
              font-weight: 400;
            }

            &:nth-child(1) {
              width: 220px;

              svg {
                font-size: 34px;
              }

              h3 {
                margin-left: 0.313rem;
                width: 130px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 15px;
                font-weight: 500;
              }
            }

            &:nth-child(2) {
              width: 260px;
            }

            &:nth-child(3) {
              width: 230px;
            }

            &:nth-child(4) {
              width: 250px;
            }

            &:nth-child(5) {
              width: 210px;
            }
          }
        }
      }
    }
  }
`;
