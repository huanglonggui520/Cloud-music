<template>
  <div>
    <div class="item">
        <div style="margin-right:10px;margin-left:10px">
            <van-image
            width="40"
            fit="cover"
            round
            height="40"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        <div class="right">
            <div class="top-left">
                <p>云游天下</p>
                <p style="color:#929497">0点赞</p>
            </div>
            <div class="time">2020-07-09</div>
            <div class="bot">家搭嘎好多个 阿尔发</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.right{
    width: 100vw;
}
.bot{
    font-size: 18px;
}
.top-left{
    display:flex;justify-content: space-between;
    font-size: 16px;
    margin-bottom: 5px;
}
.time{
    font-size: 14px;
    /* padding: 10px; */
    color: #A0A4A9;
    margin-bottom: 4px;
}
.item{
    display: flex;
    padding: 10px;
    
}

</style>