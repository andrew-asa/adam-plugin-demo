<template>
    hello demo
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { userStore } from './store/plugin_store';

const store = userStore()

onMounted(() => {
    store.init()
})
</script>
<style scoped></style>