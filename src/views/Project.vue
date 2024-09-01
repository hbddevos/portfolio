<template>

    <section class="flex flex-col items-center">
        <div class="mt-6 text-white w-11/12 sm:w-8/12 md:w-10/12 lg:max-w-3xl">
            <div class="w-full flex justify-start">
                <router-link :to="{name:'projects'}"
                    class="inline-flex justify-center items-center bg-slate-800 hover:bg-slate-900 size-12 rounded-full border border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="30"
                        height="35" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                </router-link>
            </div>
            <h3 class="text-center mt-10 mb-8 uppercase  text-3xl md:text-4xl font-bold tracking-wide">{{
                project.project_name }}</h3>
            <div class="my-8 text-center">
                <a v-if="project.link" :href="project.link" target="_blank" class="inline-flex text-xl text-blue-700 underline underline-offset-2">view
                    <span class="ms-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="35" viewBox="0 0 24 24"
                            stroke-width="2" stroke="#1d4ed8" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </span>
                </a>
            </div>
            <div class="h-36 w-full my-12">
                <img class="block h-full w-full object-cover object-center rounded-lg" src="/images/dev.jpg"
                    alt="project_image">
            </div>

            <div class="p-8">
                <h3 class="text-2xl md:text-3xl font-semibold mb-4">Overview</h3>
                <p class="text-gray-400 md:text-[1.10rem]">
                    {{ project.description }}
                </p>
                <div class="mt-14 mb-2">
                    <h3 class="text-2xl md:text-3xl font-semibold mb-4">Achievemnts</h3>

                    <ul class="text-gray-400 list-disc list-outside pl-10 md:text-[1.10rem]">
                        <li v-for="(achivement, index) in project.key_responsibilities_achievements" :key="index">
                            {{ achivement }}
                        </li>
                    </ul>
                </div>
                <div class="mt-12">
                    <h3 class="text-2xl md:text-3xl font-semibold mb-4">Stack</h3>
                    <ul class="text-gray-400 list-disc list-outside pl-10 md:text-[1.10rem]">
                        <li v-for="(tech, index) in project.technologies_used" :key="index">
                            {{ tech.laguage }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import projects from '@/functions/projects';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const project = projects.work_experience_projects.find((pro) => pro.id == route.params.id)
    console.log(route.params.id, project)
</script>
<style></style>