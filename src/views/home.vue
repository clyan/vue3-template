<template>
  <div>
    <HelloWorld msg="hello world msg" @myclick="onmyclick" ref="hw"> </HelloWorld>
    <newApi :name="name"></newApi>
    <button-counter></button-counter>
  </div>
</template>

<script setup>
    import HelloWorld from "comp/HelloWorld.vue";
    import newApi from "comp/newApi.vue";
    import { useContext, ref } from "vue";
    // 定义响应式变量
    const name = ref('ywy')

    const hw = ref(null);
    // 3. 定义事件
    const onmyclick = () => {
        console.log("myclick from helloworld");
        hw.value.someMethod();
    };
    // 获取上下文
    const ctx = useContext();
    ctx.expose({
      someMethod() {
          console.log("some message form HelloWorld");
      },
    });
</script>

<style>
</style>