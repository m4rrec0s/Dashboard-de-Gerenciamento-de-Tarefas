import React from "react";
import { CustomInput } from "./style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <CustomInput type={type} ref={ref} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
