import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Customer'
import books from '../views/Customer/CustomerDashboard'
import Register from '../views/Register'
import AddBooks from '../views/Admin/AddBooks'
import FineClosure from '../views/Admin/FineClosure'
import UserHistory from '../views/Admin/UserHistory'
import BookList from '../views/BookList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/addbooks',
    name: 'AddBooks',
    component: AddBooks
  },
  {
    path: '/fineclosure',
    name: 'FineClosure',
    component: FineClosure
  },
  {
    path: '/userhistory',
    name: 'UserHistory',
    component: UserHistory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
