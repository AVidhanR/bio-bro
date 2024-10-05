"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { HardDrive, Waypoints, Icon, Library } from "lucide-react";
import { hexagons3 } from "@lucide/lab";
// import { SidebarItemsData } from "@/utils/SidebarItemsData";

// not a reusable component
const Sidebar = () => {
  const [activeItemId, setActiveItemId] = React.useState<number>(0);

  const handleItemClick = (itemId: number) => {
    setActiveItemId(itemId);
  };
  return (
    <aside className="bg-white shadow-md w-20 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col">
      <nav className="pl-2">
        <div className="flex flex-col justify-start pt-8 items-center h-1/2">
          Profile
        </div>
        <ul className="space-y-1 flex flex-col justify-center items-center">
          <li>
            <SidebarItem
              linkTo="/data"
              icon={<HardDrive size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 1}
              onClick={() => handleItemClick(1)}
            />
          </li>
          <li>
            <SidebarItem
              linkTo="/#registry"
              icon={<Library size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 2}
              onClick={() => handleItemClick(2)}
            />
          </li>
          <li>
            <SidebarItem
              linkTo="/#workflows"
              icon={<Waypoints size={32} absoluteStrokeWidth={true} />}
              isActive={activeItemId === 3}
              onClick={() => handleItemClick(3)}
            />
          </li>
          <li>
            <SidebarItem
              linkTo="/#pods"
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
          {/* {SidebarItemsData.map(({ id, linkTo, icon }) => {
            return (
              <li key={id}>
                <SidebarItem
                  linkTo={linkTo}
                  icon={icon}
                  isActive={activeItemId === id}
                  onClick={handleItemClick(id)}
                />
              </li>
            ); //I need to think a way to add the ReactComponent as an item here
            //rather than using it just like a string.
          })} */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
