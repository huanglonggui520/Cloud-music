<template>
  <div>
    <div class="icon" @click="back">
      <van-icon name="arrow-left" size='28' color='#fff'/>
    </div>
    <div class="song-bc" :style="`background-image: url(${Music.picUrl});`">
    </div>
    <!-- 摆臂 -->
    <div class="needle" :class="isplay?'handtrue':'handfalse'">
    </div>
    <!-- 播放云盘 -->
    <div class="bg bgplay" :style="`animation-play-state:${isplay?'running':'paused'}`">
      <img
        class="bgimg"
        width="160"
        height="160"
        @click="play"
        :src="Music.picUrl"
      />
      <img
        class="bgimg"
        @click="play"
        v-show="!isplay"
        width="50"
        height="50"
        src="./img/start.png"
      />
    </div>
    <div class="music">
      <p class="name">{{Music.name}}</p>
      <p class="music-title">{{Nowlyric}}</p>
    </div>
    <video :src="`https://music.163.com/song/media/outer/url?id=${id}.mp3`" ref="MyVideo"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isplay:false,
      lyric:{},
      Nowlyric:'',
      Music:{},
      id:this.$route.query.id
    }
  },
  async created(){
    console.log(this.$route.query.id)
    const res =await this.$api.GetLyric({id:this.$route.query.id})
    const MusicDetails=await this.$api.GetMusicDetails({ids:this.$route.query.id})
    
    this.Music=MusicDetails.songs[0].al
    console.log(this.Music)
    let lyricData=res.lrc.lyric
    console.log(lyricData)
    this.lyric=await this.SetLYRIC(lyricData)
    this.Nowlyric=this.lyric[0]
    this.PlaySleep()
    // console.log(this.lyric)
    
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
      play(){
        if(!this.isplay){
          this.$refs.MyVideo.play()
        }else{
          this.$refs.MyVideo.pause()
        }
        this.isplay=!this.isplay
    },
    SetLYRIC(lyric){
      console.log('66',lyric.match(/([\u4e00-\u9fa5]+.+)|\s\n/g))
      console.log(lyric)
      const MusicRegTime=/\[.+\]/g
      // const Music=/([\u4e00-\u9fa5]+.+)|(\s)\n/g
      const Music=/[^(\[.+\])]/g
      console.log(lyric.split(/\[.+\]/g))
      // Music=Music.replace(/\]/g,'')
      const strTime=lyric.match(MusicRegTime)
      const MusicStr=lyric.split(/\[.+\]/g).slice(1) //将【xxx]分割出来
      let Time=''
      let Miao=null
      let Obj={}
      console.log(MusicStr)
      strTime.forEach((item,i) => {
        // console.log('item',item)
        Time= item.replace(/\[|\]/g,'')
        // console.log(Time)
        Miao=Time.match(/^\d+/g)[0]*60+parseInt(Time.match(/\d+/g)[1])
        // console.log(Miao)
        // console.log(MusicStr[i])
        Obj[Miao]=MusicStr[i]
      });
    //  console.log(Obj)
    //  console.log(this.lyric[36])
      return Obj
    },
    PlaySleep(){
      this.$refs.MyVideo.addEventListener('timeupdate', (event) => {
        console.log(this.$refs.MyVideo.currentTime)
        // this.lastlyric
        let str=this.$refs.MyVideo.currentTime
        const miao=str.toString().split('.')[0]
        if(this.lyric[miao]){
          this.Nowlyric=this.lyric[miao]
        }
        console.log(this.lyric[miao])

      });

    }
  }
};
</script>

<style scoped>
.needle{
    z-index: 10;
    width: 80px;
    background-size: contain !important;
    height: 130px;
    background: transparent;
    background-repeat: no-repeat;
    position: absolute;
    background: url('./img/needle-ab.png');
    /* left: 50%; */
    left:170px;
    /* background-position: -4px -4px; */
    transform-origin: left top;
    top: 8px;
    transition: all 0.5s;
    /* transform:rotate(-40deg); */
}

.song-bc{
    width: 100vw;
    background-position:center center;
    background-size: 100% 100%;
   background-repeat:no-repeat;
    opacity: 1;
    filter: blur(20px); 
    bottom: 0px;
    left: 0px;
    position:fixed;
    z-index: 1;
    height: 100vh;
    /* background-image:url('http://static.runoob.com/images/mix/paper.gif'); */
}
.song-bc::before{
    background: rgba(0, 0, 0, 0.5);
    content: "";
    width: 100vw;
    position:fixed;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    height: 100vh;
}
.bg{
  background: url('./img/bg.png') no-repeat;
  width: 250px;
  position: absolute;
  left: 70px;
  z-index: 5;
  top: 50px;
  height: 250px;
  background-size: contain;
}
.bgplay{
  animation: Video 5s ;
  -webkit-animation-iteration-count:infinite;
  -webkit-animation-timing-function:linear;
}
.name{
  font-size: 18px;
  
}
.music-title{
  font-size: 14px;
  width: 80vw;
  white-space:normal;
  margin-top: 30px;
  /* text-overflow: ellipsis; */
  /* overflow: hidden; */
}
.bgimg{
  position: absolute;
  margin-top: 50%;
  z-index: -999;
  border-radius: 50%;
  margin-left: 50%;
  transform: translate(-50%,-50%);
}
.music{
  /* color:#fff; */
  position:absolute;
  text-align: center;
  top: 320px;
  margin-left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: #fff;
  /* width: 90%; */
  z-index: 100;
}
.handfalse{
  transform:rotate(-40deg);
}
.handtrue{
  transform:rotate(-15deg);
}
.icon{
  position: absolute;
  z-index: 111;
  left: 15px;
  top: 15px;
}
@keyframes Video
{
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
