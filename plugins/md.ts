import { Plugin } from 'vite'
import { SourceDescription } from 'rollup'
import { transform } from 'esbuild'
import { markdown2jsx, MarkedRenderOptions } from './utils'
export * from './type'
const mdRegex = /\.md$/

export type mdPluginOptions = MarkedRenderOptions

function mdPlugin(options: mdPluginOptions = {}): Plugin {
  return {
    name: 'vite-jsx-md-plugin',
    enforce: 'pre',
    configResolved({ plugins }) {
      const reactRefresh = plugins.find(
        (plugin) => plugin.name === 'react-refresh'
      )
      this.transform = async function (code, id, ssr) {
        if (mdRegex.test(id)) {
          const { content } = markdown2jsx(code, options)
          const { code: transformedCode } = await transform(content, {
            loader: 'tsx',
            target: 'esnext',
            treeShaking: true
          })

          const sourceDescription = (await reactRefresh?.transform?.call(
            this,
            transformedCode,
            `${id}.tsx`,
            ssr
          )) as SourceDescription
          return (
            sourceDescription || {
              code: transformedCode,
              map: { mappings: '' }
            }
          )
        }
      } as Plugin['transform']
    }
  }
}

export default 
