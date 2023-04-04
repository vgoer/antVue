<template>
    <h3 class=" shadow-md text-purple-600 h-11 border-4 hover:bg-red-950 active:bg-purple-950 border-l-indigo-500 bg-blue-50 text-center flex justify-between font-bold">
        <p>aaa</p>
        <h3>aa</h3>
    </h3>

    
    <ul class="space-y-2 w-20 shadow-xl text-center ">
    <li>
        <ul class="grid grid-cols-10 h-7 w-64">
        <li class="bg-red-50"></li>
        <li class="bg-red-100"></li>
        <li class="bg-red-200"></li>
        <li class="bg-red-300"></li>
        <li class="bg-red-400"></li>
        <li class="bg-red-500"></li>
        <li class="bg-red-600"></li>
        <li class="bg-red-700"></li>
        <li class="bg-red-800"></li>
        <li class="bg-red-900"></li>
        </ul>
    </li>
    <li>
        <ul class="grid grid-cols-10 h-7 w-52">
        <li class="bg-yellow-50"></li>
        <li class="bg-yellow-100"></li>
        <li class="bg-yellow-200"></li>
        <li class="bg-yellow-300"></li>
        <li class="bg-yellow-400"></li>
        <li class="bg-yellow-500"></li>
        <li class="bg-yellow-600"></li>
        <li class="bg-yellow-700"></li>
        <li class="bg-yellow-800"></li>
        <li class="bg-yellow-900"></li>
        </ul>
    </li>
    <li>
        <ul class="grid grid-cols-10 h-7 w-40">
        <li class="bg-green-50"></li>
        <li class="bg-green-100"></li>
        <li class="bg-green-200"></li>
        <li class="bg-green-300"></li>
        <li class="bg-green-400"></li>
        <li class="bg-green-500"></li>
        <li class="bg-green-600"></li>
        <li class="bg-green-700"></li>
        <li class="bg-green-800"></li>
        <li class="bg-green-900"></li>
        </ul>
    </li>
    <li>
        <ul class="grid grid-cols-10 h-7 w-32">
        <li class="bg-blue-50"></li>
        <li class="bg-blue-100"></li>
        <li class="bg-blue-200"></li>
        <li class="bg-blue-300"></li>
        <li class="bg-blue-400"></li>
        <li class="bg-blue-500"></li>
        <li class="bg-blue-600"></li>
        <li class="bg-blue-700"></li>
        <li class="bg-blue-800"></li>
        <li class="bg-blue-900"></li>
        </ul>
    </li>
    <li>
        <ul class="grid grid-cols-10 h-7 w-24">
        <li class="bg-purple-50"></li>
        <li class="bg-purple-100"></li>
        <li class="bg-purple-200"></li>
        <li class="bg-purple-300"></li>
        <li class="bg-purple-400"></li>
        <li class="bg-purple-500"></li>
        <li class="bg-purple-600"></li>
        <li class="bg-purple-700"></li>
        <li class="bg-purple-800"></li>
        <li class="bg-purple-900"></li>
        </ul>
    </li>
    <li>
        <ul class="grid grid-cols-10 h-7">
        <li class="bg-pink-50"></li>
        <li class="bg-pink-100"></li>
        <li class="bg-pink-200"></li>
        <li class="bg-pink-300"></li>
        <li class="bg-pink-400"></li>
        <li class="bg-pink-500"></li>
        <li class="bg-pink-600"></li>
        <li class="bg-pink-700"></li>
        <li class="bg-pink-800"></li>
        <li class="bg-pink-900"></li>
        </ul>
    </li>
    </ul>

    <div class="form-box">
        <el-form 
        :model="formDate"
        label-width="100px"
        style="max-width: 460px"
        >
        <el-form-item label="用户名">
            <el-input v-model="formDate.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formDate.password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="formDate.email" placeholder="请输入邮箱"></el-input>

        </el-form-item>
        <div class=" text-center my-2">
            <el-radio-group v-model="formDate.ralo" class=" text-center" >
            <el-radio label="admin">管理员</el-radio>
            <el-radio label="kun">监管部门</el-radio>
            </el-radio-group>
        </div>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button type="" @click="resetForm">重置</el-button>
        </el-form-item>
        </el-form>
        
    </div>
    
</template>

<script setup>
import { reactive } from 'vue';



// 注册用户数据
const formDate = reactive({
    username:'',
    password:'',
    email:'',
    ralo:'',

})

// 提交
const submitForm = () => {
    console.log(formDate)
}


// 重置
const resetForm = () => {
    console.log(formDate)
}

</script>

<style scoped>
.form-box{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

}

</style>