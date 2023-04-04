<template>
About   
<p>{{ store.sayMsg }}</p>

<button @click="store.setSattte">add</button>
<p>{{ store.count }}</p>
<p>{{ store.setPhone }}</p>

<hr>
<p>{{ user.userinfo }}</p>
</template>

<script setup>
import { mainStore } from '@/store';
import { userStore } from '@/store/user'
import { onMounted } from 'vue';

const store = mainStore()

const user = userStore()


</script>

<style scoped>


</style>