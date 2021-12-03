import React from 'react';
import Tabs from '@/components/Tabs';
import ButtonDemo from './demo';
import ButtonDoc from './doc';
import '@/styles/example.scss';

const ButtonPage = () => {
  return (
    <Tabs type="line" defaultIndex={0}>
      <Tabs.Item label="Demo">
        <ButtonDemo />
      </Tabs.Item>
      <Tabs.Item label="API">
        <ButtonDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default ButtonPage;
