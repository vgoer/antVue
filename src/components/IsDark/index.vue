<template>
    <el-switch
    v-model="dark"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
    @click="toDark"
    />
</template>
<script setup>
import {ref} from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toDark = useToggle(isDark)



const dark = ref(false)
</script>
<style scoped>



</style>