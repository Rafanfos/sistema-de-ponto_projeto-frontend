import styled from "styled-components";

export const AccountSettingsStyle = styled.div`
  .containerMain {
    margin: 0 auto;
    width: 90%;
    max-width: 612px;

    h1 {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      padding: 0.5rem 0 0.813rem 0;
      border-bottom: 2px solid var(--grey-3);
    }

    h2 {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      padding-top: 0.438rem;
    }
  }

  @media (min-width: 768px) {
    margin-left: 84px;

    .containerMain {
      width: 75%;
      max-width: 1174px;

      h1 {
        font-size: 32px;
        padding: 1.688rem 0 1.813rem 0;
        border-bottom: 3px solid var(--grey-3);
      }

      h2 {
        font-size: 32px;
        padding-top: 1.813rem;
      }
    }
  }
`;
