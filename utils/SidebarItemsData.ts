interface SidebarItemsDataType {
  id: number;
  linkTo: string;
  icon: React.ReactNode;
  isActive: boolean;
}

export const SidebarItemsData: SidebarItemsDataType[] = [
  {
    id: 1,
    linkTo: "/data",
    icon: `<HardDrive size={32} absoluteStrokeWidth={true} />`,
    isActive: false,
  },
];
