import { FC } from 'react';
import TabWrap from './tabWrap';
import TabItem from './tabItem';
import { TabsProps, TabItemProps } from './type';
import './style.scss';
import '@/styles';

export type TabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>;
};

const Tabs = TabWrap as TabsComponent;
Tabs.Item = TabItem;

export default Tabs;
