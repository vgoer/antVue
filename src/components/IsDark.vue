<template>

    <div class="darkbox">
        <a-switch v-model:checked="isdark">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
        </a-switch>
    </div>

</template>

<script setup>
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

let isdark = ref(false)

</script>
<style scoped>


</style>