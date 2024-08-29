<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue';



</script>

<template>

  <Header />
  <main>
    <router-view />


  </main>
  <!-- FOOTER -->
  <footer
    class="mt-32 py-6 px-6 border-t border-zinc-700 md:flex md:flex-row md:justify-between md:items-center sm:flex-col sm:justify-center sm:items-center  sm:pt-5 sm:text-base md:text-xl text-gray-400">
    <ul class="flex gap-2 flex-1 justify-center md:justify-start">
      <router-link :to="{ name: 'about' }" active-class="text-blue-500 underline underline-offset-4"
        class="text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer">
        About
      </router-link>



      <router-link :to="{ name: 'projects' }" active-class="text-blue-500 underline underline-offset-4"
        class="text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer">
        Projects
      </router-link>


      <router-link :to="{ name: 'skills' }" active-class="text-blue-500 underline underline-offset-4"
        class="text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer">
        Skills
      </router-link>


      <router-link :to="{ name: 'contact' }" active-class="text-blue-500 underline underline-offset-4"
        class="text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer">
        Contacts
      </router-link>
    </ul>
    <div class="flex flex-1 justify-center md:justify-end">
      <span>
        &copy; 2024 HIDA BAguibassa David. All right reserved
      </span>
    </div>
  </footer>
  <!-- <RouterView /> -->
</template>

<style scoped>
  :root {
    --color-text: #0000;
  }

  nav a.router-link-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

</style>
