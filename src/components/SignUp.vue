<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 class="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium">sign-in</router-link>
        </p>
      </div>

      <form @submit.prevent="register">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input v-model="name" id="name" type="text" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>

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

          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input v-model="password_confirmation" id="password_confirmation" type="password" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="mt-6">
          <button type="submit" @click="signUp()"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
            Sign Up
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
const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation =ref("");


const signUp = async ()=>{
    if(password.value !== password_confirmation.value){
    toast.error("Passwords must be same"); 
}

if(!name.value){
    toast.error("Please provide your name"); 
}


if(!email.value){
    toast.error("your email is required"); 
}



const response = await axios.post(`${API_BASE_URL}/api/register`,
    {
        name: name.value,
        email: email.value,
        password:password.value,
        password_confirmation:password_confirmation.value
    }
    
);
if(response.data.success){
        toast.success("Your account has been registered");
        localStorage.setItem("user",JSON.stringify(response.data.user));
        localStorage.setItem("token",response.data.token);

        
            router.push({name:"HomePage"})
        
    }
    else{
    toast.error("Something went wrong!");
}

}

onMounted(()=>{
    const user = localStorage.getItem("user");
    if(user){
        router.push({name:"HomePage"});
    }
})


</script>
