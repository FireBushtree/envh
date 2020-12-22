import path from 'path';
import { defineConfig } from 'dumi';
const srcPath = `${path.resolve(__dirname)}/src`;

export default defineConfig({
  // logo: '/images/logo.jpg',
  mode: 'site',
  alias: {
    '@/src': path.resolve(__dirname, './src'),
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'],
    [
      'import',
      {
        libraryName: 'envh',
        camel2DashComponentName: false,
        libraryDirectory: '',
        customStyleName: (name) => {
          return `../style/index.less`;
        },
      },
      'envh',
    ],
  ],
  theme: {
    '@color-primary': '#4A88EE',
  },
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
        children: ['nav-bar/demo/index.md'],
      },
    ],
  },
  navs: [null],
});
