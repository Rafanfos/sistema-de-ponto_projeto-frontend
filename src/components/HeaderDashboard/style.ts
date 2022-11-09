import styled from "styled-components";

export const HeaderDashboardStyle = styled.header`
  text-align: center;
  
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

    h1 {
      font-weight: 500;
      font-size: 32px;
    }
    h2 {
      font-weight: 500;
      font-size: 30px;
    }

    p {
      font-size: 22px;
      font-weight: 400;
    }
  }
`;
