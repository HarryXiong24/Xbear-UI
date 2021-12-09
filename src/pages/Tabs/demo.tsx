import React, { useRef } from 'react';
import Tabs from '@/components/Tabs';
import Icon from '@/components/Icon';
import Card from '@/components/Card';
import { Description1, Description2, Description3 } from './poem';
import '@/styles/example.scss';
import Button from '@/components/Button';

const TabsDemo = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  const tabItemRef = useRef(null);

  return (
    <div className="container">
      <div className="item">
        <Card title="基础使用" style={cardCss} shadow>
          <Tabs>
            <Tabs.Item label="将进酒">{Description1}</Tabs.Item>
            <Tabs.Item label="临江仙·滚滚长江东逝水">{Description2}</Tabs.Item>
            <Tabs.Item label="念奴娇·赤壁怀古">{Description3}</Tabs.Item>
          </Tabs>
        </Card>
      </div>

      <div className="item">
        <Card title="卡片类型" style={cardCss} shadow>
          <Tabs type="card">
            <Tabs.Item myRef={tabItemRef} label="将进酒">
              {Description1}
              <Button
                icon="bolt"
                circle
                size="sm"
                onClick={() => {
                  (tabItemRef.current as any).showContent();
                }}
              >
                点我触发
              </Button>
            </Tabs.Item>
            <Tabs.Item label="临江仙·滚滚长江东逝水">{Description2}</Tabs.Item>
            <Tabs.Item label="念奴娇·赤壁怀古">{Description3}</Tabs.Item>
          </Tabs>
        </Card>
      </div>

      <div className="item">
        <Card title="默认选中" style={cardCss} shadow>
          <Tabs type="line" defaultIndex={1}>
            <Tabs.Item label="将进酒">{Description1}</Tabs.Item>
            <Tabs.Item label="临江仙·滚滚长江东逝水">{Description2}</Tabs.Item>
            <Tabs.Item label="念奴娇·赤壁怀古">{Description3}</Tabs.Item>
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
                  将进酒
                </span>
              }
            >
              {Description1}
            </Tabs.Item>
            <Tabs.Item
              label={
                <span>
                  <Icon icon="apple-alt" style={{ marginRight: 5 }} />
                  临江仙·滚滚长江东逝水
                </span>
              }
            >
              {Description2}
            </Tabs.Item>
            <Tabs.Item
              label={
                <span>
                  <Icon icon="anchor" style={{ marginRight: 5 }} />
                  念奴娇·赤壁怀古
                </span>
              }
            >
              {Description3}
            </Tabs.Item>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default TabsDemo;
