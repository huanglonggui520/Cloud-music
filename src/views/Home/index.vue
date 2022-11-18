<template>
  <div class="home" >
        <!-- 标题 -->
        <van-notice-bar
    left-icon="volume-o"
    scrollable
    text="该项目为个人开发，并非商业项目，仅供娱乐"
  />
        <p class="title">推荐歌单</p>
        <!-- 推荐歌单 -->
        <div>
            <van-row  gutter="10">
                <van-col span="8" v-for="item in PersonalizedMusicData" :key="item.id">
                    <div>
                        <van-image
                            width="100%"
                            fit="cover"
                            height='110'
                            :src="item.picUrl"
                        />
                    </div>
                    <p class="music-title">{{item.name}}</p>
                </van-col>
            
            </van-row>
        </div>
        <!-- 最新音乐 -->
        <p class="title">最新音乐</p>
        <Cell :Data='NewMusicData'></Cell>
    
  </div>
</template>

<script>
import Cell from '@/components/cell'

export default {
    data() {
        return {
            PersonalizedMusicData:[], //推荐歌单
            NewMusicData:[],
            loading: false,
            finished: false,
        }
    },
    components:{
        Cell
    
    },
    async created() {
        const res= await this.$api.PersonalizedMusic({limit:6})
        this.PersonalizedMusicData=res
        
        const ResNewMusic=await this.$api.GetNewMusic({limit:20})
        this.NewMusicData=ResNewMusic
        
        console.log(this.NewMusicData)
    },
    methods:{
       
        
    }
   
}
</script>

<style  scoped lang='less'>
.music-title{
    font-size: 14px;
    /* text-align: center; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
    overflow: hidden;
    margin-bottom: 10px;
    word-break: break-all;
    text-overflow: ellipsis;
}
.title{
    font-size: 16px;
    
    color: #434548;
    
    background-color: #DDDEE0;
    padding: 10px;
}
.home{
    padding-bottom: 47px;
    padding-top: 47px;
}

</style>>

