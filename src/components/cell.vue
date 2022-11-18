<template>
  <div>
    <van-cell-group v-for="(item,index) in Data" :key="index">
        <van-cell   center :title="item.name"  :label="item.song?item.song.artists[0].name+item.name:item.ar[0].name+' '+item.name" @click="GoComment(item.id)">
            <template #right-icon>
                <van-icon name="play-circle-o" size='24px' @click.stop="GoPlay(item.id)"/>
            </template>
        </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
props:{
    Data:{
        type:Array,
        default:()=>{
            return []
        }
    }
},
methods:{
    GoPlay(id){
        this.$router.push({
            path:'/play',
            query:{
                id
            }
        })
    },
    GoComment(id){
        this.$router.push({
            path:'/comment',
            query:{
                id
            }
        })
    }
}
}
</script>

<style>

</style>