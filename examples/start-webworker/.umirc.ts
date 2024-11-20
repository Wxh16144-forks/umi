import { defineConfig } from '@umijs/max';

export default defineConfig({
  model: {},
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  base: '/app/',
  publicPath: '/app/',
  qiankun:{
    slave: {}
  },
  mfsu: false,
});
