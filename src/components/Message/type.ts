import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeProps } from '../Icon/type';

/*
 * Message 组件
 */
export interface ShowProps {
  /**
   * 文案内容
   */
  content: string;
  /**
   * 持续时间
   */
  duration?: number;
  /**
   * 关闭回调
   */
  icon?: IconProp;
  onClose?: () => void;
}

export interface MessageProps {
  visible: boolean;
  children: React.ReactChild;
  type: string;
  /**
   * 添加图标
   */
  icon?: IconProp;
  /**
   * 图标主题
   */
  theme?: ThemeProps;
}

export enum IconType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  LOADING = 'loading',
  ERROR = 'error',
}
