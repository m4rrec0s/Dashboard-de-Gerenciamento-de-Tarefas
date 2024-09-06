import React from "react";
import { CustomContainer, CustomContainerTitle } from "./style";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomContainer ref={ref} {...props} />);
Container.displayName = "Container";

const ContainerTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <CustomContainerTitle ref={ref} {...props} />);
ContainerTitle.displayName = "ContainerTitle";

export { Container, ContainerTitle };