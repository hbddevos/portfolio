<template>
    <header class="relative flex justify-center items-center top-0 left-0 z-50 w-full transition-all duration-150 ease-out">
        <div
            class="relative flex justify-center items-center mb-6 top-6 left-0 z-40 w-auto h-10 transition duration-200 ease-out">
            <div
                class="max-w-96 flex justify-center items-center h-full p-8 bg-slate-900 backdrop-blur-md border rounded-full border-neutral-200/80">
                <div class="flex justify-center items-center w-full h-full select-none text-white">

                    <!-- File Button -->

                        <router-link :to="{name:'about'}"
                        active-class="text-blue-500"
                            class="rounded text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer hover:font-bold hover:text-cyan-600 hover:bg-neutral-100">
                            About
                        </router-link>

                    
                    
                        <router-link :to="{name:'projects'}"
                        active-class="text-blue-500"
                            class="rounded text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer hover:font-bold hover:text-cyan-600 hover:bg-neutral-100">
                            Projects
                        </router-link>
                    
                    
                        <router-link :to="{name:'skills'}"
                        active-class="text-blue-500"
                            class="rounded text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer hover:font-bold hover:text-cyan-600 hover:bg-neutral-100">
                            Skills
                        </router-link>
                    
                    
                        <router-link :to="{name:'contact'}"
                        active-class="text-blue-500"
                            class="rounded text-sm md:text-xl cursor-default flex items-center leading-tight justify-center px-3 h-full hover:cursor-pointer hover:font-bold hover:text-cyan-600 hover:bg-neutral-100">
                            Contacts
                        </router-link>
                        
                    
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';


</script>
<style scoped>


</style>