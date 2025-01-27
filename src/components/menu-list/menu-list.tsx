import React from 'react';
import MenuListTitle from '@/components/menu-list/menu-list-title';

function MenuList({ children }: { children: React.ReactNode }) {
  return <div className="w-56 min-w-56 divide-y rounded-lg border border-category_border bg-white">{children}</div>;
}

MenuList.Title = MenuListTitle;

export default MenuList;
