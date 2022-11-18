<template>
  <div class="Layout">

    <van-nav-bar :title="NavBarTitle" fixed/>
    <div>
      <!-- 防止页面被销毁 -->
      <keep-alive> 
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar   route >
      <van-tabbar-item   push to='/layout/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  push to='/layout/search' icon="search">搜索</van-tabbar-item>
      
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active:0,
            NavBarTitle:this.$route.meta.title
        }
    },
    watch:{
       $route(){//监听VUE身上的$route
        this.NavBarTitle=this.$route.meta.title
       }
    }
    
};
</script>

<style>
.Layout{
  /* padding-bottom: 50px; */
}
</style>
