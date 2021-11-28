import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ThemeProps } from '../Icon/icon';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'ghost';

export interface BaseButtonProps {
  /**
   * 设置按钮额外的样式
   */
  className?: string;
  /**
   * 设置按钮是否可用
   */
  disabled?: boolean;
  /**
   * 设置按钮大小
   */
  size?: ButtonSize;
  /**
   * 设置按钮类型
   */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**
   * 设置 link 类型按钮的跳转链接
   */
  href?: string;
  /**
   * 添加图标到标题后
   */
  icon?: IconProp;
  /**
   * 图标主题
   */
  theme?: ThemeProps;
  /**
   * 加载状态
   */
  loading?: boolean;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
