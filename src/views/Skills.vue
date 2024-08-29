<template>
     <!-- SKILLS -->
     <section>
      <div class="p-6 text-center text-3xl mb-10 mt-20">
        <h3 class="text-white font-bold decoration-double decoration-sky-800 underline underline-offset-8">
          SKILLS
        </h3>
      </div>
      <div class="flex gap-2 justify-between items-start p-6 my-6">
        <div>
          <h3 class="text-xl text-white p-2 my-6 uppercase font-semibold md:2xl">Backend Tools</h3>
          <div class="flex  justify-start items-center gap-3 flex-wrap">
            <span
              class="bg-slate-800 text-white relative flex items-center text-xs font-semibold md:pl-3 md:pr-3.5 md:py-2 pl-1 pr-1.5 py-1 rounded-full"
              v-for="(backend, index) in backend_tech" :key="index">
              <img class="relative w-4 h-4 md:w-7 md:h-7 rounded-full -translate-x-0.5 opacity-90 mr-1 md:mr-2"
                :src="backend.icon" />

              <span>{{ backend.laguage }}</span>
            </span>
          </div>
        </div>
        <div>
          <h3 class="text-xl text-white p-2 my-6 uppercase font-semibold md:2xl">Front-end Tools</h3>
          <div class="flex  justify-start items-center gap-3 flex-wrap">
            <span
              class="bg-slate-800 text-white relative flex items-center text-xs font-semibold md:pl-3 md:pr-3.5 md:py-2 pl-1 pr-1.5 py-1 rounded-full"
              v-for="(front, index) in frontend_tech" :key="index">
              <img class="relative w-4 h-4 md:w-7 md:h-7 rounded-full -translate-x-0.5 opacity-90 mr-1 md:mr-2"
                :src="front.icon" />

              <span>{{ front.laguage }}</span>
            </span>
          </div>
        </div>
        <div>
          <h3 class="text-xl text-white p-2 my-6 uppercase font-semibold md:2xl">Tools I use</h3>
          <div class="flex  justify-start items-center gap-3 flex-wrap">
            <span
              class="bg-slate-800 text-white relative flex items-center text-xs font-semibold md:pl-3 md:pr-3.5 md:py-2 pl-1 pr-1.5 py-1 rounded-full"
              v-for="(tool, index) in devtool" :key="index">
              <img class="relative w-4 h-4 md:w-7 md:h-7 rounded-full -translate-x-0.5 opacity-90 mr-1 md:mr-2"
                :src="tool.icon" />

              <span>{{ tool.laguage }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
import projects from '@/functions/projects';


const frontend_tech = projects.frontend_tech
const backend_tech = projects.backend_tech
const devtool = projects.devtool
</script>
<style lang="">
    
</style>