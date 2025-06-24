<template>
<nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold text-indigo-600">MySite</a>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <a href="#" class="text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 transition">Services</a>
          <a class="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          <div v-if="userData">
        <RouterLink to="/login" @click="logout()" class="block text-gray-700 hover:text-indigo-600">Logout</RouterLink>
      </div>
      <div v-else>
        <RouterLink to="/sign-up" class="block text-gray-700 hover:text-indigo-600">Sign in </RouterLink>
      </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center hover:cursor-pointer">
          <button id="menu-button" class="text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden px-4 pt-2 pb-4 space-y-1">
      <a href="#" class="block text-gray-700 hover:text-indigo-600">Home</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600">About</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600">Services</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600">Contact</a>
      <div v-if="userData">
        <a href="#" class="block text-gray-700 hover:text-indigo-600">Logout</a>
      </div>
      <div v-else>
        <a href="#" class="block text-gray-700 hover:text-indigo-600">Sign in</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted ,ref } from 'vue';
import { RouterLink } from 'vue-router'; 
import axios from 'axios';
import { API_BASE_URL } from '../config/api';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
const toast = useToast();
const userData = ref("");
const router = useRouter();
onMounted(()=>{
    let user = localStorage.getItem("user");
    userData.value = user?JSON.parse(user) : null;
    console.log(userData.value)
})

 
const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_BASE_URL}/api/logout`,{},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    userData.value = null

    if (response.data.success) {
      toast.success("Logged out successfully")
      router.push('login') 
    } else {
      toast.error("Something went wrong while logging out.")
    }

  } catch (error) {
    console.error("Logout error:", error)
    toast.error("Logout failed. Try again.")
  }
}

</script>