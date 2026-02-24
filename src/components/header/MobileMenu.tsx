// src/components/Header/MobileMenu.tsx
import React, { useEffect } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { Navigation } from "./Navigation";
import type { MenuItem } from "../../types";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  menuItems: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onToggle,
  menuItems,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onToggle}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={onToggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
          <Navigation menuItems={menuItems} isMobile onItemClick={onToggle} />
        </div>
      </div>
    </>
  );
};
