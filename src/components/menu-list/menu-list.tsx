import React from 'react';
import MenuListTitle from '@/components/menu-list/menu-list-title';

function MenuList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-56 min-w-56 flex-col divide-y divide-[#D7D7DA] rounded-lg border border-category_border bg-white">
      {children}
    </div>
  );
}

MenuList.Title = MenuListTitle;

export default MenuList;
