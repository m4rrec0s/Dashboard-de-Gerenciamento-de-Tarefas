import React from "react";
import { ButtonContainer } from "./style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  outline?: boolean;
  ghost?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, outline, ghost, ...props }, ref) => {
    return (
      <ButtonContainer $ghost={ghost} $outline={outline} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };