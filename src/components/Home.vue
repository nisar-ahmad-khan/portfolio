<template>
  <div class="bg-white text-gray-800">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Nisar Ahmad</h1>
      <p class="text-lg mb-8 max-w-2xl mx-auto">
        "I’m a Full Stack Web Developer from Pakistan, specializing in Vue.js for frontend development, Laravel for backend systems, and Tailwind CSS for sleek, responsive design. I build fast, secure, and modern web applications. Currently, I’m working as an intern at NBTHub, gaining hands-on experience in real-world projects.
      </p>
      <a href="#work">
        <button class="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          View My Work
        </button>
      </a>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Vue.js</h3>
          <p class="text-sm text-gray-600">Frontend JavaScript framework for building reactive interfaces</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Laravel</h3>
          <p class="text-sm text-gray-600">Backend PHP framework for powerful web apps</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Tailwind CSS</h3>
          <p class="text-sm text-gray-600">Utility-first CSS framework for modern designs</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">MySQL</h3>
          <p class="text-sm text-gray-600">Relational database management system</p>
        </div>

        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">mysqlite</h3>
          <p class="text-sm text-gray-600">File based database management system</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects / Features Section -->
  <section id="work" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Highlighted Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="https://github.com/nisar-ahmad-khan/role-based-authentication">
        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">🔐 Auth System</h3>
          <p class="text-gray-600">Secure login/register system built with Sanctum authentication and Vue.</p>
        </div>
        </a>

        <a href="https://github.com/nisar-ahmad-khan/Ecom-website">
        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">🛒 eCommerce Site</h3>
          <p class="text-gray-600">A basic Laravel + Vue eCommerce app with product listing & cart.</p>
        </div>
        </a>

        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">📅 Appointment System</h3>
          <p class="text-gray-600">Doctor appointment system with calendar and availability slots.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-indigo-600 text-white py-12">
    <div class="max-w-7xl mx-auto text-center px-4">
      <h3 class="text-2xl font-bold mb-4">Interested in working together?</h3>
      <a href="https://wa.me/03247747752" target="_blank">
        <button class="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Me
        </button>
      </a>
    </div>
  </section>
</div>


</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
const userData = ref("");

onMounted(()=>{
    let user = localStorage.getItem("user");
    userData.value = user?JSON.parse(user) : null ;
    console.log(userData.value)
})
</script>