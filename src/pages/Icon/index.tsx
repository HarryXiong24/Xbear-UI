import React from 'react';
import Icon from '@/components/Icon';
import { ThemeProps } from '@/components/Icon/type';
import iconsCache from '@/components/Icon/shared/res';
// import copy from 'copy-to-clipboard';
// import Message from '../Message';

// Icon 构造器
const BuildIcons: React.FC<{ theme: ThemeProps; icons: any }> = ({
  theme,
  icons,
}) => {
  return (
    <>
      <h6> 一共支持 {Object.keys(iconsCache).slice(0, 256).length} 种图标 </h6>
      <br />
      <ul
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          listStyle: 'none',
        }}
      >
        {Object.keys(iconsCache)
          .splice(0, 256)
          .map((key, index) => {
            const iconName = icons[key].iconName;
            const _length = iconName.split('-').length;
            return (
              <li
                className="svgCls"
                style={{
                  display: 'inline-flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: '0 1 20%',
                  minWidth: 120,
                  padding: '0px 7.5px 20px',
                  cursor: 'pointer',
                }}
                // onClick={(e) => {
                //   copy(iconName);
                //   Message.success({ content: '复制成功啦' });
                // }}
                key={index}
              >
                <Icon theme={theme} icon={iconName} />
                <div
                  style={{
                    color: '#666',
                    fontSize: 12,
                    width: 70,
                    overflow: 'hidden',
                  }}
                >
                  <span>{iconName.split('-')[_length - 1]}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

const primary: ThemeProps = 'primary';
const info: ThemeProps = 'info';
const danger: ThemeProps = 'danger';

const IconPage = () => {
  return (
    <>
      <BuildIcons theme={info} icons={iconsCache} />
      <BuildIcons theme={primary} icons={iconsCache} />
      <BuildIcons theme={danger} icons={iconsCache} />
    </>
  );
};

export default IconPage;
