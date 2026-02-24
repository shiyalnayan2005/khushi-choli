import React from "react";
import { UserIcon } from "../icons/UserIcon";
import { CartIcon } from "../icons/CartIcon";
import { ThemeIcon } from "../icons/ThemeIcon";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderActionsProps {
  cartItemsCount?: number;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  cartItemsCount = 0,
}) => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label="Shopping cart"
      >
        <CartIcon className="w-5 h-5" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {cartItemsCount}
          </span>
        )}
      </button>
      <button
        className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label="User account"
      >
        <UserIcon className="w-5 h-5" />
      </button>

      <span className="flex w-px self-stretch bg-gray-600 dark:bg-gray-400"></span>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label="Toggle theme"
      >
        <ThemeIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
