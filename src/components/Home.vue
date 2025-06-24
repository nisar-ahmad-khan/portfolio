<template>




<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <a href="#" class="text-2xl font-bold text-indigo-600">MySite</a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8 text-base font-medium">
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">Home</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">About</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">Services</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">Contact</a>

        <div v-if="userData">
          <RouterLink to="/login" @click="logout" class="text-gray-700 hover:text-red-500 transition">Logout</RouterLink>
        </div>
        <div v-else>
          <RouterLink to="/sign-up" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Sign In</RouterLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="showMenu = !showMenu" class="text-gray-700 hover:text-indigo-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <transition name="fade">
    <div v-if="showMenu" class="md:hidden bg-white px-4 pb-4 space-y-2 text-base font-medium shadow-md">
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">Home</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">About</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">Services</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">Contact</a>

      <div v-if="userData">
        <RouterLink to="/login" @click="logout" class="block text-red-500 hover:text-red-600 transition">Logout</RouterLink>
      </div>
      <div v-else>
        <RouterLink to="/sign-up" class="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:bg-indigo-700 transition">Sign In</RouterLink>
      </div>
    </div>
  </transition>
</nav>







<div class="bg-white text-gray-800 font-sans leading-relaxed tracking-wide">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-green-500 to-purple-600 text-white py-24">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Hi, I'm Nisar Ahmad</h1>
      <p class="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
        I’m a Full Stack Web Developer from Pakistan, specializing in Vue.js for frontend development,
        Laravel for backend systems, and Tailwind CSS for sleek, responsive design. I build fast, secure,
        and modern web applications. Currently, I’m working as an intern at NBTHUB, gaining hands-on
        experience in real-world projects.
      </p>
      <a href="#work">
        <button class="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          View My Work
        </button>
      </a>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-14">My Tech Stack</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 class="font-semibold text-lg mb-2">Vue.js</h3>
          <p class="text-sm text-gray-600">Frontend JavaScript framework for reactive UIs</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 class="font-semibold text-lg mb-2">Laravel</h3>
          <p class="text-sm text-gray-600">Robust PHP backend framework for scalable apps</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 class="font-semibold text-lg mb-2">Tailwind CSS</h3>
          <p class="text-sm text-gray-600">Utility-first CSS for responsive design</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 class="font-semibold text-lg mb-2">MySQL</h3>
          <p class="text-sm text-gray-600">Relational database for structured data</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 class="font-semibold text-lg mb-2">SQLite</h3>
          <p class="text-sm text-gray-600">Lightweight file-based SQL database</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="work" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-14">Some Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <a href="https://github.com/nisar-ahmad-khan/role-based-authentication" target="_blank" class="group">
          <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">🔐 Auth System</h3>
            <p class="text-gray-600">Secure login/register system with Laravel Sanctum and Vue.js.</p>
          </div>
        </a>

        <a href="https://github.com/nisar-ahmad-khan/Ecom-website" target="_blank" class="group">
          <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">🛒 eCommerce Site</h3>
            <p class="text-gray-600">Basic Laravel + Vue app with product catalog and cart.</p>
          </div>
        </a>

        <div class="group">
          <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">📅 Appointment System</h3>
            <p class="text-gray-600">Doctor booking system with calendar and availability slots.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-indigo-600 text-white py-16">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h3 class="text-3xl font-bold mb-6">Interested in working together?</h3>
      <a href="https://wa.me/03247747752" target="_blank" rel="noopener noreferrer">
        <button class="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
          Contact Me on WhatsApp
        </button>
      </a>
    </div>
  </section>
</div>



</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

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

const showMenu = ref(false)

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