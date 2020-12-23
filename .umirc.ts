import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  // logo: '/images/logo.jpg',
  mode: 'site',
  alias: {
    envh: path.resolve(__dirname, './src'),
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'],
    [
      'import',
      {
        libraryName: 'envh',
        libraryDirectory: '',
        customStyleName: (name) => {
          return `envh/${name}/style/index.less`;
        },
      },
      'envh',
    ],
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
        children: ['nav-bar/index.md'],
      },
    ],
  },
  navs: [null],
});
