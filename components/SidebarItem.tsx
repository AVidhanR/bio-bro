"use client";

import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  isActive,
  onClick,
}) => {
  return (
    <a
      href="#cooking-up"
      onClick={onClick}
      className={`flex items-center p-4 rounded-tl-lg rounded-bl-lg hover:text-blue-500 transition-colors duration-200 ${
        isActive ? "bg-blue-50 text-blue-500" : "text-gray-600"
      }`}
    >
      {icon}
    </a>
  );
};

export default SidebarItem;
