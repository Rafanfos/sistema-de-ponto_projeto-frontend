import styled from "styled-components";

export const RegistersTrainerStyle = styled.main`
  padding-left: unset;

  .main__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    max-width: 1000px;
    gap: 12px;
    margin: 0 auto;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  aside div:nth-child(2) {
    margin-top: 0;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    padding: 0.5rem 0 0.813rem 0;
    border-bottom: 2px solid var(--grey-3);
    max-width: 900px;
    margin: 0 auto 20px auto;

    @media (min-width: 768px) {
      font-size: 32px;
      padding: 1.688rem 0 1.813rem 0;
      border-bottom: 3px solid var(--grey-3);
    }
  }
  section {
    max-width: 650px;
  }

  .register__container {
    width: 100%;
    text-align: center;
    max-width: 480px;
  }

  .filter__students {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .input__container {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 100%;
    }
  }

  .search__icon {
    position: absolute;
    right: 5px;
    border: none;
  }

  aside {
    position: relative;

    & > h3 {
      text-align: center;
    }
  }

  select {
    background-color: var(--grey-4);
    padding: 10px 15px;
    background-color: var(--grey-4);
    border: 1px solid transparent;
    border-radius: 8px;
    outline: var(--color-primary);
  }

  @media (min-width: 768px) {
    padding-left: 84px;
  }
`;
