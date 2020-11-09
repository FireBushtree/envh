import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  // logo: '/images/logo.jpg',
  mode: 'site',
  alias: {
    '@/src': path.resolve(__dirname, './src'),
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'],
  ],
  menus: {
    '/guide': [
      {
        title: '介绍',
        children: ['guide/index.md'],
      },
    ],
    '/component': [
      {
        title: '组件',
        children: ['page/index.md', 'white-space/index.md', 'nav-bar/index.md'],
      },
    ],
  },
  navs: [null],
});
