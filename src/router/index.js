import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  store
    .dispatch('checkAuthentication')
    .then(() => {
      if (!store.getters.isAuthenticated) {
        return next('/signup')
      } else if (!store.getters.user && to.name !== 'Profile') {
        return next({ name: 'Profile' })
      }
      next()
    })
    .catch(error => next(error))
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Confirm.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Reset.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/signout',
    name: 'Signout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signout.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/error/:error',
    name: 'Error',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Error.vue')
  },
  {
    path: '*',
    name: 'Error404',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.onError = error => {
  router.push({ name: 'Error', params: error.message })
}

export default router
