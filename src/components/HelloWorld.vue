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
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <p>{{ t('hello') }}</p>
</template>

// 自带async
<script setup>
  // import { useI18n } from 'vue-i18n';
  import { defineProps, getCurrentInstance, onMounted, reactive, useContext, computed, ref } from 'vue'
  import request from 'utils/request'

  // i19n 实现原理
  const ins = getCurrentInstance();
  console.log(ins)
  function useI18n() {
    const locale = ref('en');
    const i19n =  ins.type.i19n;
    const t = (msg)=> { 
      return computed(()=> i19n[locale.value][msg]).value; 
    }
    return {t, locale}
  }
  const { t, locale } = useI18n()


 // 属性定义
  const props = defineProps({
    msg: String
  })

  // 3. 获取上下文
  const ctx = useContext();
  console.log(ctx)

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
      //  console.log(user)
      }catch(error){
        console.log(error)
      }
  })
</script>
<i19n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i19n>