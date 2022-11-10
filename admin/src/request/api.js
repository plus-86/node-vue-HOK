import instance from "./request";
// 上传图片
export const uploadFile = (params) => instance.post('/upload', params)
// 登录
export const Login = (params) => instance.post('/login', params)
// 分类
export const addCategory = (params) => instance.post('/rest/categories', params)

export const getCategoryList = () => instance.get('/rest/categories')

export const getCategoryById = (params) => instance.get(`/rest/categories/${params}`)

export const updateCategoryById = (params, id) => instance.put(`/rest/categories/${id}`, params)

export const removeCategoryById = (id) => instance.delete(`/rest/categories/${id}`)
// 物品
export const addItem = (params) => instance.post('/rest/items', params)

export const getItemList = () => instance.get('/rest/items')

export const getItemById = (params) => instance.get(`/rest/items/${params}`)

export const updateItemById = (params, id) => instance.put(`/rest/items/${id}`, params)

export const removeItemById = (id) => instance.delete(`/rest/items/${id}`)
// 英雄
export const addHero = (params) => instance.post('/rest/heroes', params)

export const getHeroList = () => instance.get('/rest/heroes')

export const getHeroById = (params) => instance.get(`/rest/heroes/${params}`)

export const updateHeroById = (params, id) => instance.put(`/rest/heroes/${id}`, params)

export const removeHeroById = (id) => instance.delete(`/rest/heroes/${id}`)
// 文章
export const addArticle = (params) => instance.post('/rest/articles', params)

export const getArticleList = () => instance.get('/rest/articles')

export const getArticleById = (params) => instance.get(`/rest/articles/${params}`)

export const updateArticleById = (params, id) => instance.put(`/rest/articles/${id}`, params)

export const removeArticleById = (id) => instance.delete(`/rest/articles/${id}`)
// 广告
export const addAd = (params) => instance.post('/rest/ads', params)

export const getAdList = () => instance.get('/rest/ads')

export const getAdById = (params) => instance.get(`/rest/ads/${params}`)

export const updateAdById = (params, id) => instance.put(`/rest/ads/${id}`, params)

export const removeAdById = (id) => instance.delete(`/rest/ads/${id}`)
// 管理员用户
export const addAdminUser = (params) => instance.post('/rest/admin_users', params)

export const getAdminUserList = () => instance.get('/rest/admin_users')

export const getAdminUserById = (params) => instance.get(`/rest/admin_users/${params}`)

export const updateAdminUserById = (params, id) => instance.put(`/rest/admin_users/${id}`, params)

export const removeAdminUserById = (id) => instance.delete(`/rest/admin_users/${id}`)
