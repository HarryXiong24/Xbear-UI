import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  title?: string;
  shadow?: boolean;
  titleOverflowHidden?: boolean;
  actions?: [];
  showShadowWhenHover?: boolean;
  cover?: string;
  loading?: boolean;
  extra?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
