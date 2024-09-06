import React from "react";
import {
  CustomMenu,
  CustomMenuContent,
  CustomMenuHeader,
  CustomMenuItem,
} from "./style";

const Menu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenu ref={ref} {...props} />);
Menu.displayName = "Menu";

const MenuHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenuHeader ref={ref} {...props} />);
MenuHeader.displayName = "MenuHeader";

const MenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenuContent ref={ref} {...props} />);
MenuContent.displayName = "MenuContent";

const MenuItem = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement>
>(({ ...props }, ref) => <CustomMenuItem ref={ref} {...props} />);
MenuItem.displayName = "MenuItem";

export { Menu, MenuContent, MenuHeader, MenuItem };
