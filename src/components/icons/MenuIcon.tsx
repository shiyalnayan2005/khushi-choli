import React from "react";
import { Icon } from "./Icon";

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon className={className}>
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);
