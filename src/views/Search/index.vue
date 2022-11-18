<template>
  <div class="search">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @clear='clear'/>
    <div v-if="!show">
        <div class="bottom" v-if="!searchData.length">
        <span class="hot-search">热门搜索</span>
        <ul>
          <li v-for="(item,index) in HotData" :key="index" @click='PutHot(item.first)'>{{item.first}}</li>
        </ul>
      </div>
      <div v-else>
        <span class="hot-search">热门搜索</span>
        <Cell :Data='searchData'></Cell>
      </div>
    </div>
    <van-empty description="暂无搜索的内容" v-else/>
  </div>
</template>

<script>
import Cell from '@/components/cell.vue'

let time
export default {
  data() {
    return {
      value:'',
      HotData:[],
      searchData:[],
      show:false
    }
  },
  components:{
    Cell
   
  },
  
  async created(){
    const HotData=await this.$api.GetHot()
    this.HotData=HotData.hots
  },
  watch:{
    async value(val){
      clearTimeout(time)
      if(!val) return this.searchData=[] //阻止代码往下执行
      time=setTimeout(async ()=>{
          const searchData=await this.$api.GetSearchMusic({keywords:val,limit:20})
          if(!searchData.songs) return this.show=true
          this.show=false
          this.searchData=searchData.songs
        },500)
    }
  },
  methods:{
   async PutHot(str){
    this.value=str
    
    const searchData=await this.$api.GetSearchMusic({keywords:this.value,limit:10})
    this.searchData=searchData.songs
    clearTimeout(time) //关闭watch里面的定时器，防止二次请求
   },
    clear(){
      this.searchData=[]
      this.show=false
    }
  }
  
}
</script>

<style scoped>
ul{
  margin-top: 5px;
}
ul li{
  list-style: none;
  margin-bottom: 5px;
  font-size: 14px;
  border: 0.1px solid #A5A6A9;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
  padding-top: 5px;
  margin-right: 8px;
  padding-bottom: 5px;
}
.bottom{
  padding: 5px 10px 5px 10px;
}
.hot-search{
    font-size: 15px;
    color: #4A4D52;
  }
.search{
  padding-top: 50px;
}
.van-cell{
  font-size: 14px !important;
}
</style>