import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 24,
  className = "",
  viewBox = "0 0 24 24",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </svg>
);
