import request from '@/utils/request.js'
// 获取歌词
export const GetLyric=params=>request({
    url:"/lyric",
    params
})
// 获取歌曲详情
export const GetMusicDetails=params=>request({
    url:'/song/detail',
    params
})