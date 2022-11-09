import { ReactNode } from "react";
import { AuthProviders } from "../context/AuthContext";
import UserProviders from "../context/CheckinContext";

export interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <>
      <AuthProviders>
        <UserProviders>{children}</UserProviders>
      </AuthProviders>
    </>
  );
};

export default Providers;
