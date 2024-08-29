<template>
  <!-- PROJECTS -->

  <section class="">
    <div class="text-center m-5">
      <h2 class="font-bold text-white text-3xl md:text-4xl lg:text-5xl p-8">My project and Experiences</h2>
    </div>
    <div
      class="mt-5 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 pb-4 border border-gray-800">
      <div v-for="(project, index) in work_experience_projects" :key="index"
        class="flex flex-col rounded-2xl lg:w-[450px] xl:w-[400px] md:w-[350px] border border-gray-800 hover:bg-slate-800 shadow-xl">
        <!-- <figure class="flex justify-center items-center rounded-2xl">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Card Preview" class="rounded-t-2xl">
              </figure> -->
        <div class="flex flex-col px-8 pb-5 pt-0">
          <div class="w-full flex justify-end">
            <router-link :to="`project/${project.id}`"
              class="inline-flex justify-center items-center bg-slate-800 hover:bg-slate-900 size-8 my-2 rounded-full border border-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="30" height="35" viewBox="0 0 24 24"
                stroke-width="1.2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </router-link>
          </div>
          <div class="text-2xl font-bold uppercase tracking-wider  text-white pb-6">{{ project.project_name }}</div>
          <div class="sm:text-sm md:text-base lg:text-lg   text-gray-400">{{ project.description }}
          </div>
          <div class="pt-6">
            <h2 class="mb-3 mt-4 text-xl font-semibold text-gray-300">Tech Stack</h2>
            <div class="flex justify-start flex-wrap gap-2">
              <span
                class="bg-slate-800 text-white relative flex items-center text-xs font-semibold pl-3 pr-3.5 py-2 rounded-full"
                v-for="(tech, index) in project.technologies_used" :key="index">
                <img class="relative w-7 h-7 rounded-full -translate-x-0.5 opacity-90 mr-2" :src="tech.icon" />

                <span>{{ tech.laguage }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>

</template>
<script setup>
  import projects from '@/functions/projects';

  const work_experience_projects = projects.work_experience_projects
</script>
<style></style>