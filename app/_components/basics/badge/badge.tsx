import { Badge as ContainerBadge } from "./style";

interface BadgeProps {
  color?: string;
  children: React.ReactNode;
}

const Badge = ({ children, color }: BadgeProps) => {
  return <ContainerBadge>{children}</ContainerBadge>;
};

export default Badge;
