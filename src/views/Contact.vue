<template>
    <!-- CONTACT -->
    <section class="py-6  dark:text-gray-400 mt-20 mb-10">
        <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
                <h1 class="text-4xl font-bold">Get in touch</h1>
                <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
                <div class="space-y-4">
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 mr-2 sm:mr-6">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span>{{ personal_information.address }}</span>
                    </p>
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 mr-2 sm:mr-6">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                            </path>
                        </svg>
                        <span>{{ personal_information.phone_number }}</span>
                    </p>
                    <p class="flex items-center text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <a :href="`mailto:${personal_information.email}`">{{ personal_information.email }}</a>
                    </p>
                </div>
            </div>
            <div v-if="projects.social_links">
                    <div class="flex flex-col py-6 space-y-2 md:py-0 md:px-6">

                    <span v-for="(social, index) in projects.social_links" :key="index">
                        <a :href="social.link" target="_blank"
                            class="bg-slate-800 text-white relative flex items-center w-32 text-xs font-semibold pl-3 pr-3.5 py-2 rounded-full">
                            <img class="relative w-7 h-7 rounded-full -translate-x-0.5 opacity-90 mr-2"
                                :src="social.icon" />
                            <span>{{ social.social }}</span>
                        </a>
                    </span>
                </div>
                <!-- <label class="block">
                    <span class="mb-1">Full name</span>
                    <input type="text" placeholder="Leroy Jenkins"
                        class="block w-full rounded-md shadow-sm focus:ring bg-transparent focus:ring-opacity-75 focus:dark:ring-blue-600 border  border-gray-600 p-2">
                </label>
                <label class="block">
                    <span class="mb-1">Email address</span>
                    <input type="email" placeholder="leroy@jenkins.com"
                        class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-blue-600 dark:bg-transparent border border-gray-600 p-2">
                </label>
                <label class="block">
                    <span class="mb-1">Message</span>
                    <textarea rows="3"
                        class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-blue-600 dark:bg-transparent border border-gray-600"></textarea>
                </label>
                <button type="button"
                    class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-blue-600 dark:text-gray-50 focus:dark:ring-blue-600 hover:dark:ring-blue-600">Submit</button> -->
            </div>
        </div>
    </section>
</template>
<script setup>
    import projects from '@/functions/projects';

    const personal_information = projects.personal_information
</script>
<style></style>