import instance from "./request";
// 上传图片
export const uploadFile = (params) => instance.post('/upload', params)

export const addCategory = (params) => instance.post('/rest/categories', params)

export const getCategoryList = () => instance.get('/rest/categories')

export const getCategoryById = (params) => instance.get(`/rest/categories/${params}`)

export const updateCategoryById = (params, id) => instance.put(`/rest/categories/${id}`, params)

export const removeCategoryById = (id) => instance.delete(`/rest/categories/${id}`)

export const addItem = (params) => instance.post('/rest/items', params)

export const getItemList = () => instance.get('/rest/items')

export const getItemById = (params) => instance.get(`/rest/items/${params}`)

export const updateItemById = (params, id) => instance.put(`/rest/items/${id}`, params)

export const removeItemById = (id) => instance.delete(`/rest/items/${id}`)

export const addHero = (params) => instance.post('/rest/heroes', params)

export const getHeroList = () => instance.get('/rest/heroes')

export const getHeroById = (params) => instance.get(`/rest/heroes/${params}`)

export const updateHeroById = (params, id) => instance.put(`/rest/heroes/${id}`, params)

export const removeHeroById = (id) => instance.delete(`/rest/heroes/${id}`)

export const addArticle = (params) => instance.post('/rest/articles', params)

export const getArticleList = () => instance.get('/rest/articles')

export const getArticleById = (params) => instance.get(`/rest/articles/${params}`)

export const updateArticleById = (params, id) => instance.put(`/rest/articles/${id}`, params)

export const removeArticleById = (id) => instance.delete(`/rest/articles/${id}`)
