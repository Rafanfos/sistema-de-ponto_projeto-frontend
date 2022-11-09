import styled from "styled-components";


export const StyledModalAnimation = styled.div`

animation: show 0.4s;

@keyframes show {
      0% {
        transform: scale(0%);
      }
      100% {
        transform: scale(100%);
      }
    }
`