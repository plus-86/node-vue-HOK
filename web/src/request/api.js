import instance from "./request";
// 获取新闻列表
export const getNewsCats = () => instance.get('/news/list')

// 获取英雄列表
export const getHeroCats = () => instance.get('/heroes/list')

// 获取文章详情
export const getArticleById = (id) => instance.get(`/articles/${id}`)

// 获取文章详情
export const getHeroById = (id) => instance.get(`/heroes/${id}`)
