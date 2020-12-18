import {
    createApp
} from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import './index.css'
import Directives from './directives/index'
import copy from './directives/copy'

const app = createApp(App);
app.use(ElementPlus)
app.use(Vant);
Object.keys(Directives).forEach((key) => {
    app.directive(key, Directives[key])
})
app.mount('#app')