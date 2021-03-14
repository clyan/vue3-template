<template>
  <div class="container">
    <el-row>
        <el-col :span="24">
            <headerBar></headerBar>
        </el-col>
    </el-row>
      <el-row>
        <el-col :span="6">
            <navBar></navBar>
        </el-col>
        <el-col :span="18">
            <appMain></appMain>
        </el-col>
      </el-row>
  </div>
</template>

<script setup>
    import navBar from  'comp/layout/NavBar.vue'
    import appMain from 'comp/layout/AppMain.vue'
    import HeaderBar from 'comp/layout/HeaderBar.vue'
</script>

<style>

</style>