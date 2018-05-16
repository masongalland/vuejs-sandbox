// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import DragNDrop from '@/components/DragNDrop.vue'
import SelectNames from '@/components/SelectNames.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/drag',
      name: 'Drag and Drop',
      component: DragNDrop
    },
    {
      path: '/select',
      name: 'custom select',
      component: SelectNames
    },
    {
      path: '/',
      name: 'home'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App, DragNDrop },
  template: '<App/>'
})
