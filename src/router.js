import VueRouter from 'vue-router'
import New from './components/New.vue'
import Index from './Index.vue'
import main from './components/Main.vue'

var router = new VueRouter({
    routes:[
        {path: '/', component:Index},
        {path:'/new', component: New},
        {path:'/main', component: main}
    ]
})

 export default router