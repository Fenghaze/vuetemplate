import VueRouter from 'vue-router'
import New from './components/New.vue'
import Index from './Index.vue'
import main from './components/Main.vue'
import Sub from './components/Sub.vue'


var router = new VueRouter({
    routes:[
        {path: '/', component:Index, children:[{path:'sub', component: Sub},]},
        {path:'/new', component: New},
        {path:'/main', component: main}
    ]
})

 export default router