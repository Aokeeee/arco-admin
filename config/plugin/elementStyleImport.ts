/**
 * Theme import
 * 样式按需引入
 * https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-vue/README.md
 * https://arco.design/vue/docs/start
 */
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default function configElementPlusStyleImportPlugin() {
  const elementPlusResolverPlugin = AutoImport({
    resolvers: [ElementPlusResolver()],
  });
  return elementPlusResolverPlugin;
}
