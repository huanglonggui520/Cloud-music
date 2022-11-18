import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/api'
// 自动按需引入组件
import { NavBar ,Tabbar, TabbarItem } from 'vant';
import { Col, Row ,Image as VanImage,Cell, CellGroup,Icon,Search,Empty,List,NoticeBar} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Empty);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NoticeBar);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(Icon);
Vue.use(Search);
Vue.prototype.$api=api  //将所有的api挂在VUE
// import Vant from 'vant'
// 这种方式太大，不推荐
// import 'vant/lib/index.css'
// Vue.use(Vant)
// @相当于src的绝对路径
import '@/mobile/flexible' //自动适配移动端宽度，自动改变HTML的font-size
import '@/styles/reset.css' //重置标签的默认样式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
