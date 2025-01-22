import React from 'react';
import SelectorHeader from '@/components/selector/select-header';
import SelectOption from '@/components/selector/select-option';

function Selector({ children }: { children: React.ReactNode }) {
  return <div className="w-56 min-w-56 divide-y rounded-lg border border-category_border bg-white">{children}</div>;
}

Selector.Header = SelectorHeader;
Selector.Option = SelectOption;

export default Selector;
