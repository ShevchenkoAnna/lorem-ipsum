import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListComments from '@/components/ListComments'
import Comment from '@/components/Comment'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/comments',
      component: ListComments
    },
    {
      path: '/comments/:id',
      component: Comment,
      props: true,
    }
  ],
  mode: 'history'
})
