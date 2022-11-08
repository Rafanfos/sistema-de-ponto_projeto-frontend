import styled from "styled-components";


export const StyledLoadingPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-4);
    .loading-spinner{
        width: 100px;
        height: 100px;
        border: 1em solid var(--grey-2);
        border-radius: 50%;
        border-top-color: var(--color-primary);
        animation: spin 1.2s infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
    }
`