/**
 * 按需引入ElementPLus
 */
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default function configElementPlusResolverPlugin() {
  const elementPlusResolverPlugin = Components({
    dirs: [], // Avoid parsing src/components.  避免解析到src/components
    deep: false,
    resolvers: [ElementPlusResolver()],
  });
  return elementPlusResolverPlugin;
}
