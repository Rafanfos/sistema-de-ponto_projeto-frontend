import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInputDefault } from "./style";

interface iInput {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  register?: UseFormRegisterReturn<string>;
  disabled?: boolean;
}

export function InputDefault({ register, ...otherProps }: iInput) {
  return <StyledInputDefault {...otherProps} {...register} />;
}
