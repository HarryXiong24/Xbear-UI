import React, { FC, useImperativeHandle } from 'react';
import { TabItemProps } from './type';

const TabItem: FC<TabItemProps> = (props) => {
  const { children, myRef } = props;

  const showContent = () => {
    alert(children);
  };

  useImperativeHandle(myRef, () => ({
    showContent,
  }));

  return <>{children}</>;
};

export default TabItem;
