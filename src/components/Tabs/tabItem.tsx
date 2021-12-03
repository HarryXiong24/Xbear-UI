import React, { FC } from 'react';
import { TabItemProps } from './type';

const TabItem: FC<TabItemProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

TabItem.displayName = 'TabItem';

export default TabItem;
