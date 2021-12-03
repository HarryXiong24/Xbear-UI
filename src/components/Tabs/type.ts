export interface TabsProps {
  /**当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /**可以扩展的 className */
  className?: string;
  /**点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /**Tabs的样式，两种可选，默认为 line */
  type?: 'line' | 'card';
}

export interface TabItemProps {
  /** Tab选项上面的文字 */
  label: string | React.ReactElement;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
}
