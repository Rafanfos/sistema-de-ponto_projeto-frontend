import styled from "styled-components";

export const HeaderDashboardStyle = styled.header`
  text-align: center;
  margin-top: 0.688rem;

  h1 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 768px) {
    margin-top: 2.188rem;

    h1 {
      font-weight: 500;
      font-size: 32px;
    }
    h2 {
      font-weight: 500;
      font-size: 32px;
    }

    p {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;
