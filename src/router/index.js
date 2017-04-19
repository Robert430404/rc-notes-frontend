import Vue    from 'vue'
import Router from 'vue-router'
import Hello  from '@/components/Hello'
import AddNew from '@/components/AddNew'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }, {
            path: '/add-new',
            name: 'New',
            component: AddNew
        }
    ]
})
