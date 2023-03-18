<template>
    <div class="formcontent">
        <a-form 
            class="box"
            :model="formState"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
            >
            <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
            label="邮箱"
            name="email"
            :rules="[{ required: true, message: '请输入邮箱!' }]"
            >
            <a-input v-model:value="formState.email" />
            </a-form-item>

            <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
            >
            <a-input-password v-model:value="formState.password" />
            </a-form-item>



            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>

    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { userLoginApi } from '@/Api/user';

// 表单数据
const formState = reactive({
    username:'',
    password:'',
    email:'',
    remember:true,
})

// 登录
const onFinish = async (value) => {

    console.log('Success:', value);

    let result = await userLoginApi(value)
    console.log(result)


}
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
}

</script>

<style scoped lang="less">
.formcontent{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;

    .box{
        width: 25%;
    }
}

</style>