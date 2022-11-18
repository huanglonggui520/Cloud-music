import request from '@/utils/request'
// 获取评论
export const GetComment=params=>request({
    url:'/comment/music',
    params
})