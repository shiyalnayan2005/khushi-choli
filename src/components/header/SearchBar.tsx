import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../icons/SearchIcon";

export const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement your search logic here
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search collection..."
          className={`
            absolute right-0 top-1/2 -translate-y-1/2
            px-4 py-2 rounded-full border
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            border-gray-300 dark:border-gray-600
            focus:outline-none focus:ring-2 focus:ring-pink-500
            transition-all duration-300
            ${
              isExpanded
                ? "w-64 opacity-100 visible"
                : "w-0 opacity-0 invisible"
            }
          `}
        />
        <button
          type={isExpanded ? "submit" : "button"}
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            p-2 rounded-full
            text-gray-600 dark:text-gray-400
            hover:text-pink-600 dark:hover:text-pink-400
            hover:bg-gray-100 dark:hover:bg-gray-700
            transition-all duration-300
            relative z-10
            ${isExpanded ? "mr-64" : ""}
          `}
          aria-label="Search"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
