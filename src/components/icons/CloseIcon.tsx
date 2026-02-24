import React from "react";
import { Icon } from "./Icon";

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon className={className}>
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);
