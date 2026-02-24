import React from "react";
import type { MenuItem } from "../../types";
import { Link } from "react-router-dom";

interface NavigationProps {
  menuItems: MenuItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  menuItems,
  isMobile = false,
  onItemClick,
}) => {
  const baseClasses = isMobile
    ? "flex flex-col space-y-4"
    : "hidden md:flex items-center space-x-8";

  return (
    <nav className={baseClasses}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          onClick={onItemClick}
          className={`
            relative font-medium transition-all duration-300
            hover:text-pink-600 dark:hover:text-pink-400
            group
            ${
              item.active
                ? "text-pink-600 dark:text-pink-400"
                : "text-gray-700 dark:text-gray-300"
            }
          `}
        >
          {item.label}
          <span
            className={`
            absolute -bottom-1 left-0 w-0 h-0.5 
            bg-linear-to-r from-pink-500 to-purple-500
            transition-all duration-300 group-hover:w-full
            ${item.active ? "w-full" : ""}
          `}
          />
        </Link>
      ))}
    </nav>
  );
};
