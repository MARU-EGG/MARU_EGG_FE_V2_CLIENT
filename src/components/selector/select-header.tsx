import React from 'react';

function SelectorHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-image-tree-right rounded-t-lg bg-primary p-4 text-title text-white">{children}</div>;
}

export default SelectorHeader;
