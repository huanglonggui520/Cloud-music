import request from '@/utils/request.js'
// 获取推荐歌曲
export const PersonalizedMusic = params =>request({
    url:'/personalized',
    params
})
// 最新歌曲
export const GetNewMusic=params=>request({
    url:'/personalized/newsong',
    params
})