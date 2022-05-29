<template>
    <Toast />

    <button @click="showToast">Show toast!</button>
</template>

<script setup>
    import Toast from 'primevue/toast';
    import { showToast } from './services/toastService';
</script>
