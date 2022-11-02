import styled from "styled-components";

export const AsideStyle = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  background-color: var(--color-primary);

  figure {
    margin-left: 1.188rem;
    width: 39px;
    height: 39px;

    img {
      width: 39px;
      height: 39px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      object-fit: cover;
    }
  }

  nav {
    margin-right: 1.563rem;
    display: flex;
    gap: 1.563rem;

    a {
      font-size: 23px;
      color: #ffffff;
      transition: 0.9s;

      &:hover {
        color: var(--color-secondary);
        transition: 0.9s;
      }
    }
  }

  @media (min-width: 768px) {
    justify-content: unset;
    flex-direction: column;
    min-width: 84px;
    max-width: 84px;
    height: 100%;
    position: fixed;

    figure {
      margin-left: unset;
      margin-top: 4.063rem;
      width: 57px;
      height: 57px;

      img {
        width: 57px;
        height: 57px;
      }
    }

    nav {
      margin-right: unset;
      margin-top: 4.875rem;
      flex-direction: column;

      a {
        font-size: 32px;
      }
    }
  }
`;
