import styled from "styled-components";

export const DashboardStudentStyle = styled.div`
  display: flex;
  flex-direction: column;

  .containerMain {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 20px;
  }
  @media (min-width: 768px) {
    flex-direction: row;

    .containerMain {
      margin-left: 84px;
    }
  }
`;
