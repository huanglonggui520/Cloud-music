<template>
  <div class="comment">
    <div>
        <van-nav-bar
            
            title='评论'
            fixed
            left-arrow
        />
    </div>
    <div class="content">
        <commentitem/>
    </div>
  </div>
</template>

<script>
import commentitem from '@/components/commentitem'
export default {
    components:{
        commentitem
    },
    data() {
        return {
            // comments:[]
        }
    },
    async created(){
        const commentData=await this.$api.GetComment({id:this.$route.query.id,limit:10})
        this.comments=commentData.comments
        console.log('7',this.comments)
    }
}
</script>

<style scoped>
.content{
    padding-top: 50px;
}
</style>