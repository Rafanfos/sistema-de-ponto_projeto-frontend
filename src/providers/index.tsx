import { ReactNode } from "react";
import UserProviders from "../context/UserContext";

export interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <UserProviders>{children}</UserProviders>;
};

export default Providers;
