<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 class="text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
        Create new account
          <router-link to="/sign-up" class="text-indigo-600 hover:text-indigo-500 font-medium">sign-up</router-link>
        </p>
      </div>

      <form @submit.prevent="register">
        <div class="rounded-md shadow-sm space-y-4">
        

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input v-model="email" id="email" type="email" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" id="password" type="password" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>

          
        </div>

        <div class="mt-6">
          <button type="submit" @click="login()"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import { API_BASE_URL } from '../config/api.js';
import { useToast } from 'vue-toastification';
import { useRoute , useRouter } from 'vue-router';
import { onMounted  } from 'vue';
const toast = useToast();
const router = useRouter();

const email = ref("");
const password = ref("");



onMounted(()=>{
    const user = localStorage.getItem("user");
    if(user){
        router.push({name:"HomePage"});
    }
})


const login = async()=>{
    const response = await axios.post(`${API_BASE_URL}/api/login`,{
        email : email.value ,
        password : password.value
    });

    if(response.data.success){
        const user = response.data.data;
        const token = response.data.token;
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("token",token);
        toast.success(`You are Welcome back ${user.name}`);
        router.push({name:"HomePage"})

    }
}

</script>
