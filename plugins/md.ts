// import path from 'path';
// import fs from 'fs';
// import marked from 'marked';
const fileRegex = /\.(md)$/;

// //将md文件解析成vue能识别的组件
// import compileSFC from '@vue/compiler-sfc';
// import compileDOM from '@vue/compiler-dom';

// 解析md文件
import Hyperdown from 'hyperion';

const md = () => {
  return {
    //插件名字
    name: 'markdown-loader',
    transform(src: any, id: any) {
      //判断是不是md结尾的文件
      if (fileRegex.test(id)) {
        //将md文件内容转成html，这个转换的插件也是可以自己写
        const hyperdown = new Hyperdown();
        const html: any = hyperdown.makeHtml(src);

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const code = `${html}`;
        const render = `${code}`;
        return {
          code: render,
          map: null,
        };
      }
    },
  };
};

export default md;
