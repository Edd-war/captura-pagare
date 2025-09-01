<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ToggleButton from 'primevue/togglebutton'
const tgbModo: Ref<boolean, boolean> = ref<boolean>(true)
const toggleDarkMode: () => void = () => {
    document.documentElement.classList.toggle('dark')
}
watch([tgbModo], toggleDarkMode)
</script>

<template>
    <header class="flex flex-col p-4 items-center">
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <label for="modo">Modo</label>
        <ToggleButton
            id="modo"
            v-model="tgbModo"
            class="w-40 text-5xl"
            onLabel="🌑"
            offLabel="☀️"
        />
    </header>

    <RouterView />
</template>

<style scoped></style>
