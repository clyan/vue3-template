<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">vuex-store:{{$store.state.count}}</p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="onclick">emit</button>

  <el-button type="danger">element3集成</el-button>
  <!-- <div>
    <p v-for="(user, index) of users.data" :key="index">{{user.name}}</p>
  </div> -->
</template>

// 自带async
<script setup>
  import { defineProps, onMounted, reactive, useContext } from 'vue'
  import request from 'utils/request'
 // 属性定义
  const props = defineProps({
    msg: String
  })
  console.log("props", props);

  // 3. 获取上下文
  const ctx = useContext();
  console.log(ctx);

  ctx.expose({
    someMethod() {
      console.log('some message from helloWorld')
    }
  })

  const users = reactive({data:[]})

  // 4. 定义事件
  const emit = defineEmit(['myclick']);
  const onclick = ()=> {
    emit('myclick')
  }
  const state = reactive({ count: 0 })

  onMounted(async()=>{
      try {
        const user = await request('/users');
       console.lo(user)
      }catch(error){
        console.log(error)
      }
  })
</script>