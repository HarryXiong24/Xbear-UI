export interface TocProps {
  level: number;
  text: string;
  slug: string;
}

export interface onLoadProps {
  toc: TocProps[];
  html: string;
}
export interface MarkdownComponentProps {
  classNames?: string;
  onLoad?: (options: onLoadProps) => void;
}

export interface RenderProps {
  content: string;
  isNative: boolean;
  nativeContent: string;
  toc: string;
  imports?: string;
}
