/**
 * 传入一个作用域名称，返回一个函数，该函数功能是构造一个局部 css
 * eg：const sc = scopedClass('xbear-tabs');
 * 返回函数 sc
 * sc('nav') => xbear-tabs-nav
 */

export function scopedClass(componentClass: string) {
  return function (c: Record<string, unknown> | string, className?: string) {
    const scArray = Object.entries(typeof c === 'object' ? c : { [c]: true })
      .filter((node) => node[1])
      .map((node) =>
        [componentClass, typeof node[1] === 'boolean' ? node[0] : node[1]]
          .filter(Boolean)
          .join('-')
      );
    return [...scArray, className].filter(Boolean).join(' ');
  };
}

export default scopedClass;
