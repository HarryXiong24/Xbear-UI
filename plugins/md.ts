import path from 'path';
import fs from 'fs';
import marked from 'marked';

const mdToJs = (str: any) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

const md = () => {
  return {
    name: 'md',
    configureServer: [
      // 用于开发
      // eslint-disable-next-line @typescript-eslint/require-await
      async ({ app }: { app: any }) => {
        app.use(async (ctx: any, next: any) => {
          // koa
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js';
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToJs(fs.readFileSync(filePath).toString());
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [
      {
        // 用于 rollup // 插件
        test: (context: any) => context.path.endsWith('.md'),
        transform: ({ code }: { code: any }) => mdToJs(code),
      },
    ],
  };
};

export default md;
