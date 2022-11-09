import ImageLogin from "./ImageLogin.png" 
import LogoMobile from "./LogoMobile.png"
import ContainerFigureLogo from "./style";

const LoginImage = () => {
    return (
        <ContainerFigureLogo>
            <img className="img_desktop" src={ImageLogin} alt="Notebook e um copo de café" />
            <img className="img_mobile" src={LogoMobile} alt="Logo Kenzie" />
        </ContainerFigureLogo>
    )
}
export default LoginImage;