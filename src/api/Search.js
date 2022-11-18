import request from '@/utils/request.js'
// 获取热搜列表
export const GetHot=params=>request({
    url:'/search/hot',
    params
})
export const GetSearchMusic=params=>request({
    url:"/cloudsearch",
    params
})