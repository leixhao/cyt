import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import ElementTreeLine from 'element-tree-line';
// css
import 'element-tree-line/dist/style.css';
Vue.component(ElementTreeLine.name, ElementTreeLine);
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
