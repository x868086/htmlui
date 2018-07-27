import Vue from 'vue'
import Router from 'vue-router'
import alert from '../components/alert.vue';
import card from '../components/card.vue';
import button from '../components/button.vue';
import shades from '../components/shades.vue';
import navtop from '../components/navtop.vue';
import loadingcycle from '../components/loadingcycle.vue';
import loadingline from '../components/loadingline.vue';
import form from '../components/form.vue';

Vue.use(Router)


const router=new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/alert',
      name:'alert',
      component:alert
    },
    {
      path:'/card',
      name:'card',
      component:card
    },
    {
      path:'/button',
      name:'button',
      component:button
    },
    {
      path:'/shades',
      name:'shades',
      component:shades
    },
    {
      path:'/navtop',
      name:'navtop',
      component:navtop
    },
    {
      path:'/loadingcycle',
      name:'loadingcycle',
      component:loadingcycle
    },
    {
      path:'/loadingline',
      name:'loadingline',
      component:loadingline
    },
    {
      path:'/form',
      name:'form',
      component:form
    }

  ]
})


export default router
