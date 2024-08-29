<template>
    <div class="mt-8 pt-12 px-32 w-full md:w-3/4 mx-auto">
        <div class="w-full flex justify-start mb-12">
            <router-link :to="{ name: 'about' }"
                class="inline-flex justify-center items-center bg-slate-800 hover:bg-slate-900 size-12 rounded-full border border-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="30" height="35" viewBox="0 0 24 24"
                    stroke-width="2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                </svg>
            </router-link>
        </div>
        <img class="" src="/images/cv.png" alt="">
    </div>
</template>
<script setup>

</script>
<style></style>