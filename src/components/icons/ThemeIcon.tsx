import React from "react";
import { Icon } from "./Icon";

export const ThemeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon className={className}>
    <path
      d="M12 3V5M12 19V21M5 12H3M21 12H19M17.657 6.343L16.243 7.757M7.757 16.243L6.343 17.657M17.657 17.657L16.243 16.243M7.757 7.757L6.343 6.343M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);
