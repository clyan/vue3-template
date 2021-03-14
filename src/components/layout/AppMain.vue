<template>
  <div>
     <router-view v-slot="{Component}">
       <transition name="fade">
         <component :is="Component"></component>
       </transition>
     </router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>