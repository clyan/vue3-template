<template>
    <div style="background: green;color:white;">
        <p>props: {{ name }}</p>
        <p>isRefProps: {{ isRefProps }}</p>
        <p>isRefByRef: {{ isRefByRef }}</p>
        <p>age: {{ age }}</p>
        <p>dataByReactive: {{ dataByReactive }}</p>
        <p>reactiveToRefs: {{ reactiveToRefs.x }}</p>
    </div>
</template>

<script setup>
import { defineProps, isRef, reactive, getCurrentInstance, onMounted, useContext, computed, ref, toRefs } from 'vue';
// 获取props
const props = defineProps({
    name:{
        type: String
    }
})
const isRefProps = isRef(props.name);

// 定义基础类型响应式对象, 注意定义的包装类型的对象，通过.value 获取原本的值
const age = ref(18);
const isRefByRef = isRef(age);

// 定义引用类型响应式对象
const dataByReactive = reactive({
    x: 1,
    y: 2
})

const  reactiveToRefs = toRefs(dataByReactive);

</script>

<style>

</style>