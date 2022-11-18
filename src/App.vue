<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  created(){
    document.title='听歌啦'
  }
}
</script>

<style>
.ui{
  width: 100px;
  height: 200px;
  background-color: red;
}
html{
  height: 100%;
}
body{
  height: 100%;
}
</style>

