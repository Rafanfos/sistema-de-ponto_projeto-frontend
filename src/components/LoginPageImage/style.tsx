import styled from "styled-components";

const ContainerFigureLogo = styled.figure`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;

    
    

    .img_desktop {
        height: 100%;
        max-height: 100%;
        width: 100%;
    }

    .img_mobile {
        display: none;
    }

    @media(max-width: 768px){
        width: 100%;
        height: 162px;
        background-color: var(--color-primary);

        .img_desktop {
            display: none;
        }

        .img_mobile {
            display: list-item;
            max-width: 320px;
            height: 162px;
        }
    }

    @media(max-width: 1440px){
        .img_desktop {
            object-fit: cover;
        }
    }
`
export default ContainerFigureLogo;