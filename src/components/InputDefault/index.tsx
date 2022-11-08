import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInputDefault } from "./style";

interface IInput {
  placeholder?: string;
  className?: string;
  id?: string;
  type?: string;
  value?: string;
  register?: UseFormRegisterReturn<string>;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function InputDefault({ ...otherProps }: IInput) {
  return <StyledInputDefault {...otherProps} />;
}
