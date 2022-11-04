import styled from "styled-components";

export const DashboardTrainerStyle = styled.div`
  display: flex;
  flex-direction: column;

  .containerMain {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    header {
      text-align: center;
      margin-top: 0.688rem;

      h1 {
        font-weight: 500;
        font-size: 20px;
      }

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-weight: 500;
          font-size: 16px;
        }

        p {
          margin-left: 6px;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .marginTable {
      width: 100%;
      padding-left: 2rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .containerMain {
      margin-left: 84px;

      header {
        margin-top: 2.188rem;

        h1 {
          font-weight: 500;
          font-size: 32px;
        }

        div {
          flex-direction: column;

          h2 {
            font-weight: 500;
            font-size: 32px;
          }

          p {
            font-size: 24px;
            font-weight: 400;

            span {
              display: none;
            }
          }
        }
      }

      .marginTable {
        padding: unset;
      }
    }
  }
`;
