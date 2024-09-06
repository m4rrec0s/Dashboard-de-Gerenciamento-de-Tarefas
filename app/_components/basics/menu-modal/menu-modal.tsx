import React from "react";
import {
  CustomMenuModal,
  CustomMenuModalClose,
  CustomMenuModalContent,
  CustomMenuModalHeader,
  CustomMenuModalItem,
  CustomMenuModalTitle,
  CustomModalTrigger,
} from "./style";

const MenuModal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenuModal ref={ref} {...props} />);
MenuModal.displayName = "MenuModal";

const MenuModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenuModalHeader ref={ref} {...props} />);
MenuModalHeader.displayName = "MenuModalHeader";

const MenuModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <CustomMenuModalContent ref={ref} {...props} />);
MenuModalContent.displayName = "MenuModalContent";

const MenuModalItem = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement>
>(({ ...props }, ref) => <CustomMenuModalItem ref={ref} {...props} />);
MenuModalItem.displayName = "MenuModalItem";

const MenuModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <CustomMenuModalTitle ref={ref} {...props} />);
MenuModalTitle.displayName = "MenuModalTitle";

const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => <CustomModalTrigger ref={ref} {...props} />);
ModalTrigger.displayName = "ModalTrigger";

const MenuModalClose = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => <CustomMenuModalClose ref={ref} {...props} />);
MenuModalClose.displayName = "MenuModalClose";

export { MenuModal, MenuModalContent, MenuModalHeader, MenuModalItem, MenuModalTitle, ModalTrigger, MenuModalClose };