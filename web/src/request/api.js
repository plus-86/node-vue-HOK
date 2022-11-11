import instance from "./request";
// 获取新闻列表
export const getNewsCats = () => instance.get('/news/list')

// 获取英雄列表
export const getHeroCats = () => instance.get('/heroes/list')