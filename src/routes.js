
import {createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
const routes = [
    {name:"HomePage", path:'/',component:HomePage},
    {name:"SignUp", path:'/sign-up',component:SignUp},
    {name:"Login", path:'/login',component:Login}
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;