import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { ThemeProps } from '@/components/Icon/type';
import iconsCache from '@/components/Icon/shared/res';
import copy from 'copy-to-clipboard';
import Message from '@/components/Message';
import Button from '@/components/Button';
import ReactMarkdown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import IconMD from './Icon.md';
import '@/styles/example.scss';

// Icon 构造器
const BuildIcons: React.FC<{ theme: ThemeProps; icons: any }> = ({
  theme,
  icons,
}) => {
  return (
    <>
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
                role="presentation"
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
                onClick={() => {
                  copy(iconName);
                  // console.log(iconName);
                  void Message.success({ content: '复制成功' });
                }}
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

const ThemeArr: ThemeProps[] = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

const IconPage = () => {
  const [mode, setMode] = useState<ThemeProps>('primary');
  const changeMode = (mode_prop: ThemeProps) => {
    setMode(mode_prop);
  };
  return (
    <>
      <h2>Icon 图标</h2>
      <h6 style={{ marginTop: 20 }}>
        一共支持 {Object.keys(iconsCache).slice(0, 256).length} 种图标{' '}
      </h6>
      <p style={{ marginTop: 20 }}>有 8 种颜色模式可以选择</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: 20,
        }}
      >
        {ThemeArr.map((item, index) => (
          <Button
            btnType="ghost"
            key={index}
            onClick={() => {
              changeMode(item);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <BuildIcons theme={mode} icons={iconsCache} />
      <Card shadow>
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line react/no-children-prop
          children={IconMD}
        />
      </Card>
    </>
  );
};

export default IconPage;
