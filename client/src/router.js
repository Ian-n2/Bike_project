import Vue from 'vue'
import FrontPage from './components/FrontPage.vue'

import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const routes =[
  {path: '', component: FrontPage, name: 'FrontPage'}
]

const router = new VueRouter(
  { mode: 'history', routes}
);

export default router
