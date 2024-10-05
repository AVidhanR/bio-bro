interface SidebarItemsDataType {
  id: number;
  linkTo: string;
  icon: React.ReactNode;
}

export const SidebarItemsData: SidebarItemsDataType[] = [
  {
    id: 1,
    linkTo: "/data",
    icon: `<HardDrive size={32} absoluteStrokeWidth={true} />`,
  },
  {
    id: 2,
    linkTo: "/#registry",
    icon: `<Library size={32} absoluteStrokeWidth={true} />`,
  },
  {
    id: 3,
    linkTo: "/#workflows",
    icon: `<Waypoints size={32} absoluteStrokeWidth={true} />`,
  },
  {
    id: 4,
    linkTo: "/#pods",
    icon: `<Icon iconNode={hexagons3} size={32} absoluteStrokeWidth={true} />`,
  },
];
