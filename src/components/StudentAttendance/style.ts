import styled, { css } from "styled-components";

interface iPercentageDivStyleProps {
  widthDiv: string;
}
export const PercentageDivStyle = styled.div<iPercentageDivStyleProps>`
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--grey-1);
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .container {
    position: relative;
    height: 87px;
    width: 90%;
    max-width: 727px;
    margin: 0 auto;

    .total {
      width: 100%;
      background-color: var(--grey-3);
      border-radius: 16px;

      height: 100%;
      .current {
        background-color: var(--color-primary);
        ${({ widthDiv }) => {
          return css`
            width: ${widthDiv}%;
          `;
        }}
        height: 100%;
        border-radius: 16px;
      }
    }
    span {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.5rem;
      color: var(--color-light);

      text-shadow: 2px 2px var(--color-primary);

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;
