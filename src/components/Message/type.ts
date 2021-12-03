import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeProps } from '../Icon/type';

export interface ShowProps {
  // 文案内容
  content: string;
  // 持续时间
  duration?: number;
  // 添加图标
  icon?: IconProp;
  // 关闭回调
  onClose?: () => void;
}

export type MessageType = 'success' | 'info' | 'warning' | 'loading' | 'error';

export interface MessageProps {
  visible: boolean;
  children: React.ReactChild;
  // 类型
  type: MessageType;
  // 添加图标
  icon?: IconProp;
  // 图标主题
  theme?: ThemeProps;
}

// 枚举 Icon 的类型
export enum IconType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  LOADING = 'loading',
  ERROR = 'error',
}
