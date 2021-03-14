<template>
  <div>
    <HelloWorld msg="hello world msg" @myclick="onmyclick" ref="hw"> </HelloWorld>
  </div>
</template>

<script setup>
    import HelloWorld from "comp/HelloWorld.vue";
    import { useContext, ref } from "vue";
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

<style></style>
