import React, { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { HeaderActions } from "./HeaderActions";
import { MobileMenu } from "./MobileMenu";
import type { MenuItem } from "../../types";

const defaultMenuItems: MenuItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/collections" },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC<{ menuItems?: MenuItem[] }> = ({
  menuItems = defaultMenuItems,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          {/*<Navigation menuItems={menuItems} />*/}

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/*<SearchBar />*/}
            <HeaderActions cartItemsCount={3} />

            {/* Mobile Menu Button */}
            {/*<MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              menuItems={menuItems}
            />*/}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu is handled by MobileMenu component */}
    </header>
  );
};
