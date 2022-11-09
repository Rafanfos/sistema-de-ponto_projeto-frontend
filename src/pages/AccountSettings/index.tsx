import { AsideBar } from "../../components/AsideBarNavigation";
import { AccountSettingsStyle } from "./style";
import { EditForm } from "../../components/EditForm";

export const AccountSettings = () => {

  return (
    <>
      <AsideBar />
      <AccountSettingsStyle>
        <div className="containerMain">
          <h1>Configurações da conta</h1>

          <h2>Alterar dados do perfil</h2>

          <EditForm />
        </div>
      </AccountSettingsStyle>
    </>
  );
};
