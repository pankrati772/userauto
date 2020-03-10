import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Userindex from '@/components/UserIndex'
import Login_err from '@/components/Login_err'

// 方案页面
import Option1 from '@/components/options/Option1'
import Option2 from '@/components/options/Option2'
import Option3 from '@/components/options/Option3'
import Option4 from '@/components/options/Option4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Userindex',
      name:'Userindex',
      component:Userindex,
      children:[
        {
          path:'option1',
          component:Option1
        },
        {
          path:'option2',
          component:Option2
        },
        {
          path:'option3',
          component:Option3
        },
        {
          path:'option4',
          component:Option4
        },
      ]
    },
    {
      path:'/Login_err',
      name:'Userindex',
      component:Login_err
    }
  ]
})
