<template>
    <!-- ABOUT -->
    <section class="pt-10 overflow-hidden  mt-6 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div class="">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey 👋 I am <br
                            class="block sm:hidden" />{{ personal_information.full_name }}</h2>
                    <p
                        class="max-w-lg mt-3 sm:text-lg md:text-xl md:text-balance leading-relaxed text-gray-300 md:mt-8">
                        {{
                            professional_summary }}</p>

                    <div class="mt-4 text-xl text-gray-600 md:mt-8 flex gap-4">
                        <router-link :to="{ name: 'cv' }" class="font-bold rounded-lg text-lg  w-[175px] h-10 bg-blue-700 text-white flex justify-center items-center">
                            View CV 😍
                        </router-link>
                        <a href="/files/cv.pdf" class="font-bold rounded-lg text-lg  w-[175px] h-10 bg-blue-700 text-white flex justify-center items-center">
                            Download CV
                            <span class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-cv"
                                    width="25" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                                    <path d="M13 11l1.5 6l1.5 -6" />
                                </svg>
                            </span>
                        </a>

                    </div>
                </div>

                <div class="relative hidden lg:block my-auto">
                    <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                    <!-- <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" /> -->
                    <img class="relative w-full h-[500px] object-center object-cover xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-lg rotate-6 hover:rotate-0 ease-linear"
                        src="/images/david.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>
    import projects from '@/functions/projects';

    const personal_information = projects.personal_information
    const professional_summary = projects.professional_summary

</script>
<style lang="">

</style>