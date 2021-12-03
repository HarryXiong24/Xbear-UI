import React from 'react';
import Tabs from '@/components/Tabs';
import Icon from '@/components/Icon';
import Card from '@/components/Card';
import { DescriptionBrave, DescriptionEle, DescriptionMoon } from './constants';
import '@/styles/example.scss';

const TabsDemo = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  return (
    <div className="container">
      <div className="item">
        <Card title="基础使用" style={cardCss} shadow>
          <Tabs>
            <Tabs.Item label="Tab 1">{DescriptionEle}</Tabs.Item>
            <Tabs.Item label="Tab 2">{DescriptionBrave}</Tabs.Item>
            <Tabs.Item label="Tab 3">{DescriptionMoon}</Tabs.Item>
          </Tabs>
        </Card>
      </div>

      <div className="item">
        <Card title="卡片类型" style={cardCss} shadow>
          <Tabs type="card">
            <Tabs.Item label="Tab 1">{DescriptionEle}</Tabs.Item>
            <Tabs.Item label="Tab 2">{DescriptionBrave}</Tabs.Item>
            <Tabs.Item label="Tab 3">{DescriptionMoon}</Tabs.Item>
          </Tabs>
        </Card>
      </div>

      <div className="item">
        <Card title="默认选中" style={cardCss} shadow>
          <Tabs type="line" defaultIndex={1}>
            <Tabs.Item label="Tab 1">{DescriptionEle}</Tabs.Item>
            <Tabs.Item label="Tab 2">{DescriptionBrave}</Tabs.Item>
            <Tabs.Item label="Tab 3">{DescriptionMoon}</Tabs.Item>
          </Tabs>
        </Card>
      </div>

      <div className="item">
        <Card title="Icon" style={cardCss} shadow>
          <Tabs type="card">
            <Tabs.Item
              label={
                <span>
                  <Icon icon="music" style={{ marginRight: 5 }} />
                  Tab 1
                </span>
              }
            >
              {DescriptionEle}
            </Tabs.Item>
            <Tabs.Item
              label={
                <span>
                  <Icon icon="apple-alt" style={{ marginRight: 5 }} />
                  Tab 2
                </span>
              }
            >
              {DescriptionBrave}
            </Tabs.Item>
            <Tabs.Item
              label={
                <span>
                  <Icon icon="anchor" style={{ marginRight: 5 }} />
                  Tab 2
                </span>
              }
            >
              {DescriptionMoon}
            </Tabs.Item>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default TabsDemo;
