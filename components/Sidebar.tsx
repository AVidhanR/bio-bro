"use client";

import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { HardDrive, Waypoints, Icon, Library } from "lucide-react";
import { hexagons3 } from "@lucide/lab";

// not a reusable component
const Sidebar = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };
  return (
    <aside className="bg-white shadow-md w-20 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col">
      <nav className="pl-2">
        <ul className="space-y-1">
          <li>
            <SidebarItem
              icon={<HardDrive size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 1}
              onClick={() => handleItemClick(1)}
            />
          </li>
          <li>
            <SidebarItem
              icon={<Library size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 2}
              onClick={() => handleItemClick(2)}
            />
          </li>
          <li>
            <SidebarItem
              icon={<Waypoints size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 3}
              onClick={() => handleItemClick(3)}
            />
          </li>
          <li>
            <SidebarItem
              icon={
                <Icon
                  iconNode={hexagons3}
                  size={32}
                  absoluteStrokeWidth={true}
                />
              }
              isActive={activeItemId === 4}
              onClick={() => handleItemClick(4)}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
